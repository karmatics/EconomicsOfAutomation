class RulesContent {

  static getMeta() {
    return {
      kicker: "Epistemological Framework",
      title: "9. Methodological Ground Rules",
      subtitle: "The four analytical constraints required to evaluate post-labor macroeconomic models without falling into performative cynicism or accounting fallacies."
    };
  }
  static manifest() {
    return [
      {
        section: "quora_rules",
        partLabel: "Discussion Standards",
        title: "Guidelines for Fair Discussion",
        blocks: [
          {
            id: "sidebar_5sec_summary",
            type: "sidebar",
            kicker: "Summary",
            title: "Don't Dodge The Mirror Test or The Equilibrium"
          },
          { id: "p_quora_intro", type: "p" },
          { id: "rule_mirror", type: "sidebar", kicker: "Rule 1", title: "What Would You Do in Their Position?" },
          { id: "rule_gametheory", type: "sidebar", kicker: "Rule 2", title: "Paying Taxes vs. Supporting the Rules" },
          { id: "rule_sandbox", type: "sidebar", kicker: "Rule 3", title: "Don't Break the Thought Experiment" },
          { id: "rule_civility", type: "sidebar", kicker: "Rule 4", title: "Critique the Mechanics, Not the Person" },
          { id: "p_quora_closing", type: "p" }
        ]
      }
    ];
  }

  static p_quora_intro() {
    return [
      "When evaluating post-labor macroeconomic transitions, public and academic discussions frequently derail into unexamined cynicism or cognitive dissonance. Conditioned by thousands of years of biological scarcity, human intuition reflexively treats work as the moral price of admission to survival, assuming that an automated economy without mandatory toil must inevitably collapse into tyranny or starvation.\n\nTo separate rigorous institutional engineering from cinematic tropes, economic proposals must be stress-tested against formal game theory and physical thermodynamics. The four methodological standards below establish the analytical guardrails necessary to evaluate this treatise on first principles."
    ];
  }

  static rule_mirror() {
    return [
      "The most frequent objection to post-labor models is the assumption of comic-book malice: the claim that capital owners will hoard all automated machinery, cut off the population, and willingly preside over a starving, bankrupt wasteland.\n\nIn formal economics, this is evaluated under **The Behavioral Consistency Axiom (The Mirror Test)**:\n\n*If you were in the position of capital ownership, with automated machines producing record abundance, would you rationally lobby for an economic order where your domestic customer base is destitute, your corporate revenues crash to zero, and your assets become worthless scrap metal—or would you support a statutory flow tax that maintains solvent customers, legal property rights, and high social prestige in a thriving civilization?*\n\nIf you would not choose solitary confinement in a bunker surrounded by a collapsing society, you cannot lazily project that irrational payoff onto other economic actors. Game theory assumes players are self-interested, not that they are cartoon monsters who choose mutual ruin."
    ];
  }
  static rule_gametheory() {
    return [
      "Speculation about what corporations, the wealthy, or politicians will do is evaluated under Game Theory—the study of rational actors responding to systemic feedback loops, not moral platitudes.\n\nHere it is critical to distinguish between individual tax compliance, micro-lobbying, and macro-systemic stability:\n\n1. **Why people and businesses pay taxes:** Nobody pays taxes out of generosity. They pay because the law mandates it, backed by audits, asset freezes, and legal penalties. Coercion solves the immediate compliance game.\n\n2. **Micro-evasion vs. Macro-rules:** Cynics often reflexively shout 'you're so naive—elites will just lobby away all taxes!' That confuses the tactical game with the structural game. Yes, individual firms lobby at the margin for deductions. But rational capital owners do not lobby to destroy the entire legal and customer infrastructure that gives their assets value. A business owner might seek a property tax deduction, but they do not lobby to abolish the court system that enforces their land deeds or the roads that deliver their goods.\n\n3. **The Law of Realization:** An automated factory has zero economic value if domestic consumers have no money to buy its output. Capitalists cannot consume all their own factory output. Capital owners comply with the tax because the law requires it—and they support the policy framework because solvent customers are the non-negotiable condition for capital survival."
    ];
  }

  static rule_sandbox() {
    return [
      "Simplified economic thought experiments (such as twelve settlers on an isolated frontier, or a colony where currency is backed by milled timber) exist for an analytical purpose: they isolate how physical goods, claim checks, and machines interact without the noise of modern fiat banking.\n\nIn macroeconomics, the Earth is a **Closed-Economy General Equilibrium System**. There is no foreign planet to export surplus to, and there are no off-world central banks to absorb balance of payments deficits. In a closed general equilibrium model, aggregate domestic production must be realized by aggregate domestic purchasing power.\n\nCritiques that attempt to dismiss domestic realization by smuggling in external exogenous sinks (such as mercantilist export plunders) fail standard macroeconomic accounting identities. If an economic model claims that capital can survive without domestic consumers, it must prove where final goods clear inside the closed planetary boundary."
    ];
  }

  static rule_civility() {
    return [
      "A rigorous critique must be mechanically falsifiable. Saying 'human nature won't allow this' or 'elites will never agree' is not an economic analysis; it is performative fatalism.\n\nIf you claim that the Robot Dividend cannot work, you must answer **The Equilibrium Test**:\n\n*What is your concrete, mathematically balanceable alternative for what actually happens to corporate balance sheets when 50% or 70% of human wage income evaporates?*\n\nIf you predict that factories will simply shut down for lack of customers while owners retreat into bunkers, you are asserting an economically self-terminating state, not a Nash equilibrium. A proposal does not need to promise utopia to be realistic; it simply needs to be the stable attractor state where every rational actor does strictly better by cooperating than by triggering systemic insolvency."
    ];
  }

  static p_quora_closing() {
    return [
      "By holding the debate to these four methodological axioms, the conversation shifts from ideological dogma to balance-sheet physics. Once the feedback loops are clear, the Robot Dividend is recognized not as an act of political charity, but as the only subgame-perfect operating system for an automated world."
    ];
  }
  static sidebar_5sec_summary() {
    return [
      "The Four Axiomatic Constraints of First-Principles Economics:\n\n1. **The Behavioral Consistency Axiom:** Game-theoretic actors must be modeled as rational utility-maximizers. Dystopian scenarios requiring actors to choose cartoon genocide over compounding wealth fail the consistency test.\n2. **Structural Rules vs. Tactical Evasion:** Differentiate between micro-level tax avoidance and macro-level constitutional support for consumer purchasing power.\n3. **Closed-Economy General Equilibrium:** Planetary macroeconomics is a closed system. Models cannot externalize realization crises to an imaginary outside sink.\n4. **Mechanical Falsifiability:** Critics asserting that a universal dividend will fail must specify an alternative, mathematically balanceable equilibrium that does not violate physical accounting identities."
    ];
  }
}

globalThis.RulesContent = RulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = RulesContent;