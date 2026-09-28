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
        speaker: "The Scientist",
        role: "35+ yrs as working scientist • 2 patents",
        badgeClass: "badge-scientist",
        text: "AI can destroy humanity by doing what it is explicitly designed to do, performing intellectual labor otherwise performed by humans. In simpler words, by taking away our jobs, without doing anything about our need to eat. Knowledge workers displaced by AI have essentially nowhere to go. With all jobs done by AI, human governments have two choices: seize the assets of the billionaire creators of AI and order robots to serve us, or preserve the wealth of the rich while the masses of humanity starve and die of exposure and the human population collapses. Given what you’ve seen the last 50 years, which way do you expect that to go?",
        tagTitle: "THE SCARCITY REFLEX",
        tagDesc: "Assumes that because human sweat was required for 10,000 years, the disappearance of sweat must mean the disappearance of sustenance."
      },
      {
        speaker: "Rob Brown",
        role: "The Realist • First-Principles Economics",
        badgeClass: "badge-realist",
        text: "An appropriately shaped progressive tax curve could a) solve this elegantly and directly, and b) be referred to as “seizing assets” if you want to make it sound scary. I wouldn’t base a lot on the last 50 years because the median voter was employed and living fairly well in the US during that time period. When the median voter is unemployed, what kind of policies do you think will win out in a democracy? Starving homeless masses while the billionaires live in well protected bunkers? I’m not buying that.",
        tagTitle: "THE MEDIAN VOTER FLIPS",
        tagDesc: "An employed electorate votes to protect individual paychecks; an automated electorate votes to distribute the machine harvest."
      },
      {
        speaker: "The Fatalist",
        role: "Online Commenter",
        badgeClass: "badge-fatalist",
        text: "The median voter has not had a wage increase in 50 years in the US. All economic growth has gone to the top ten percent. That’s why Trump and the Republicans are trying to end democracy now.",
        tagTitle: "THE TYRANNY FICTION",
        tagDesc: "Assumes oligarchs can install tyranny like an app, ignoring that the soldiers and police tasked with enforcement have starving families too."
      },
      {
        speaker: "Rob Brown",
        role: "The Realist • First-Principles Economics",
        badgeClass: "badge-realist",
        text: "Companies will lay people off—they have to, because paying humans for obsolete labor is commercial suicide. But when every company automates, aggregate consumer demand drops to zero. That's a classic Prisoner's Dilemma that only collective government action can solve. If they are a billionaire that owns companies, and their companies lay off all employees and replace them with robots… why are they better off now that all their potential consumers are homeless and starving?",
        tagTitle: "THE PRISONER'S DILEMMA",
        tagDesc: "Individual firms must automate to compete, but capital collectively needs a solvent public. The dividend is the coordination mechanism capital needs to survive."
      },
      {
        speaker: "The Fatalist",
        role: "Online Commenter",
        badgeClass: "badge-fatalist",
        text: "It’s pretty clear the billionaires are planning to exterminate the human race at this point. Their support of Trump and his program to eliminate democracy, is prevent any wealth redistribution, and to implement mass starvation.",
        tagTitle: "THE STATUS PARADOX",
        tagDesc: "When every rational economic and game-theoretic door closes, the mind retreats into comic-book villainy because apocalypse is easier to imagine than updating a tax ledger."
      }
    ];

    this.verbatimTranscript = [
      {
        speaker: "[The Scientist]",
        time: "19h ago",
        text: "How would it do that? Some say there might be no way for us to stop it.\n\nAI can destroy humanity by doing what it is explicitly designed to do, performing intellectual labor otherwise performed by humans. In simpler words, by taking away our jobs, without doing anything about our need to eat. Knowledge workers displaced by AI have essentially nowhere to go. They can become laborers or tradesmen, but AI can be embodied in robots to do those jobs too.\n\nWith all jobs done by AI, human governments have two choices, seize the assets of the billionaire creators of AI and order robots to serve us, or preserve the wealth of the rich while the masses of humanity starve and die of exposure and the human population collapses.\n\nGiven what you’ve seen the last 50 years, which way do you expect that to go?",
        accent: "#f59e0b"
      },
      {
        speaker: "Rob Brown",
        time: "18h ago",
        text: "An appropriately shaped progressive tax curve could a) solve this elegantly and directly, and b) be referred to as “seizing assets” if you want to make it sound scary.\n\nI wouldn’t base a lot on the last 50 years because the median voter was employed and living fairly well in the US during that time period. When the median voter is unemployed, what kind of policies do you think will win out in a democracy? Starving homeless masses while the billionaires live in well protected bunkers? I’m not buying that.",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "18h ago",
        text: "The median voter has not had a wage increase in 50 years in the US. All economic growth has gone to the top ten percent.",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "17h ago",
        text: "Even if we accept that wages stagnated, that actually proves the point about the median voter - for the past 50 years, the median American had a job/paycheck, and voted within a system built entirely around human employment. Because most people were still getting by on wages, there was never a broad political majority demanding a fundamental overhaul of how capital and corporate profits are distributed.\n\nWhen AI and robotics automate human labor at scale, the political math completely flips…. The median voter would no longer be an employee worried about their personal income taxes, they are someone whose job was replaced by a machine while the physical output of goods, food, and housing is higher than ever.\n\nI don’t see how a democratic majority is going to quietly sit on the sidewalk and starve to death in front of overflowing warehouses and granaries just to protect corporations and wealthy people…. (*) In a democracy, when 60% or 70% of the electorate is directly affected, the political pressure to implement progressive capital taxes and universal machine dividends becomes overwhelming.\n\nSorry, but you can't use the voting behavior of an employed, wage-earning electorate over the last 50 years to predict how voters will act when human labor is no longer the primary way wealth is produced...\n\n* most of whose wealth is dependent on having consumers",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "15h ago",
        text: "Of course that’s why Trump and the Republicans are trying to end democracy now.",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "15h ago",
        text: "I’m sorry…. why again?\n\nI am no fan of Trump and Republicans, but I also don’t see how “ending democracy” is a rational move for any of them in a scenario where AI takes all jobs.\n\nMost Republicans rely on a paycheck of their own or in their household. When they lose their job to AI and robots…. how does this dystopian outcome benefit them?\n\nIf they are a billionaire that owns companies, and their companies can lay off all their employees and replace them with robots…. why are they better off now that all their potential consumers are homeless and starving?",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "14h ago",
        text: "Nobody said they are smart. But the tremendous value of the AI companies is based on the assumption that a huge number of human workers can be replaced and somehow there will still be demand for the AI to do work. That’s the insane US stock market right now. Clearly something needs to give.",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "11h ago",
        text: "“But the tremendous value of the AI companies is based on the assumption that a huge number of human workers can be replaced and somehow there will still be demand for the AI to do work.”\n\nWhy wouldn’t there be?",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "2h ago",
        text: "Because without workers getting paid there will be an economic collapse as you suggest.",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "2h ago",
        text: "I think that was [The Scientist] that said there would be an economic collapse. He said that taking away our jobs without doing anything about our need to eat is a problem. But the reason the jobs are gone is because the AI and robots are doing the jobs. Which means the food is still being produced.",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "2h ago",
        text: "But without jobs people will not be able to afford food.",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "2h ago",
        text: "Today if you're without a job you get an EBT card and buy food with that.\n\nI asked this to [The Scientist] and I'll ask it to you: “When the median voter is unemployed, what kind of policies do you think will win out in a democracy? Starving homeless masses while the billionaires live in well protected bunkers?”\n\nAgain we've got the means of production taken care of.... we'd have robots and AI producing everything we need. So why would you expect people to be starving or homeless, rather than enjoying the abundance while not needing to work?",
        accent: "#38bdf8"
      },
      {
        speaker: "[The Fatalist]",
        time: "1h ago",
        text: "It’s pretty clear the billionaires are planning to exterminate the human race at this point. Their support of Trump and his program to eliminate democracy, is prevent any wealth redistribution, and to implement mass starvation ,",
        accent: "#f43f5e"
      },
      {
        speaker: "Rob Brown",
        time: "1h ago",
        text: "Bizarre and extreme assumption.\n\nThe vast majority of Trump voters are not billionaires or even particularly wealthy.\n\nBut anyway, aside from your extreme assumption about the motives of billionaires, why not step back and think about your simpler assumption, that without jobs everyone will starve. I suggest thinking that through more deeply before moving on to wild conspiracy theories about people you assume to have the goal of exterminating humanity.",
        accent: "#38bdf8"
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
        flex-wrap: wrap;
        gap: 10px;
        border-bottom: 1px solid var(--reader-border, #334155);
        padding-bottom: 12px;
      }

      .doomer-thread-title {
        font-size: 0.82rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: var(--reader-accent, #38bdf8);
      }

      .doomer-transcript-btn {
        background: rgba(56, 189, 248, 0.12);
        color: #38bdf8;
        border: 1px solid rgba(56, 189, 248, 0.4);
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.76rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }

      .doomer-transcript-btn:hover {
        background: #38bdf8;
        color: #0f172a;
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(56, 189, 248, 0.3);
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

      /* Modal Styles for Verbatim Transcript */
      .vt-dialog-wrap {
        display: flex;
        flex-direction: column;
        gap: 16px;
        padding: 10px 6px;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }

      .vt-header-banner {
        background: rgba(37, 99, 235, 0.1);
        border: 1px solid rgba(59, 130, 246, 0.3);
        border-radius: 8px;
        padding: 12px 16px;
      }

      .vt-header-kicker {
        font-size: 0.7rem;
        font-weight: 800;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        color: #38bdf8;
      }

      .vt-question-text {
        font-size: 1.15rem;
        font-weight: 800;
        color: #f8fafc;
        margin: 4px 0 0 0;
      }

      .vt-posts-scroll {
        display: flex;
        flex-direction: column;
        gap: 14px;
        max-height: 480px;
        overflow-y: auto;
        padding-right: 6px;
      }

      .vt-post-card {
        background: rgba(255, 255, 255, 0.03);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 8px;
        padding: 14px 16px;
        display: flex;
        flex-direction: column;
        gap: 8px;
      }

      .vt-post-meta {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        padding-bottom: 6px;
      }

      .vt-post-author {
        font-size: 0.86rem;
        font-weight: 700;
      }

      .vt-post-time {
        font-size: 0.72rem;
        color: #94a3b8;
      }

      .vt-post-body {
        font-size: 0.92rem;
        line-height: 1.6;
        color: #e2e8f0;
        margin: 0;
        white-space: pre-wrap;
      }

      .vt-author-footnote {
        background: rgba(255, 255, 255, 0.03);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 10px 14px;
        border-radius: 6px;
        font-size: 0.76rem;
        color: #94a3b8;
        font-style: italic;
        margin-top: 4px;
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
        makeElement("span", { className: "doomer-thread-title" }, "💬 Key Moments from an Online Debate"),
        makeElement("button", {
          className: "doomer-transcript-btn",
          title: "Click to read the complete, unedited conversation",
          onclick: () => this.showFullTranscriptModal()
        }, "📜 View Uncut Quora Transcript")
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

  showFullTranscriptModal() {
    const content = makeElement("div", { className: "vt-dialog-wrap" });

    // Question header
    const qHeader = makeElement("div", { className: "vt-header-banner" }, [
      makeElement("div", { className: "vt-header-kicker" }, "Quora Discussion Thread"),
      makeElement("h2", { className: "vt-question-text" }, "“How exactly could AI potentially destroy the human race?”")
    ]);
    content.appendChild(qHeader);

    // Scrollable posts
    const postsBox = makeElement("div", { className: "vt-posts-scroll" });

    this.verbatimTranscript.forEach((p) => {
      const card = makeElement("div", {
        className: "vt-post-card",
        style: { borderLeft: `4px solid ${p.accent}` }
      }, [
        makeElement("div", { className: "vt-post-meta" }, [
          makeElement("span", { className: "vt-post-author", style: { color: p.accent } }, p.speaker),
          makeElement("span", { className: "vt-post-time" }, p.time)
        ]),
        makeElement("p", { className: "vt-post-body" }, p.text)
      ]);
      postsBox.appendChild(card);
    });
    content.appendChild(postsBox);

    // Simple footnote
    const footnote = makeElement("div", { className: "vt-author-footnote" }, 
      "Note: In the exchange above, Rob Brown is the author of this essay."
    );
    content.appendChild(footnote);

    UITools.makeDialog({
      appendTo: document.body,
      title: "Verbatim Quora Discussion Transcript",
      size: [680, 620],
      position: [Math.max(16, Math.floor(window.innerWidth / 2 - 340)), 45],
      contentElement: content
    });
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