class ParadigmsComparisonComponent {
  static render(containerElement) {
    const instance = new ParadigmsComparisonComponent(containerElement);
    instance.init();
    return instance;
  }

  constructor(container) {
    this.container = container;
    this.activeDimension = 0;

    this.models = [
      {
        name: "David Shapiro",
        title: "Post-Labor Economics (PLE)",
        badge: "Capital Leverage",
        badgeClass: "badge-shapiro",
        accent: "#a855f7",
        summary: "Sovereign Wealth Funds, citizen equity trusts, and strike-modeled constitutional veto points to counter the Rentier State."
      },
      {
        name: "Emad Mostaque",
        title: "The Last Economy",
        badge: "Compute Vouchers",
        badgeClass: "badge-emad",
        accent: "#f59e0b",
        summary: "Universal Basic Intelligence (UBAI) providing public utility compute vouchers so citizens can mint localized digital value."
      },
      {
        name: "Rob Brown",
        title: "The Robot Dividend",
        badge: "Thermodynamic Reality",
        badgeClass: "badge-brown",
        accent: "#10b981",
        summary: "Algorithmic surplus capture (T & P) distributing unconditional Credit claim checks on net physical output."
      }
    ];

    this.dimensions = [
      {
        id: "wealth",
        title: "1. Thermodynamic Grounding (What is Wealth?)",
        shapiro: "Wealth is capital equity and bargaining leverage. A cash dividend without institutional power creates a docile, dependent 'gilded cage.'",
        emad: "Wealth is computation and intelligence reducing entropy. Tangible compute power and open AI models form the true productive substrate.",
        brown: "Wealth is strictly physical output (food, housing, energy, medicine). Compute is merely the plow; currency is merely the claim check on the bread.",
        verdict: "The Robot Dividend grounds itself in physical thermodynamics. Compute vouchers and equity titles are useless without physical goods."
      },
      {
        id: "tax_issue",
        title: "2. Solving the Tax Collapse (How is It Funded?)",
        shapiro: "Funded through capital returns and resource dividends (like the Alaska model), avoiding direct reliance on general legislative budgets.",
        emad: "Correctly recognizes that payroll taxes on human wages will collapse, concluding cash UBI is impossible. Substitutes compute utility infrastructure.",
        brown: "Directly parameterizes an open democratic curve (T and P) on machine capital output, generating a negative income tax dividend floor.",
        verdict: "Mostaque identified the death of payroll taxes, but Brown's formula proves automated capital surplus directly funds universal dividends."
      },
      {
        id: "power",
        title: "3. Political & Game Theory (Who Holds the Leverage?)",
        shapiro: "Relies on the 'Rentier State' analogy and constitutional veto points modeled on historical labor strikes to prevent authoritarian patronage.",
        emad: "Relies on decentralized, open-source AI infrastructure to prevent centralized tech monopolies and authoritarian state control.",
        brown: "Exposes the Petro-State Fallacy: automated domestic capital has no foreign export escape hatch and is structurally hostage to domestic consumers.",
        verdict: "The Striking Horse Problem: You cannot strike against autonomous machines. Domestic capital requires consumer solvency to survive."
      },
      {
        id: "agency",
        title: "4. Human Agency & Freedom (What Do People Do?)",
        shapiro: "Citizens act as active portfolio stakeholders and civic assembly voters, continuously defending their capital leverage.",
        emad: "Citizens become prompt-hustlers and localized problem-solvers using their daily compute allocations to trade synthetic value.",
        brown: "Compulsory economic hustle is permanently abolished. Citizens enjoy unconditional physical security, free to choose any vocation or leisure.",
        verdict: "True human agency is not managing trading portfolios or prompt-hustling; it is the freedom to live without survival anxiety."
      },
      {
        id: "failure",
        title: "5. Systemic Failure Mode (Where Does It Break?)",
        shapiro: "Financialization & Phantom Leverage: Exposure to equity volatility and relying on strike leverage that vanished the moment labor was automated.",
        emad: "The Caloric Disconnect: In an age of superhuman foundation models, the market value of amateur compute output is zero. You cannot eat FLOPs.",
        brown: "Airtight Alignment: Solves the Prisoner's Dilemma for capital owners (guaranteeing consumers) while securing the public baseline.",
        verdict: "The Robot Dividend satisfies Occam's Razor: it aligns with thermodynamics and the self-interest of both capital owners and citizens."
      }
    ];
  }
  init() {
    this.container.innerHTML = "";
    this.setupStyles();
    this.renderLayout();
  }

