class GameTheoryContent {
  static getMeta() {
    return {
      kicker: "Macroeconomic Primer",
      title: "Game Theory for Post-Labor Economics",
      subtitle: "Why rational self-interest is not naive greed, how the Prisoner's Dilemma applies to automation, and why capital needs a universal dividend."
    };
  }

  static manifest() {
    return [
      {
        section: "intro",
        partLabel: "First Principles",
        title: "What is Game Theory?",
        blocks: [
          { id: "p_gt_intro_1", type: "p" },
          { id: "p_gt_intro_2", type: "p" }
        ]
      },
      {
        section: "rationality",
        partLabel: "The Core Distinction",
        title: "Rational Self-Interest vs. Naive Short-Term Greed",
        blocks: [
          { id: "p_gt_tax_analogy", type: "p" },
          { id: "sidebar_feedback_loop", type: "sidebar", kicker: "Key Insight", title: "The Law of Capital Realization" }
        ]
      },
      {
        section: "automation_dilemma",
        partLabel: "Macro Coordination",
        title: "The Automation Prisoner's Dilemma",
        blocks: [
          { id: "p_gt_prisoners_dilemma", type: "p" },
          { id: "p_gt_nash_equilibrium", type: "p" }
        ]
      },
      {
        section: "the_mirror",
        partLabel: "Discourse Application",
        title: "Applying the Mirror Test to Economic Skepticism",
        blocks: [
          { id: "p_gt_mirror_test", type: "p" },
          { id: "p_gt_conclusion", type: "p" }
        ]
      }
    ];
  }

  static p_gt_intro_1() {
    return [
      "Whenever discussions turn to AI, robotics, and the future of work, online commentary almost always defaults to fatalism: people assume that capital owners will hoard every machine, lobby away all public obligations, and leave the population to fend for itself. When asked why, commenters reply: 'Because humans are selfish.'\n\nThat diagnosis is half-right and completely misapplied. Game Theory is the mathematical study of strategic interaction among rational decision-makers. It assumes individuals act to maximize their own welfare. But Game Theory does *not* assume people are short-sighted fools who fail to understand basic cause and effect."
    ];
  }

  static p_gt_intro_2() {
    return [
      "In game theory, an outcome is called a **Nash Equilibrium** when every participant is making the best possible choice for themselves given the choices of everyone else, such that no individual can improve their standing by unilaterally changing their move. Finding the equilibrium requires looking past cinematic tropes to evaluate the actual payoff matrix facing the players."
    ];
  }

  static p_gt_tax_analogy() {
      return [
        "To understand why rational self-interest does not mean naive resistance to taxes, consider how public finance actually works. People and corporations do not pay taxes out of generosity or goodwill when they file their returns. They pay because the law commands it, enforced by audits, asset seizures, and legal penalties.\n\nWhere *does* enlightened self-interest enter? It enters in the distinction between **individual compliance** and **constitutional metagame support**. No rational business owner *wants* to write a check to the revenue service; at the micro level, every actor tries to minimize their private bill. But at the macro level, capital owners rationally support and uphold a legal framework that taxes machine surplus to keep society functioning and customers solvent.\n\nA rational person with significant wealth supports a tax rate that may seem high because it keeps the economic engine moving. The machines only generate value if consumers have the means to buy what is produced. Capital owners do far better over the long term paying for a functioning consumer baseline than watching sales dry up, paper valuations evaporate, and society fracture into instability."
      ];
    }
  static sidebar_feedback_loop() {
    return [
      "The Law of Realization (Why Capital Needs Consumers): In classical economics, manufacturing a good is only half the commercial equation. The other half is 'realization'—selling the good for money to recover capital and generate profit. An automated factory that manufactures 100,000 vehicles or harvests 500,000 bushels of grain has zero economic value if domestic consumers have no money to buy them. Capitalists cannot consume all their own factory output. The Robot Dividend is the macroeconomic coordination mechanism that guarantees customer purchasing power so capital can realize its gains."
    ];
  }

  static p_gt_prisoners_dilemma() {
    return [
      "Now look at automation through the lens of the **Prisoner's Dilemma**. For an individual business owner, replacing human workers with software and robotics is an unavoidable competitive necessity. If Company A keeps paying human wages while Competitor B automates and cuts prices by 50%, Company A goes bankrupt. Every firm acting independently is forced to automate.\n\nHowever, if *every* company automates and human payrolls vanish, aggregate consumer purchasing power collapses toward zero. When consumers have no money, nobody can buy what the automated factories produce. Corporate revenue evaporates, stock market valuations crash, and expensive automated equipment becomes useless scrap metal. This is the textbook definition of a Prisoner's Dilemma: individual rational choices generate collective insolvency."
    ];
  }

  static p_gt_nash_equilibrium() {
      return [
        "How do players escape a Prisoner's Dilemma? Through **binding coordination rules** that apply equally to all competitors. An individual company cannot voluntarily act as a private charity without being crushed by rivals. The only solution is collective public policy: taxing machine surplus at whatever percentage is required to maintain a functioning economy, and recycling it as an unconditional citizen dividend floor.\n\nSkeptics often cry 'naive' here, objecting: *'Won't elites just lobby for private loopholes and free-ride?'* That confuses tactical micro-evasion with macro-systemic survival. An individual firm may always angle for a tax credit at the margin, but when automation triggers aggregate demand collapse, capital faces a binary choice: accept universal, binding rules that circulate purchasing power, or preside over worthless scrap metal and systemic insolvency. Just as Bismarck conceded state pensions to stabilize imperial Germany, and Henry Ford doubled worker wages to build a mass consumer market, capital owners concede floors because concession is the mathematical price of capital realization."
      ];
    }
  static p_gt_mirror_test() {
    return [
      "This is why the **Mirror Test** is central to game-theoretic discourse. When someone claims that capital owners will hoard all machines and let the population fend for itself, ask them:\n\n*'If you were in their shoes, with automated machines producing record abundance, would YOU support an economic policy that destroys your own customer base and leaves society in ruins?'*\n\nRuling over an impoverished wasteland is not winning. Wealth is an intersubjective human status game—you cannot enjoy prestige or luxury in a collapsing society. When commenters assert that elites will inevitably choose systemic destruction, they aren't describing rational actors; they are projecting cartoon villainy to excuse their own refusal to study tax mechanics or organize for democratic reform."
    ];
  }

  static p_gt_conclusion() {
    return [
      "When evaluating any post-labor policy proposal, remember the core rule: **look at the systemic feedback loops, not the immediate impulses**.\n\nTo see how this framework scales to city-wide simulation and real-world policy on Earth, explore the complete series:\n• [The Robot Dividend: Complete Series](index.html)\n• [Chapter 4: The Anatomy of a Doomer Loop](index.html#doomer)\n• [Discussion Ground Rules](rules.html)"
    ];
  }
}

globalThis.GameTheoryContent = GameTheoryContent;
if (typeof module !== "undefined" && module.exports) module.exports = GameTheoryContent;