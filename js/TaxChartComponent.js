class TaxChartComponent {
  static render(containerElement) {
    const instance = new TaxChartComponent(containerElement);
    instance.init();
    return instance;
  }

  constructor(container) {
    this.container = container;
    this.datasets = [
      { id: 'colony_transition', label: 'Colony: Transition (50% Auto)' },
      { id: 'colony_full_auto', label: 'Colony: Full Auto (100k Robots)' },
      { id: 'colony_pre_auto', label: 'Colony: Frontier (100% Sweat)' },
      { id: 'us_estimate', label: 'Earth Benchmark: US (2024)' }
    ];

    this.currentDatasetId = 'colony_transition';
    this.currentData = null;

    // Control parameters
    this.logOffset = 15000;
    this.isLogarithmic = true;
    this.taxRevenuePercent = 35; // 35% default for the colony
    this.taxProgressivity = 50;  // 50% progressive curve with dividend floor
    this.showAfterTax = true;
    this.hoveredIndex = null;
    this.tooltipX = 16;
    this.tooltipY = 16;
  }

  init() {
    this.container.innerHTML = '';
    this.setupStyles();
    this.loadDataset(this.currentDatasetId);
  }

  setupStyles() {
    applyCss(`
      .tc-embed-wrap {
        background: #0f172a;
        color: #f8fafc;
        border-radius: 12px;
        padding: 20px;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        display: flex;
        flex-direction: column;
        gap: 16px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
        border: 1px solid #334155;
      }

      .tc-embed-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      .tc-embed-title {
        font-size: 1.15rem;
        font-weight: 800;
        letter-spacing: -0.01em;
        color: #f8fafc;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .tc-embed-badge {
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        background: rgba(56, 189, 248, 0.15);
        color: #38bdf8;
        padding: 3px 8px;
        border-radius: 12px;
        border: 1px solid rgba(56, 189, 248, 0.3);
      }

      /* Locked-height indicator cards to eliminate vertical jitter */
      .tc-embed-indicators {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }

      @media (max-width: 580px) {
        .tc-embed-indicators {
          grid-template-columns: 1fr;
        }
      }

      .tc-embed-card {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 12px 18px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        overflow: hidden;
        min-height: 92px;
        box-sizing: border-box;
      }

      .tc-embed-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }

      .tc-embed-card.gci::before {
        background: linear-gradient(90deg, #38bdf8, #0284c7);
      }

      .tc-embed-card.budget::before {
        background: linear-gradient(90deg, #f59e0b, #10b981);
      }

      .tc-embed-card-lbl {
        font-size: 0.74rem;
        font-weight: 700;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.06em;
        margin-bottom: 2px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tc-embed-card-val {
        font-size: 1.65rem;
        font-weight: 800;
        line-height: 1.15;
        font-variant-numeric: tabular-nums;
      }

      .tc-embed-card-sub {
        font-size: 0.74rem;
        color: #94a3b8;
        margin-top: 3px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      /* Clean 2x2 Segmented Scenario Selector - NO ugly horizontal scroll */
      .tc-embed-picker {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 6px;
        gap: 6px;
        box-sizing: border-box;
      }

      @media (max-width: 620px) {
        .tc-embed-picker {
          grid-template-columns: 1fr;
        }
      }

      .tc-embed-btn {
        background: transparent;
        border: none;
        color: #94a3b8;
        padding: 9px 12px;
        font-size: 0.78rem;
        font-weight: 700;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.16s ease;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .tc-embed-btn:hover {
        color: #f8fafc;
        background: rgba(255, 255, 255, 0.05);
      }

      .tc-embed-btn.active {
        color: #ffffff;
        background: linear-gradient(135deg, #0284c7, #059669);
        box-shadow: 0 2px 8px rgba(2, 132, 199, 0.4);
      }

      .tc-embed-desc {
        font-size: 0.84rem;
        color: #94a3b8;
        line-height: 1.45;
        margin: 0;
        min-height: 38px;
      }

      /* Chart & Tooltip Area */
      .tc-embed-chart-box {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 12px;
        position: relative;
      }

      .tc-embed-svg {
        width: 100%;
        height: auto;
        display: block;
      }

      .tc-embed-tooltip {
        position: absolute;
        top: 14px;
        left: 14px;
        background: rgba(15, 23, 42, 0.96);
        border: 1.5px solid #334155;
        border-radius: 8px;
        padding: 10px 12px;
        font-size: 0.78rem;
        z-index: 100;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.6);
        width: 260px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 4px;
        user-select: none;
        cursor: move;
      }

      .tc-embed-tt-hdr {
        font-weight: bold;
        color: #38bdf8;
        border-bottom: 1px solid #334155;
        padding-bottom: 4px;
        margin-bottom: 2px;
      }

      .tc-embed-tt-row {
        display: flex;
        justify-content: space-between;
      }

      .tc-embed-tt-val {
        font-weight: 600;
        color: #f8fafc;
        font-variant-numeric: tabular-nums;
      }

      /* Locked Height Policy Slider Cards to eliminate layout shift */
      .tc-embed-sliders {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 14px;
      }

      @media (max-width: 620px) {
        .tc-embed-sliders {
          grid-template-columns: 1fr;
        }
      }

      .tc-embed-slider-card {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 10px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 140px;
        box-sizing: border-box;
      }

      .tc-embed-slider-lbl-row {
        display: flex;
        justify-content: space-between;
        font-size: 0.84rem;
        font-weight: 700;
      }

      .tc-embed-slider {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 6px;
        border-radius: 3px;
        background: #334155;
        outline: none;
        margin: 6px 0;
      }

      .tc-embed-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #38bdf8;
        cursor: pointer;
        transition: transform 0.12s ease;
      }

      .tc-embed-slider::-webkit-slider-thumb:hover {
        transform: scale(1.15);
      }

      .tc-embed-slider.prog::-webkit-slider-thumb {
        background: #10b981;
      }

      /* Fixed min-height for explanation to prevent slider dragging jitter */
      .tc-embed-slider-exp {
        font-size: 0.74rem;
        color: #94a3b8;
        line-height: 1.4;
        margin: 0;
        min-height: 38px;
        display: flex;
        align-items: center;
      }

      /* Footer Bar */
      .tc-embed-footer-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
        padding: 10px 14px;
        background: rgba(30, 41, 59, 0.6);
        border-radius: 8px;
        font-size: 0.78rem;
      }

      .tc-embed-toggles {
        display: flex;
        gap: 16px;
        align-items: center;
      }

      .tc-embed-chk-label {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        font-weight: 600;
      }

      .tc-embed-gini-badge {
        font-weight: 700;
        font-size: 0.78rem;
        font-variant-numeric: tabular-nums;
      }
    `, 'tc-embed-component-styles');
  }

  loadDataset(id) {
    this.currentDatasetId = id;
    this.currentData = this.getDatasetData(id);
    this.renderLayout();
  }

  getDatasetData(id) {
    if (id === 'colony_transition') {
      return {
        name: "Colony: Transition (50% Auto)",
        type: "pioneers",
        totalEntities: 100000,
        currency: "$",
        description: "Partial Automation: 50% of manual labor is automated. Wage shifts for manual labor decrease, but overall physical production and capital dividends surge.",
        data: [
          { percentile: 2.5, income: 0 },
          { percentile: 7.5, income: 0 },
          { percentile: 12.5, income: 0 },
          { percentile: 17.5, income: 0 },
          { percentile: 22.5, income: 0 },
          { percentile: 27.5, income: 0 },
          { percentile: 32.5, income: 15000 },
          { percentile: 37.5, income: 28000 },
          { percentile: 42.5, income: 42000 },
          { percentile: 47.5, income: 55000 },
          { percentile: 52.5, income: 70000 },
          { percentile: 57.5, income: 90000 },
          { percentile: 62.5, income: 115000 },
          { percentile: 67.5, income: 145000 },
          { percentile: 72.5, income: 185000 },
          { percentile: 77.5, income: 240000 },
          { percentile: 82.5, income: 320000 },
          { percentile: 87.5, income: 450000 },
          { percentile: 92.5, income: 750000 },
          { percentile: 97.5, income: 1800000 }
        ]
      };
    } else if (id === 'colony_full_auto') {
      return {
        name: "Colony: Full Auto (100k Robots)",
        type: "pioneers",
        totalEntities: 100000,
        currency: "$",
        description: "Full Post-Job Abundance: 100,000 autonomous utility machines do all heavy infrastructure, farming, and logistics. Wage sweat is obsolete for 80%+ of citizens.",
        data: [
          { percentile: 2.5, income: 0 },
          { percentile: 7.5, income: 0 },
          { percentile: 12.5, income: 0 },
          { percentile: 17.5, income: 0 },
          { percentile: 22.5, income: 0 },
          { percentile: 27.5, income: 0 },
          { percentile: 32.5, income: 0 },
          { percentile: 37.5, income: 0 },
          { percentile: 42.5, income: 0 },
          { percentile: 47.5, income: 0 },
          { percentile: 52.5, income: 0 },
          { percentile: 57.5, income: 0 },
          { percentile: 62.5, income: 0 },
          { percentile: 67.5, income: 0 },
          { percentile: 72.5, income: 0 },
          { percentile: 77.5, income: 8000 },
          { percentile: 82.5, income: 75000 },
          { percentile: 87.5, income: 320000 },
          { percentile: 92.5, income: 1100000 },
          { percentile: 97.5, income: 3200000 }
        ]
      };
    } else if (id === 'colony_pre_auto') {
      return {
        name: "Colony: Frontier (100% Sweat)",
        type: "pioneers",
        totalEntities: 100000,
        currency: "$",
        description: "Early Settlement Baseline: 100% human labor. Narrow income spread, everyone must work full shifts felling timber and farming to keep the colony running.",
        data: [
          { percentile: 2.5, income: 18000 },
          { percentile: 7.5, income: 24000 },
          { percentile: 12.5, income: 30000 },
          { percentile: 17.5, income: 36000 },
          { percentile: 22.5, income: 42000 },
          { percentile: 27.5, income: 48000 },
          { percentile: 32.5, income: 54000 },
          { percentile: 37.5, income: 60000 },
          { percentile: 42.5, income: 68000 },
          { percentile: 47.5, income: 76000 },
          { percentile: 52.5, income: 85000 },
          { percentile: 57.5, income: 95000 },
          { percentile: 62.5, income: 108000 },
          { percentile: 67.5, income: 122000 },
          { percentile: 72.5, income: 140000 },
          { percentile: 77.5, income: 165000 },
          { percentile: 82.5, income: 195000 },
          { percentile: 87.5, income: 235000 },
          { percentile: 92.5, income: 300000 },
          { percentile: 97.5, income: 480000 }
        ]
      };
    } else {
      return {
        name: "Earth Benchmark: US (2024)",
        type: "households",
        totalEntities: 131400000,
        currency: "$",
        description: "Approximate distribution of US household incomes with high upper-tail inequality, providing a real-world benchmark against the colony's model.",
        data: [
          { percentile: 2.5, income: 7200 },
          { percentile: 7.5, income: 15000 },
          { percentile: 12.5, income: 23000 },
          { percentile: 17.5, income: 32000 },
          { percentile: 22.5, income: 41000 },
          { percentile: 27.5, income: 50000 },
          { percentile: 32.5, income: 60000 },
          { percentile: 37.5, income: 71000 },
          { percentile: 42.5, income: 83000 },
          { percentile: 47.5, income: 96000 },
          { percentile: 52.5, income: 110000 },
          { percentile: 57.5, income: 126000 },
          { percentile: 62.5, income: 145000 },
          { percentile: 67.5, income: 170000 },
          { percentile: 72.5, income: 210000 },
          { percentile: 77.5, income: 260000 },
          { percentile: 82.5, income: 330000 },
          { percentile: 87.5, income: 450000 },
          { percentile: 92.5, income: 700000 },
          { percentile: 97.5, income: 2200000 }
        ]
      };
    }
  }

  renderLayout() {
    this.container.innerHTML = '';

    const root = makeElement('div', { className: 'tc-embed-wrap' });

    // Header Title
    const header = makeElement('div', { className: 'tc-embed-header' }, [
      makeElement('div', { className: 'tc-embed-title' }, [
        makeElement('span', {}, '⚡ Colony Democratic Tax & Dividend Simulator'),
        makeElement('span', { className: 'tc-embed-badge' }, 'Live Simulation')
      ])
    ]);
    root.appendChild(header);

    // Indicator cards with locked height
    const indicatorsRow = makeElement('div', { className: 'tc-embed-indicators' }, [
      this.cardGci = makeElement('div', { className: 'tc-embed-card gci' }, [
        makeElement('span', { className: 'tc-embed-card-lbl' }, 'Gross Aggregate Output'),
        this.valGci = makeElement('span', { className: 'tc-embed-card-val', style: { color: '#38bdf8' } }, '$0'),
        this.subGci = makeElement('span', { className: 'tc-embed-card-sub' }, 'Annual economic volume')
      ]),
      this.cardBudget = makeElement('div', { className: 'tc-embed-card budget' }, [
        makeElement('span', { className: 'tc-embed-card-lbl' }, 'Public Dividend & Civic Pool'),
        this.valBudget = makeElement('span', { className: 'tc-embed-card-val', style: { color: '#f59e0b' } }, '$0'),
        this.subBudget = makeElement('span', { className: 'tc-embed-card-sub' }, 'Target: 35% | Effective: 35%')
      ])
    ]);
    root.appendChild(indicatorsRow);

    // Clean 2x2 Scenario Picker Bar
    const picker = makeElement('div', { className: 'tc-embed-picker' }, 
      this.datasets.map((d) => {
        return makeElement('button', {
          className: `tc-embed-btn ${d.id === this.currentDatasetId ? 'active' : ''}`,
          onclick: () => this.loadDataset(d.id)
        }, d.label);
      })
    );
    root.appendChild(picker);

    // Description text with fixed min-height
    this.descEl = makeElement('p', { className: 'tc-embed-desc' }, this.currentData.description);
    root.appendChild(this.descEl);

    // SVG Chart Area
    const chartBox = makeElement('div', { className: 'tc-embed-chart-box' });
    
    this.tooltipEl = makeElement('div', { className: 'tc-embed-tooltip' });
    chartBox.appendChild(this.tooltipEl);
    this.setupTooltipDragging(this.tooltipEl);
    this.renderTooltipPlaceholder();

    this.svgElement = makeElement('svg:svg', {
      viewBox: '0 0 1000 440',
      className: 'tc-embed-svg'
    });
    chartBox.appendChild(this.svgElement);
    root.appendChild(chartBox);

    // Policy Sliders Row with locked min-height
    const slidersRow = makeElement('div', { className: 'tc-embed-sliders' }, [
      // Slider 1: Total Revenue Rate (T)
      makeElement('div', { className: 'tc-embed-slider-card' }, [
        makeElement('div', { className: 'tc-embed-slider-lbl-row' }, [
          makeElement('span', { style: { color: '#38bdf8' } }, 'Total Collection Rate (T)'),
          this.lblRevenue = makeElement('span', { style: { color: '#38bdf8' } }, `${this.taxRevenuePercent}%`)
        ]),
        makeElement('input', {
          type: 'range',
          className: 'tc-embed-slider',
          min: '0',
          max: '80',
          value: String(this.taxRevenuePercent),
          oninput: (e) => {
            this.taxRevenuePercent = parseInt(e.target.value) || 0;
            this.lblRevenue.textContent = `${this.taxRevenuePercent}%`;
            this.update();
          }
        }),
        makeElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' } }, [
          makeElement('span', '0% (Zero Budget)'),
          makeElement('span', '80% (High Collective)')
        ]),
        this.expRevenue = makeElement('p', { className: 'tc-embed-slider-exp' })
      ]),

      // Slider 2: Progressivity Index (P)
      makeElement('div', { className: 'tc-embed-slider-card' }, [
        makeElement('div', { className: 'tc-embed-slider-lbl-row' }, [
          makeElement('span', { style: { color: '#10b981' } }, 'Progressivity Index (P)'),
          this.lblProgressivity = makeElement('span', { style: { color: '#10b981' } }, `${this.taxProgressivity}%`)
        ]),
        makeElement('input', {
          type: 'range',
          className: 'tc-embed-slider prog',
          min: '0',
          max: '100',
          value: String(this.taxProgressivity),
          oninput: (e) => {
            this.taxProgressivity = parseFloat(e.target.value) || 0;
            this.lblProgressivity.textContent = `${this.taxProgressivity}%`;
            this.update();
          }
        }),
        makeElement('div', { style: { display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8' } }, [
          makeElement('span', '0% (Poll Fee)'),
          makeElement('span', '30% (Flat Rate)'),
          makeElement('span', '50% (Dividend Floor)'),
          makeElement('span', '100% (Equalizer)')
        ]),
        this.expProgressivity = makeElement('p', { className: 'tc-embed-slider-exp' })
      ])
    ]);
    root.appendChild(slidersRow);

    // Footer Bar: Toggles & Gini Index
    const footerBar = makeElement('div', { className: 'tc-embed-footer-bar' }, [
      makeElement('div', { className: 'tc-embed-toggles' }, [
        makeElement('label', { className: 'tc-embed-chk-label' }, [
          makeElement('input', {
            type: 'checkbox',
            checked: this.showAfterTax,
            onchange: (e) => {
              this.showAfterTax = e.target.checked;
              this.update();
            }
          }),
          makeElement('span', { style: { color: '#10b981' } }, 'Show After-Tax Dividend Curve')
        ]),
        makeElement('label', { className: 'tc-embed-chk-label' }, [
          makeElement('input', {
            type: 'checkbox',
            checked: this.isLogarithmic,
            onchange: (e) => {
              this.isLogarithmic = e.target.checked;
              this.update();
            }
          }),
          makeElement('span', { style: { color: '#38bdf8' } }, 'Logarithmic Scale')
        ])
      ]),
      this.giniBadge = makeElement('div', { className: 'tc-embed-gini-badge' })
    ]);
    root.appendChild(footerBar);

    this.container.appendChild(root);
    this.update();
  }

  calculateGini(incomes) {
    const n = incomes.length;
    if (n === 0) return 0;
    let absoluteDifferenceSum = 0;
    let totalSum = 0;

    for (let i = 0; i < n; i++) {
      totalSum += incomes[i];
      for (let j = 0; j < n; j++) {
        absoluteDifferenceSum += Math.abs(incomes[i] - incomes[j]);
      }
    }

    if (totalSum === 0) return 0;
    return absoluteDifferenceSum / (2 * n * totalSum);
  }

  calculateTaxes(dataPoints, totalRevenuePercent, progressivityPercent) {
    const n = dataPoints.length;
    const incomes = dataPoints.map((p) => p.income);
    const totalPreTaxIncome = incomes.reduce((a, b) => a + b, 0);

    const r = totalRevenuePercent / 100;
    const targetRevenueTotal = totalPreTaxIncome * r;
    const targetTaxPerBracket = targetRevenueTotal / n;
    const averageIncome = totalPreTaxIncome / n;

    let taxes = new Array(n).fill(0);

    const S = progressivityPercent;
    let p = 0.5;
    if (S <= 30) {
      p = (S / 30) * 0.5;
    } else if (S <= 50) {
      p = 0.5 + ((S - 30) / 20) * 0.20;
    } else {
      p = 0.70 + ((S - 50) / 50) * 0.30;
    }

    if (p <= 0.5) {
      const linearU = p * 2;
      const u = 1 - Math.pow(1 - linearU, 4);
      for (let i = 0; i < n; i++) {
        taxes[i] = (1 - u) * targetTaxPerBracket + u * (r * incomes[i]);
      }
    } else {
      const u = (p - 0.5) * 2;
      for (let i = 0; i < n; i++) {
        const equalizingTax = incomes[i] - (1 - r) * averageIncome;
        taxes[i] = (1 - u) * (r * incomes[i]) + u * equalizingTax;
      }
    }

    let iterations = 0;
    while (iterations < 10) {
      let shortfall = 0;
      let eligiblePreTaxSum = 0;

      for (let i = 0; i < n; i++) {
        if (taxes[i] > incomes[i]) {
          shortfall += (taxes[i] - incomes[i]);
          taxes[i] = incomes[i];
        } else if (taxes[i] < incomes[i]) {
          eligiblePreTaxSum += incomes[i];
        }
      }

      if (shortfall < 0.1 || eligiblePreTaxSum === 0) break;

      for (let i = 0; i < n; i++) {
        if (taxes[i] < incomes[i]) {
          const share = incomes[i] / eligiblePreTaxSum;
          taxes[i] += shortfall * share;
        }
      }
      iterations++;
    }

    const postTax = incomes.map((inc, i) => Math.max(0, inc - taxes[i]));
    return { taxes, postTax };
  }

  update() {
    if (!this.currentData || !this.currentData.data) return;

    const dataPoints = this.currentData.data;
    const totalPop = this.currentData.totalEntities;
    const currency = '$';

    // Descriptions
    if (this.taxRevenuePercent === 0) {
      this.expRevenue.textContent = "Zero Rate: No public collection. Public reserves and robot dividend pool are zero.";
    } else if (this.taxRevenuePercent < 25) {
      this.expRevenue.textContent = `Light Collection: Capturing ${this.taxRevenuePercent}% provides basic maintenance but small universal dividends.`;
    } else if (this.taxRevenuePercent < 50) {
      this.expRevenue.textContent = `Balanced Colony Standard: ${this.taxRevenuePercent}% captures automated machine surplus to fund universal security.`;
    } else {
      this.expRevenue.textContent = `High Dividend Collection: ${this.taxRevenuePercent}% channels heavy automated output into large citizen Credit dividends.`;
    }

    if (this.taxProgressivity === 0) {
      this.expProgressivity.textContent = "Poll Tax: Every bracket pays an identical absolute sum, regressive on lower tiers.";
    } else if (this.taxProgressivity === 30) {
      this.expProgressivity.textContent = `Flat Percentage: Everyone contributes exactly ${this.taxRevenuePercent}% of income. Inequality remains identical.`;
    } else if (this.taxProgressivity <= 50) {
      this.expProgressivity.textContent = "Balanced Progressive Curve: Lower brackets receive net Credit dividends (negative tax), supported by capital.";
    } else if (this.taxProgressivity < 100) {
      this.expProgressivity.textContent = "Strong Equalizer: Large Universal Robot Dividend floor guarantees high living standards for all.";
    } else {
      this.expProgressivity.textContent = "Total Equalization: Post-tax disposable income is completely flattened.";
    }

    // Calculations
    const preTaxIncomes = dataPoints.map((p) => p.income);
    const preTaxGini = this.calculateGini(preTaxIncomes);
    const preTaxSum = preTaxIncomes.reduce((a, b) => a + b, 0);
    const nationalAnnualIncome = preTaxSum * (totalPop * 0.05);

    const { taxes, postTax } = this.calculateTaxes(dataPoints, this.taxRevenuePercent, this.taxProgressivity);
    const postTaxGini = this.calculateGini(postTax);

    const totalTaxesCollected = taxes.reduce((a, b) => a + b, 0) * (totalPop * 0.05);
    const actualCollectedRatio = nationalAnnualIncome > 0 ? (totalTaxesCollected / nationalAnnualIncome * 100) : 0;

    // Update Indicator values
    this.valGci.textContent = this.formatCurrency(nationalAnnualIncome, currency);
    this.subGci.textContent = `For ${totalPop.toLocaleString()} ${this.currentData.type || 'citizens'}`;

    this.valBudget.textContent = this.formatCurrency(totalTaxesCollected, currency);
    this.subBudget.textContent = `Target: ${this.taxRevenuePercent}% | Effective: ${actualCollectedRatio.toFixed(1)}% of gross output`;

    // Gini reduction badge
    const giniReduction = preTaxGini > 0 ? ((preTaxGini - postTaxGini) / preTaxGini * 100) : 0;
    this.giniBadge.innerHTML = `
      <span style="color: #38bdf8;">Pre Gini: ${preTaxGini.toFixed(3)}</span>
      <span style="color: #94a3b8; margin: 0 6px;">➔</span>
      <span style="color: #10b981;">Post Gini: ${postTaxGini.toFixed(3)}</span>
      <span style="color: #f59e0b; margin-left: 8px;">(${giniReduction.toFixed(1)}% reduction)</span>
    `;

    // Render SVG
    this.renderSvg(dataPoints, postTax, preTaxIncomes, currency);

    if (this.hoveredIndex !== null) {
      this.updateTooltip(this.hoveredIndex);
    }
  }

  renderSvg(dataPoints, postTax, preTaxIncomes, currency) {
    const width = 1000;
    const height = 440;
    const padding = { top: 30, right: 40, bottom: 50, left: 100 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;
    const baselineY = padding.top + chartH;

    const maxPreTaxVal = Math.max(...preTaxIncomes, 1);
    const maxPostTaxVal = this.showAfterTax ? Math.max(...postTax, 1) : 1;
    const maxOverallValue = Math.max(maxPreTaxVal, maxPostTaxVal);

    const scaleLogY = (val) => {
      if (val <= 0) return 0;
      return Math.log10(val + this.logOffset) - Math.log10(this.logOffset);
    };

    const maxScaledValue = scaleLogY(maxOverallValue);

    const mapX = (percentile) => padding.left + (percentile / 100) * chartW;
    const mapY = (val) => {
      if (val <= 0) return baselineY;
      if (this.isLogarithmic) {
        const scaled = scaleLogY(val);
        const fraction = scaled / maxScaledValue;
        return baselineY - (fraction * chartH);
      } else {
        const fraction = val / maxOverallValue;
        return baselineY - (fraction * chartH);
      }
    };

    this.svgElement.innerHTML = '';
    const svgChildren = [];

    // Horizontal grid ticks
    const tickCandidates = [0, 10000, 25000, 50000, 100000, 250000, 500000, 1000000, 2500000];
    const ticks = tickCandidates.filter((v) => v <= maxOverallValue);
    if (ticks.length < 3) ticks.push(maxOverallValue);

    ticks.forEach((tickVal) => {
      const yCoord = mapY(tickVal);
      svgChildren.push(['svg:line', {
        x1: padding.left, y1: yCoord,
        x2: width - padding.right, y2: yCoord,
        stroke: '#334155', 'stroke-width': 1, 'stroke-dasharray': '3 3'
      }]);
      svgChildren.push(['svg:text', {
        x: padding.left - 10, y: yCoord + 4,
        'text-anchor': 'end', fill: '#94a3b8',
        'font-size': '11px', 'font-family': 'monospace'
      }, `${currency}${tickVal.toLocaleString()}`]);
    });

    // Vertical percentile grid
    for (let p = 0; p <= 100; p += 10) {
      const xCoord = mapX(p);
      svgChildren.push(['svg:line', {
        x1: xCoord, y1: padding.top,
        x2: xCoord, y2: baselineY,
        stroke: 'rgba(51, 65, 85, 0.4)', 'stroke-width': 1
      }]);
      svgChildren.push(['svg:text', {
        x: xCoord, y: baselineY + 20,
        'text-anchor': 'middle', fill: '#94a3b8', 'font-size': '11px'
      }, `${p}%`]);
    }

    // Tangent nodes & Bezier curves
    const preNodes = [];
    const postNodes = [];

    const preZero = Math.max(0, dataPoints[0].income - (dataPoints[1].income - dataPoints[0].income) * 0.5);
    const postZero = Math.max(0, postTax[0] - (postTax[1] - postTax[0]) * 0.5);
    preNodes.push({ x: mapX(0), y: mapY(preZero) });
    postNodes.push({ x: mapX(0), y: mapY(postZero) });

    dataPoints.forEach((p, idx) => {
      preNodes.push({ x: mapX(p.percentile), y: mapY(p.income) });
      postNodes.push({ x: mapX(p.percentile), y: mapY(postTax[idx]) });
    });

    const preOneHundred = dataPoints[19].income + (dataPoints[19].income - dataPoints[18].income) * 0.5;
    const postOneHundred = postTax[19] + (postTax[19] - postTax[18]) * 0.5;
    preNodes.push({ x: mapX(100), y: mapY(preOneHundred) });
    postNodes.push({ x: mapX(100), y: mapY(postOneHundred) });

    const preSegments = this.computeBezierSegments(preNodes, baselineY);
    const postSegments = this.computeBezierSegments(postNodes, baselineY);

    // Pre-Tax Area
    let preAreaD = `M ${mapX(0)} ${baselineY}`;
    preSegments.forEach((seg) => {
      preAreaD += ` C ${seg.cp1.x.toFixed(1)} ${seg.cp1.y.toFixed(1)}, ${seg.cp2.x.toFixed(1)} ${seg.cp2.y.toFixed(1)}, ${seg.p1.x.toFixed(1)} ${seg.p1.y.toFixed(1)}`;
    });
    preAreaD += ` L ${mapX(100)} ${baselineY} Z`;
    svgChildren.push(['svg:path', { d: preAreaD, fill: 'url(#pre-tax-grad)', opacity: 0.15 }]);

    // Post-Tax Area
    if (this.showAfterTax) {
      let postAreaD = `M ${mapX(0)} ${baselineY}`;
      postSegments.forEach((seg) => {
        postAreaD += ` C ${seg.cp1.x.toFixed(1)} ${seg.cp1.y.toFixed(1)}, ${seg.cp2.x.toFixed(1)} ${seg.cp2.y.toFixed(1)}, ${seg.p1.x.toFixed(1)} ${seg.p1.y.toFixed(1)}`;
      });
      postAreaD += ` L ${mapX(100)} ${baselineY} Z`;
      svgChildren.push(['svg:path', { d: postAreaD, fill: 'url(#post-tax-grad)', opacity: 0.15 }]);
    }

    // Pre-Tax Path Lines
    preSegments.forEach((seg, idx) => {
      const isHovered = (this.hoveredIndex === idx);
      svgChildren.push(['svg:path', {
        d: seg.pathD,
        fill: 'none',
        stroke: isHovered ? '#38bdf8' : 'rgba(56, 189, 248, 0.5)',
        'stroke-width': isHovered ? 5.5 : 2.5,
        'stroke-linecap': 'round'
      }]);
    });

    // Post-Tax Path Lines
    if (this.showAfterTax) {
      postSegments.forEach((seg, idx) => {
        const isHovered = (this.hoveredIndex === idx);
        svgChildren.push(['svg:path', {
          d: seg.pathD,
          fill: 'none',
          stroke: isHovered ? '#10b981' : 'rgba(16, 185, 129, 0.65)',
          'stroke-width': isHovered ? 6.5 : 3.0,
          'stroke-linecap': 'round'
        }]);
      });
    }

    // Gradient Defs
    svgChildren.push(['svg:defs', {}, [
      ['svg:linearGradient', { id: 'pre-tax-grad', x1: '0%', y1: '0%', x2: '0%', y2: '100%' }, [
        ['svg:stop', { offset: '0%', 'stop-color': '#38bdf8', 'stop-opacity': 0.6 }],
        ['svg:stop', { offset: '100%', 'stop-color': '#38bdf8', 'stop-opacity': 0 }]
      ]],
      ['svg:linearGradient', { id: 'post-tax-grad', x1: '0%', y1: '0%', x2: '0%', y2: '100%' }, [
        ['svg:stop', { offset: '0%', 'stop-color': '#10b981', 'stop-opacity': 0.6 }],
        ['svg:stop', { offset: '100%', 'stop-color': '#10b981', 'stop-opacity': 0 }]
      ]]
    ]]);

    // Invisible Column Hover Hitboxes
    for (let idx = 0; idx <= 20; idx++) {
      let xStart = (idx === 0) ? mapX(0) : mapX(idx * 5 - 2.5);
      let xEnd = (idx === 20) ? mapX(100) : mapX(idx * 5 + 2.5);
      const colWidth = xEnd - xStart;

      svgChildren.push(['svg:rect', {
        x: xStart,
        y: padding.top,
        width: colWidth,
        height: chartH,
        fill: 'transparent',
        style: { cursor: 'pointer' },
        onmouseover: () => {
          this.hoveredIndex = idx;
          this.updateTooltip(idx);
          this.update();
        },
        onmouseout: () => {
          this.hoveredIndex = null;
          this.renderTooltipPlaceholder();
          this.update();
        }
      }]);
    }

    // Node Circles
    dataPoints.forEach((p, idx) => {
      const cx = mapX(p.percentile);
      const cyPre = mapY(p.income);
      const cyPost = mapY(postTax[idx]);
      const isHovered = (this.hoveredIndex === idx);

      svgChildren.push(['svg:circle', {
        cx, cy: cyPre,
        r: isHovered ? 5.5 : 3.5,
        fill: '#38bdf8',
        stroke: '#0f172a',
        'stroke-width': 1.5
      }]);

      if (this.showAfterTax) {
        svgChildren.push(['svg:circle', {
          cx, cy: cyPost,
          r: isHovered ? 6.5 : 4.0,
          fill: '#10b981',
          stroke: '#0f172a',
          'stroke-width': 1.5
        }]);
      }
    });

    // Axis frames
    svgChildren.push(['svg:line', {
      x1: padding.left, y1: baselineY,
      x2: width - padding.right, y2: baselineY,
      stroke: '#334155', 'stroke-width': 1.5
    }]);
    svgChildren.push(['svg:line', {
      x1: padding.left, y1: padding.top,
      x2: padding.left, y2: baselineY,
      stroke: '#334155', 'stroke-width': 1.5
    }]);

    // Append to SVG
    svgChildren.forEach((child) => {
      const tag = child[0];
      const props = child[1];
      const textContent = child[2];
      const nested = child[2];

      const el = document.createElementNS("http://www.w3.org/2000/svg", tag.replace('svg:', ''));
      Object.entries(props).forEach(([k, v]) => {
        if (k.startsWith('on')) el[k] = v;
        else el.setAttribute(k, v);
      });

      if (tag === 'svg:defs' && Array.isArray(nested)) {
        nested.forEach((nestedGrad) => {
          const gradEl = document.createElementNS("http://www.w3.org/2000/svg", nestedGrad[0].replace('svg:', ''));
          Object.entries(nestedGrad[1]).forEach(([gk, gv]) => gradEl.setAttribute(gk, gv));
          if (Array.isArray(nestedGrad[2])) {
            nestedGrad[2].forEach((stop) => {
              const stopEl = document.createElementNS("http://www.w3.org/2000/svg", stop[0].replace('svg:', ''));
              Object.entries(stop[1]).forEach(([sk, sv]) => stopEl.setAttribute(sk, sv));
              gradEl.appendChild(stopEl);
            });
          }
          el.appendChild(gradEl);
        });
      } else if (typeof textContent === 'string') {
        el.textContent = textContent;
      }

      this.svgElement.appendChild(el);
    });
  }

  computeBezierSegments(nodes, baselineY) {
    const n = nodes.length;
    const segments = [];
    const slopes = new Array(n);

    for (let i = 0; i < n; i++) {
      if (nodes[i].y === baselineY) {
        slopes[i] = 0;
      } else if (i === 0) {
        slopes[i] = (nodes[1].y - nodes[0].y) / (nodes[1].x - nodes[0].x);
      } else if (i === n - 1) {
        slopes[i] = (nodes[n - 1].y - nodes[n - 2].y) / (nodes[n - 1].x - nodes[n - 2].x);
      } else {
        slopes[i] = (nodes[i + 1].y - nodes[i - 1].y) / (nodes[i + 1].x - nodes[i - 1].x);
      }

      if (i > 0 && i < n - 1) {
        const dy1 = nodes[i].y - nodes[i - 1].y;
        const dy2 = nodes[i + 1].y - nodes[i].y;
        if (dy1 * dy2 < 0) slopes[i] = 0;
      }
    }

    for (let i = 0; i < n - 1; i++) {
      const p0 = nodes[i];
      const p1 = nodes[i + 1];
      const dx = p1.x - p0.x;

      const cp1x = p0.x + dx / 3;
      const cp1y = p0.y + slopes[i] * (dx / 3);
      const cp2x = p1.x - dx / 3;
      const cp2y = p1.y - slopes[i + 1] * (dx / 3);

      segments.push({
        p0, p1,
        cp1: { x: cp1x, y: cp1y },
        cp2: { x: cp2x, y: cp2y },
        pathD: `M ${p0.x.toFixed(1)} ${p0.y.toFixed(1)} C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p1.x.toFixed(1)} ${p1.y.toFixed(1)}`
      });
    }
    return segments;
  }

  updateTooltip(idx) {
    if (idx === null || !this.tooltipEl || !this.currentData) {
      this.renderTooltipPlaceholder();
      return;
    }

    const dataPoints = this.currentData.data;
    const currency = '$';
    const preTaxIncomes = dataPoints.map((item) => item.income);
    const preTaxSum = preTaxIncomes.reduce((a, b) => a + b, 0);

    const { taxes, postTax } = this.calculateTaxes(dataPoints, this.taxRevenuePercent, this.taxProgressivity);
    const postSum = postTax.reduce((a, b) => a + b, 0);

    let percentileCenter = idx * 5;
    let minVal = Math.max(0, Math.ceil(percentileCenter - 2.5));
    let maxVal = Math.min(100, Math.floor(percentileCenter + 2.5));

    let repPre = (idx === 0) ? dataPoints[0].income : (idx === 20) ? dataPoints[19].income : dataPoints[idx - 1].income;
    let repPost = (idx === 0) ? postTax[0] : (idx === 20) ? postTax[19] : postTax[idx - 1];

    const netTax = repPre - repPost;
    const rate = repPre > 0 ? (netTax / repPre * 100) : 0;
    const preShare = preTaxSum > 0 ? (repPre / preTaxSum * 100) : 0;
    const postShare = postSum > 0 ? (repPost / postSum * 100) : 0;

    this.tooltipEl.innerHTML = '';
    this.tooltipEl.appendChild(makeElement('div', { className: 'tc-embed-tt-hdr' }, [
      makeElement('span', {}, `${percentileCenter}th Percentile Bracket (${minVal}% - ${maxVal}%)`)
    ]));

    const rows = [
      ['Pre-Tax Wages:', `${currency}${Math.round(repPre).toLocaleString()}`, '#38bdf8'],
      ['After-Tax & Dividend:', `${currency}${Math.round(repPost).toLocaleString()}`, '#10b981'],
      ['Net Dividend / Tax:', netTax < 0 ? `+${currency}${Math.round(Math.abs(netTax)).toLocaleString()} (Credit Dividend)` : `${currency}${Math.round(netTax).toLocaleString()}`, netTax < 0 ? '#10b981' : '#f59e0b'],
      ['Effective Rate:', repPre > 0 ? `${rate.toFixed(1)}%` : 'Net Dividend Recipient', '#f8fafc'],
      ['Gross Output Share:', `${preShare.toFixed(1)}% ➔ ${postShare.toFixed(1)}%`, '#ec4899']
    ];

    rows.forEach(([lbl, val, col]) => {
      this.tooltipEl.appendChild(makeElement('div', { className: 'tc-embed-tt-row' }, [
        makeElement('span', {}, lbl),
        makeElement('span', { className: 'tc-embed-tt-val', style: { color: col } }, val)
      ]));
    });
  }

  renderTooltipPlaceholder() {
    if (!this.tooltipEl) return;
    this.tooltipEl.innerHTML = '';
    this.tooltipEl.appendChild(makeElement('div', {
      style: { textAlign: 'center', color: '#94a3b8', padding: '6px 2px' }
    }, [
      makeElement('div', { style: { fontSize: '1.1rem', marginBottom: '2px' } }, '✥'),
      makeElement('div', { style: { fontWeight: 'bold', color: '#38bdf8', fontSize: '0.82rem' } }, 'Interactive Inspector'),
      makeElement('div', { style: { fontSize: '0.74rem', marginTop: '2px' } }, 'Hover over any percentile bracket to view pre vs. post dividend allocations.'),
      makeElement('div', { style: { fontSize: '0.68rem', color: '#f59e0b', marginTop: '4px' } }, 'Drag this card anywhere')
    ]));
  }

  setupTooltipDragging(el) {
    let isDragging = false;
    let startX = 0, startY = 0;
    let initialLeft = 16, initialTop = 16;

    el.style.left = `${this.tooltipX}px`;
    el.style.top = `${this.tooltipY}px`;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      initialLeft = parseFloat(el.style.left) || 16;
      initialTop = parseFloat(el.style.top) || 16;
      el.style.transition = 'none';
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const newLeft = Math.max(0, Math.min(700, initialLeft + dx));
      const newTop = Math.max(0, Math.min(320, initialTop + dy));
      this.tooltipX = newLeft;
      this.tooltipY = newTop;
      el.style.left = `${newLeft}px`;
      el.style.top = `${newTop}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    el.addEventListener('mousedown', onMouseDown);
  }

  formatCurrency(val, currency) {
    if (val >= 1e12) return `${currency}${(val / 1e12).toFixed(2)}T`;
    if (val >= 1e9) return `${currency}${(val / 1e9).toFixed(2)}B`;
    if (val >= 1e6) return `${currency}${(val / 1e6).toFixed(1)}M`;
    return `${currency}${Math.round(val).toLocaleString()}`;
  }
}

globalThis.TaxChartComponent = TaxChartComponent;
if (typeof module !== "undefined" && module.exports) module.exports = TaxChartComponent;