  setupStyles() {
      applyCss(`
        .paradigms-comp-wrap {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin: 28px 0;
          font-family: var(--reader-font-sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
        }

        .paradigms-banner {
          background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #064e3b 100%);
          border: 2px solid #3b82f6;
          border-radius: 14px;
          padding: 26px 24px;
          color: #f8fafc;
          box-shadow: 0 16px 36px rgba(0, 0, 0, 0.3);
        }

        .paradigms-banner-kicker {
          font-size: 0.76rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #60a5fa;
          margin-bottom: 6px;
        }

        .paradigms-banner-title {
          font-size: 1.85rem;
          font-weight: 900;
          letter-spacing: -0.025em;
          margin: 0 0 10px 0;
          color: #ffffff;
        }

        .paradigms-banner-desc {
          font-size: 1rem;
          line-height: 1.55;
          color: #cbd5e1;
          margin: 0;
          max-width: 680px;
        }

        /* 3 Profile Cards Row */
        .paradigms-profile-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        @media (max-width: 768px) {
          .paradigms-profile-grid {
            grid-template-columns: 1fr;
          }
        }

        .paradigm-profile-card {
          background: var(--reader-card-bg, #f3efe7);
          border: 1px solid var(--reader-border, #e6dfd5);
          border-radius: 10px;
          padding: 16px 18px;
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          overflow: hidden;
        }

        body.theme-dark .paradigm-profile-card {
          background: var(--reader-card-bg, #161e2b);
          border-color: var(--reader-border, #232d3f);
        }

        .paradigm-profile-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3.5px;
        }

        .paradigm-profile-card.shapiro::before { background: #a855f7; }
        .paradigm-profile-card.emad::before { background: #f59e0b; }
        .paradigm-profile-card.brown::before { background: #10b981; }

        .paradigm-card-hdr {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 6px;
        }

        .paradigm-author-name {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--reader-text);
        }

        .paradigm-theory-title {
          font-size: 0.82rem;
          color: var(--reader-muted);
          font-weight: 600;
        }

        .paradigm-badge-pill {
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 3px 8px;
          border-radius: 12px;
        }

        .badge-shapiro { background: rgba(168, 85, 247, 0.12); color: #9333ea; border: 1px solid rgba(168, 85, 247, 0.35); }
        .badge-emad { background: rgba(245, 158, 11, 0.12); color: #d97706; border: 1px solid rgba(245, 158, 11, 0.35); }
        .badge-brown { background: rgba(16, 185, 129, 0.12); color: #059669; border: 1px solid rgba(16, 185, 129, 0.35); }

        body.theme-dark .badge-shapiro { color: #c084fc; background: rgba(168, 85, 247, 0.2); }
        body.theme-dark .badge-emad { color: #fbbf24; background: rgba(245, 158, 11, 0.2); }
        body.theme-dark .badge-brown { color: #34d399; background: rgba(16, 185, 129, 0.2); }

        .paradigm-summary-text {
          font-size: 0.92rem;
          line-height: 1.5;
          color: var(--reader-text-subtle);
          margin: 0;
        }

        /* Interactive Dimension Tabs & Display */
        .paradigms-matrix-box {
          background: var(--reader-card-bg, #f3efe7);
          border: 1px solid var(--reader-border, #e6dfd5);
          border-radius: 12px;
          padding: 22px;
          display: flex;
          flex-direction: column;
          gap: 18px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
        }

        body.theme-dark .paradigms-matrix-box {
          background: var(--reader-card-bg, #161e2b);
          border-color: var(--reader-border, #232d3f);
          box-shadow: 0 4px 20px rgba(0,0,0,0.25);
        }

        .paradigms-tabs-bar {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--reader-border, #e6dfd5);
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }

        .paradigms-tabs-bar::-webkit-scrollbar {
          display: none;
        }

        .dimension-tab-btn {
          background: var(--reader-surface, #ffffff);
          border: 1px solid var(--reader-border, #e6dfd5);
          color: var(--reader-muted, #64748b);
          padding: 8px 14px;
          font-size: 0.82rem;
          font-weight: 700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .dimension-tab-btn:hover {
          color: var(--reader-text);
          border-color: var(--reader-accent);
        }

        .dimension-tab-btn.active {
          background: var(--reader-accent, #2563eb);
          color: #ffffff;
          border-color: var(--reader-accent, #2563eb);
          box-shadow: 0 2px 8px rgba(37, 99, 235, 0.35);
        }

        .dimension-content-view {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .dimension-active-title {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--reader-text);
          margin: 0;
        }

        .dimension-comparison-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        @media (max-width: 768px) {
          .dimension-comparison-grid {
            grid-template-columns: 1fr;
          }
        }

        .dim-card {
          background: var(--reader-surface, #ffffff);
          border: 1px solid var(--reader-border, #e6dfd5);
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        body.theme-dark .dim-card {
          background: var(--reader-surface, #1e293b);
          border-color: var(--reader-border, #334155);
        }

        .dim-card.shapiro { border-left: 4px solid #a855f7; }
        .dim-card.emad { border-left: 4px solid #f59e0b; }
        .dim-card.brown { border-left: 4px solid #10b981; }

        .dim-card-author {
          font-size: 0.8rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .dim-card.shapiro .dim-card-author { color: #9333ea; }
        .dim-card.emad .dim-card-author { color: #d97706; }
        .dim-card.brown .dim-card-author { color: #059669; }

        body.theme-dark .dim-card.shapiro .dim-card-author { color: #c084fc; }
        body.theme-dark .dim-card.emad .dim-card-author { color: #fbbf24; }
        body.theme-dark .dim-card.brown .dim-card-author { color: #34d399; }

        .dim-card-body {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--reader-text);
          margin: 0;
        }

        /* Analytical Verdict Box */
        .dim-verdict-box {
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.4);
          border-radius: 8px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .dim-verdict-icon {
          font-size: 1.4rem;
          flex-shrink: 0;
        }

        .dim-verdict-text {
          font-size: 0.94rem;
          color: #065f46;
          margin: 0;
          line-height: 1.5;
          font-weight: 600;
        }

        body.theme-dark .dim-verdict-text {
          color: #a7f3d0;
        }
      `, 'paradigms-component-styles');
    }
  renderLayout() {
    this.container.innerHTML = "";
    const wrap = makeElement("div", { className: "paradigms-comp-wrap" });

    // 1. Hero Header Banner
    const banner = makeElement("div", { className: "paradigms-banner" }, [
      makeElement("div", { className: "paradigms-banner-kicker" }, "Analytical Case Comparison"),
      makeElement("h2", { className: "paradigms-banner-title" }, "The Three Post-Labor Blueprints"),
      makeElement("p", { className: "paradigms-banner-desc" }, 
        "Comparing the three leading post-scarcity economic proposals across physics, taxation, human agency, and systemic risk."
      )
    ]);
    wrap.appendChild(banner);

    // 2. Profile Grid (Shapiro, Mostaque, Brown)
    const profileGrid = makeElement("div", { className: "paradigms-profile-grid" });
    this.models.forEach((m) => {
      const card = makeElement("div", { className: `paradigm-profile-card ${m.name.toLowerCase().split(' ')[1] || 'brown'}` }, [
        makeElement("div", { className: "paradigm-card-hdr" }, [
          makeElement("div", {}, [
            makeElement("div", { className: "paradigm-author-name" }, m.name),
            makeElement("div", { className: "paradigm-theory-title" }, m.title)
          ]),
          makeElement("span", { className: `paradigm-badge-pill ${m.badgeClass}` }, m.badge)
        ]),
        makeElement("p", { className: "paradigm-summary-text" }, m.summary)
      ]);
      profileGrid.appendChild(card);
    });
    wrap.appendChild(profileGrid);

    // 3. Interactive Dimension Tabs
    const matrixBox = makeElement("div", { className: "paradigms-matrix-box" });
    const tabsBar = makeElement("div", { className: "paradigms-tabs-bar" });

    this.tabButtons = this.dimensions.map((dim, idx) => {
      return makeElement("button", {
        className: `dimension-tab-btn ${idx === this.activeDimension ? "active" : ""}`,
        onclick: () => {
          this.activeDimension = idx;
          this.tabButtons.forEach((b, i) => b.classList.toggle("active", i === idx));
          this.updateDimensionDisplay();
        }
      }, dim.title.split("(")[0].trim());
    });
    this.tabButtons.forEach(b => tabsBar.appendChild(b));
    matrixBox.appendChild(tabsBar);

    this.displayArea = makeElement("div", { className: "dimension-content-view" });
    matrixBox.appendChild(this.displayArea);
    wrap.appendChild(matrixBox);

    this.container.appendChild(wrap);
    this.updateDimensionDisplay();
  }

