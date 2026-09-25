class DoomerDebateComponent {
  static render(containerElement) {
    const instance = new DoomerDebateComponent(containerElement);
    instance.init();
    return instance;
  }

  constructor(container) {
    this.container = container;
    this.activeStep = 0;

    this.steps = [
      {
        id: "step1",
        label: "Step 1: Scarcity Reflex",
        dread: "“If machines take all the jobs, nobody earns money to buy food. We'll starve.”",
        reality: "The food didn't vanish—it multiplied. The combines already reaped the wheat. The bread is physically on the shelf. The panic is about an obsolete rationing token, not a physical shortage.",
        ledgerFix: "Update the ledger: issue an unconditional machine dividend so purchasing power matches physical harvest."
      },
      {
        id: "step2",
        label: "Step 2: 50-Year Stagnation",
        dread: "“Look at the last 50 years! Wages stagnated while the top 10% took all the growth.”",
        reality: "For 50 years, 95% of voters were employed wage-earners voting to protect individual paychecks. When machines displace 60%+ of labor while silos overflow, the median voter flips from a nervous employee into an unemployed majority demanding the dividend.",
        ledgerFix: "Democratic arithmetic: when the overwhelming majority shares an identical existential need, no politician can survive defending locked granary doors."
      },
      {
        id: "step3",
        label: "Step 3: Frictionless Tyranny",
        dread: "“The billionaires and politicians will just end democracy to stop us from taxing them.”",
        reality: "Oligarchs don't enforce laws. Police, soldiers, and drone technicians do. Those workers have families facing the exact same displacement. Armed working-class soldiers will not machine-gun their own starving mothers to protect server racks.",
        ledgerFix: "Enforcement friction: tyranny breaks down when the enforcers' own families are the victims of artificial starvation."
      },
      {
        id: "step4",
        label: "Step 4: The Prisoner's Dilemma",
        dread: "“Companies will just lay off all their workers and hoard all the profits for themselves.”",
        reality: "Companies *will* lay off workers—keeping humans for obsolete labor is commercial suicide. But if every company automates, aggregate consumer demand drops to zero. That is a classic Prisoner's Dilemma: no single company can fix it alone. It requires government collective action. Even billionaires will want this, because without solvent consumers, their own businesses and stock values crash to zero.",
        ledgerFix: "Macro Coordination: The Robot Dividend solves the Prisoner's Dilemma for capital, ensuring continuous customer purchasing power without forcing individual firms into private charity."
      },
      {
        id: "step5",
        label: "Step 5: The Status Paradox",
        dread: "“If AI and robots can do everything—even the medicine and engineering—billionaires will just exterminate humanity.”",
        reality: "AI can do the engineering, the medicine, and the music. But wealth is an intersubjective human status game. You cannot flex a trillion dollars on a toaster or an android. Ruling over an empty wasteland with robot servants is solitary confinement. Billionaires don't need humans as laborers; they need humans as consumers, peers, and the living audience that makes status and prestige real.",
        ledgerFix: "The Rational Equilibrium: Billionaires get to remain wealthy, admired, and secure at the top of a flourishing civilization; citizens get complete economic freedom and dignity. Both win."
      }
    ];

    this.thread = [
      {
        speaker: "The Veteran Scientist",
        role: "Technical Pioneer • 35+ yrs in science",
        badgeClass: "badge-scientist",
        text: "AI will destroy humanity by taking away our jobs without doing anything about our need to eat. Knowledge workers displaced by AI have nowhere to go. With all jobs automated, governments have two choices: seize the assets of the billionaire creators of AI, or preserve the wealth of the rich while the masses starve and die of exposure. Given what you’ve seen over the last 50 years, which way do you expect that to go?",
        tagTitle: "THE SCARCITY REFLEX",
        tagDesc: "Assumes that because human sweat was required for 10,000 years, the disappearance of sweat must mean the disappearance of sustenance."
      },
      {
        speaker: "The Realist",
        role: "Systems & Game Theory",
        badgeClass: "badge-realist",
        text: "An appropriately designed progressive tax curve solves this directly. And I wouldn’t base predictions on the last 50 years—during that time, the median voter was employed. When the median voter has no job because a machine is doing it, what policies win in a democracy? Do you really believe voters will quietly choose to starve in the cold while billionaires live in bunkers?",
        tagTitle: "THE MEDIAN VOTER FLIPS",
        tagDesc: "An employed electorate votes to protect individual paychecks; an automated electorate votes to distribute the machine harvest."
      },
      {
        speaker: "The Fatalist",
        role: "Online Political Commenter",
        badgeClass: "badge-fatalist",
        text: "The median worker hasn’t had a wage increase in 50 years. All economic growth went to the top ten percent. That’s why politicians are trying to end democracy right now.",
        tagTitle: "THE TYRANNY FICTION",
        tagDesc: "Assumes oligarchs can install tyranny like an app, ignoring that the soldiers and police tasked with enforcement have starving families too."
      },
      {
        speaker: "The Realist",
        role: "Systems & Game Theory",
        badgeClass: "badge-realist",
        text: "Companies will lay people off—they have to, because paying humans for obsolete labor is commercial suicide. But when every company automates, aggregate consumer demand drops to zero. That's a classic Prisoner's Dilemma that only collective government action can solve. Why would billionaires lobby against the very dividend that keeps their customer base solvent?",
        tagTitle: "THE PRISONER'S DILEMMA",
        tagDesc: "Individual firms must automate to compete, but capital collectively needs a solvent public. The dividend is the coordination mechanism capital needs to survive."
      },
      {
        speaker: "The Fatalist",
        role: "Online Political Commenter",
        badgeClass: "badge-fatalist",
        text: "It’s pretty clear the billionaires are planning to exterminate the human race at this point. Their goal is to eliminate democracy, prevent wealth redistribution, and implement mass starvation.",
        tagTitle: "THE STATUS PARADOX",
        tagDesc: "When every rational economic and game-theoretic door closes, the mind retreats into comic-book villainy because apocalypse is easier to imagine than updating a tax ledger."
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
      .doomer-component-wrap {
        display: flex;
        flex-direction: column;
        gap: 28px;
        margin: 20px 0 40px 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      /* Hero Thought Trap Banner */
      .doomer-hero-banner {
        background: linear-gradient(135deg, #1e1b4b 0%, #0f172a 60%, #1e293b 100%);
        border: 2px solid #6366f1;
        border-radius: 14px;
        padding: 32px 28px;
        box-shadow: 0 16px 40px rgba(99, 102, 241, 0.2);
        color: #f8fafc;
        position: relative;
        overflow: hidden;
      }

      .doomer-hero-banner::after {
        content: "⚠️";
        position: absolute;
        right: 18px;
        bottom: -10px;
        font-size: 110px;
        opacity: 0.08;
        pointer-events: none;
      }

      .doomer-hero-kicker {
        font-size: 0.74rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.14em;
        color: #a5b4fc;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .doomer-hero-title {
        font-size: 2.1rem;
        font-weight: 900;
        line-height: 1.2;
        letter-spacing: -0.03em;
        margin: 0 0 14px 0;
        color: #ffffff;
      }

      .doomer-hero-sub {
        font-size: 1.05rem;
        line-height: 1.55;
        color: #cbd5e1;
        margin: 0;
        max-width: 620px;
      }

      /* Discussion Thread UI */
      .doomer-thread-shell {
        background: var(--reader-card-bg, #161e2b);
        border: 1px solid var(--reader-border, #334155);
        border-radius: 12px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        gap: 18px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
      }

      .doomer-thread-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid var(--reader-border, #334155);
        padding-bottom: 12px;
      }

      .doomer-thread-title {
        font-size: 0.8rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--reader-accent, #38bdf8);
      }

      .doomer-thread-badge {
        font-size: 0.7rem;
        background: rgba(255,255,255,0.06);
        padding: 3px 8px;
        border-radius: 12px;
        color: var(--reader-muted, #94a3b8);
      }

      .doomer-chat-card {
        display: flex;
        flex-direction: column;
        background: var(--reader-surface, #1e293b);
        border: 1px solid var(--reader-border, #334155);
        border-radius: 10px;
        padding: 16px 18px;
        gap: 10px;
        position: relative;
        transition: transform 0.15s ease;
      }

      .doomer-chat-card:hover {
        transform: translateY(-1px);
      }

      .doomer-chat-card.speaker-scientist {
        border-left: 5px solid #f59e0b;
      }

      .doomer-chat-card.speaker-realist {
        border-left: 5px solid #38bdf8;
      }

      .doomer-chat-card.speaker-fatalist {
        border-left: 5px solid #f43f5e;
      }

      .doomer-chat-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 6px;
      }

      .doomer-speaker-info {
        display: flex;
        align-items: center;
        gap: 8px;
      }

      .doomer-speaker-name {
        font-size: 0.88rem;
        font-weight: 700;
        color: var(--reader-text, #f8fafc);
      }

      .doomer-speaker-role {
        font-size: 0.72rem;
        color: var(--reader-muted, #94a3b8);
      }

      .doomer-chat-text {
        font-size: 0.96rem;
        line-height: 1.6;
        color: var(--reader-text, #e2e8f0);
        margin: 0;
      }

      /* Reality Check Tag Box */
      .doomer-reality-tag {
        background: rgba(0, 0, 0, 0.25);
        border: 1px dashed var(--reader-border, #475569);
        border-radius: 6px;
        padding: 8px 12px;
        display: flex;
        flex-direction: column;
        gap: 2px;
        margin-top: 4px;
      }

      .doomer-tag-hdr {
        font-size: 0.68rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .speaker-scientist .doomer-tag-hdr { color: #f59e0b; }
      .speaker-realist .doomer-tag-hdr { color: #38bdf8; }
      .speaker-fatalist .doomer-tag-hdr { color: #f43f5e; }

      .doomer-tag-desc {
        font-size: 0.82rem;
        color: var(--reader-text-subtle, #cbd5e1);
        margin: 0;
        line-height: 1.4;
      }

      /* Interactive Escalation Ladder */
      .doomer-ladder-shell {
        background: var(--reader-card-bg, #161e2b);
        border: 1px solid var(--reader-border, #334155);
        border-radius: 12px;
        padding: 22px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }

      .doomer-ladder-tabs {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 6px;
      }

      @media (max-width: 640px) {
        .doomer-ladder-tabs {
          grid-template-columns: 1fr;
        }
        .doomer-hero-title {
          font-size: 1.6rem;
        }
      }

      .doomer-tab-btn {
        background: var(--reader-surface, #1e293b);
        border: 1px solid var(--reader-border, #334155);
        color: var(--reader-muted, #94a3b8);
        padding: 10px 8px;
        font-size: 0.74rem;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
        text-align: center;
        transition: all 0.16s ease;
      }

      .doomer-tab-btn:hover {
        color: var(--reader-text, #ffffff);
        border-color: var(--reader-accent, #38bdf8);
      }

      .doomer-tab-btn.active {
        background: #3b82f6;
        color: #ffffff;
        border-color: #60a5fa;
        box-shadow: 0 2px 10px rgba(59, 130, 246, 0.4);
      }

      .doomer-ladder-display {
        background: var(--reader-surface, #1e293b);
        border: 1px solid var(--reader-border, #334155);
        border-radius: 10px;
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 14px;
      }

      .doomer-display-row {
        display: flex;
        flex-direction: column;
        gap: 4px;
      }

      .doomer-display-lbl {
        font-size: 0.74rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.08em;
      }

      .doomer-display-lbl.dread { color: #f43f5e; }
      .doomer-display-lbl.reality { color: #38bdf8; }
      .doomer-display-lbl.fix { color: #10b981; }

      .doomer-display-val {
        font-size: 0.95rem;
        line-height: 1.6;
        color: var(--reader-text, #e2e8f0);
        margin: 0;
      }
    `, 'doomer-component-styles');
  }

  renderLayout() {
    this.container.innerHTML = "";
    const wrap = makeElement("div", { className: "doomer-component-wrap" });

    // 1. Hero Thought-Trap Banner
    const heroBanner = makeElement("div", { className: "doomer-hero-banner" }, [
      makeElement("div", { className: "doomer-hero-kicker" }, [
        makeElement("span", {}, "⚡"),
        makeElement("span", {}, "The Universal Anxiety of Automation")
      ]),
      makeElement("h1", { className: "doomer-hero-title" }, "“Wait... if nobody has a job, how will anyone buy food?”"),
      makeElement("p", { className: "doomer-hero-sub" }, 
        "How a reasonable question about technology escalates into a fantasy of global extermination in five short steps—and the game theory that proves it wrong."
      )
    ]);
    wrap.appendChild(heroBanner);

    // 2. Styled Case Study Thread
    const threadShell = makeElement("div", { className: "doomer-thread-shell" }, [
      makeElement("div", { className: "doomer-thread-header" }, [
        makeElement("span", { className: "doomer-thread-title" }, "💬 An Actual Discussion in the Wild (Names Obscured)"),
        makeElement("span", { className: "doomer-thread-badge" }, "5-Step Escalation")
      ])
    ]);

    this.thread.forEach((msg) => {
      const card = makeElement("div", { className: `doomer-chat-card speaker-${msg.badgeClass.replace('badge-', '')}` }, [
        makeElement("div", { className: "doomer-chat-meta" }, [
          makeElement("div", { className: "doomer-speaker-info" }, [
            makeElement("span", { className: "doomer-speaker-name" }, msg.speaker),
            makeElement("span", { className: "doomer-speaker-role" }, `• ${msg.role}`)
          ])
        ]),
        makeElement("p", { className: "doomer-chat-text" }, msg.text),
        makeElement("div", { className: "doomer-reality-tag" }, [
          makeElement("span", { className: "doomer-tag-hdr" }, `🔍 Reality Check: ${msg.tagTitle}`),
          makeElement("p", { className: "doomer-tag-desc" }, msg.tagDesc)
        ])
      ]);
      threadShell.appendChild(card);
    });
    wrap.appendChild(threadShell);

    // 3. Interactive Escalation Ladder
    const ladderShell = makeElement("div", { className: "doomer-ladder-shell" }, [
      makeElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } }, [
        makeElement("span", { className: "doomer-thread-title" }, "🪜 Interactive Escalation Ladder: Click Each Step"),
        makeElement("span", { className: "doomer-thread-badge" }, "Psychology vs. Game Theory")
      ])
    ]);

    const tabsRow = makeElement("div", { className: "doomer-ladder-tabs" });
    this.tabButtons = this.steps.map((st, idx) => {
      return makeElement("button", {
        className: `doomer-tab-btn ${idx === this.activeStep ? "active" : ""}`,
        onclick: () => {
          this.activeStep = idx;
          this.tabButtons.forEach((b, i) => b.classList.toggle("active", i === idx));
          this.updateLadderDisplay();
        }
      }, st.label);
    });
    this.tabButtons.forEach(btn => tabsRow.appendChild(btn));
    ladderShell.appendChild(tabsRow);

    this.ladderDisplay = makeElement("div", { className: "doomer-ladder-display" });
    ladderShell.appendChild(this.ladderDisplay);
    wrap.appendChild(ladderShell);

    this.container.appendChild(wrap);
    this.updateLadderDisplay();
  }

  updateLadderDisplay() {
    if (!this.ladderDisplay) return;
    const cur = this.steps[this.activeStep];
    this.ladderDisplay.innerHTML = "";

    const rows = [
      ["dread", "🧠 What Your Brain Instinctively Screams:", cur.dread],
      ["reality", "⚖️ The Physical & Game-Theoretic Reality:", cur.reality],
      ["fix", "🛠️ The Practical Ledger Fix:", cur.ledgerFix]
    ];

    rows.forEach(([cls, title, val]) => {
      this.ladderDisplay.appendChild(makeElement("div", { className: "doomer-display-row" }, [
        makeElement("span", { className: `doomer-display-lbl ${cls}` }, title),
        makeElement("p", { className: "doomer-display-val" }, val)
      ]));
    });
  }
}

globalThis.DoomerDebateComponent = DoomerDebateComponent;
if (typeof module !== "undefined" && module.exports) module.exports = DoomerDebateComponent;