  updateDimensionDisplay() {
    if (!this.displayArea) return;
    this.displayArea.innerHTML = "";
    const dim = this.dimensions[this.activeDimension];

    // Title
    this.displayArea.appendChild(makeElement("h3", { className: "dimension-active-title" }, dim.title));

    // 3 Cards
    const grid = makeElement("div", { className: "dimension-comparison-grid" }, [
      makeElement("div", { className: "dim-card shapiro" }, [
        makeElement("div", { className: "dim-card-author" }, "David Shapiro (PLE)"),
        makeElement("p", { className: "dim-card-body" }, dim.shapiro)
      ]),
      makeElement("div", { className: "dim-card emad" }, [
        makeElement("div", { className: "dim-card-author" }, "Emad Mostaque (UBAI)"),
        makeElement("p", { className: "dim-card-body" }, dim.emad)
      ]),
      makeElement("div", { className: "dim-card brown" }, [
        makeElement("div", { className: "dim-card-author" }, "Rob Brown (Robot Dividend)"),
        makeElement("p", { className: "dim-card-body" }, dim.brown)
      ])
    ]);
    this.displayArea.appendChild(grid);

    // Analytical Verdict
    const verdict = makeElement("div", { className: "dim-verdict-box" }, [
      makeElement("div", { className: "dim-verdict-icon" }, "⚖️"),
      makeElement("p", { className: "dim-verdict-text" }, `First-Principles Assessment: ${dim.verdict}`)
    ]);
    this.displayArea.appendChild(verdict);
  }
}

globalThis.ParadigmsComparisonComponent = ParadigmsComparisonComponent;
if (typeof module !== "undefined" && module.exports) module.exports = ParadigmsComparisonComponent;