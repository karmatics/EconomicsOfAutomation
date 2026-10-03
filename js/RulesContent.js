class RulesContent {
  static getMeta() {
    return {
      kicker: "Standards of Rational Debate & Thread Moderation",
      title: "Ground Rules of Discourse",
      subtitle: "Why bad-faith cynicism, smuggled premises, and condescending posturing are removed from our discussion threads."
    };
  }

  static manifest() {
    return [
      {
        section: "rules_intro",
        partLabel: "Moderation Policy",
        title: "Standard Discussion Standards",
        blocks: [
          { id: "p_rules_intro", type: "p" },
          { id: "rule_sandbox", type: "sidebar", kicker: "Rule 1", title: "Respect the Sandbox (No Smuggling External Forces)" },
          { id: "rule_reciprocity", type: "sidebar", kicker: "Rule 2", title: "The Reciprocity Rule (Answer Direct Questions)" },
          { id: "rule_cynicism", type: "sidebar", kicker: "Rule 3", title: "Performative Cynicism is Not an Economic Argument" },
          { id: "rule_history", type: "sidebar", kicker: "Rule 4", title: "The Historical Accuracy Rule (No Colonial Plunder Analogies)" },
          { id: "rule_tone", type: "sidebar", kicker: "Rule 5", title: "Tone & Demeanor (No Condescending Slang or Insults)" },
          { id: "p_rules_enforcement", type: "p" }
        ]
      }
    ];
  }

  static p_rules_intro() {
    return [
      "To keep conversations focused on the actual macroeconomic math, physical thermodynamics, and democratic institutional design of post-labor economics, all discussion threads are actively moderated. This is not to censor disagreement; thoughtful technical critiques of tax incidence, price stability, or capital investment are welcome and actively engaged. However, comments that derail discussions into comic-book nihilism, performative cynicism, or patronizing jargon will be pruned."
    ];
  }

  static rule_sandbox() {
    return [
      "Thought experiments (such as the frontier colony or the island of castaways) exist to isolate specific mechanical variables—such as production vs. currency claim checks—on a clean canvas. Attacking a thought experiment by smuggling in unrelated external factors (e.g. 'an outside mega-corporation sends armed mercenaries to massacre everyone and build a tourist resort') is an epistemic failure. In a model representing the closed system of Earth, there is no outside corporation or alien planet. If you wish to debate real-world policy, critique the terrestrial legislative architecture in Part 3, not the illustrative testbed."
    ];
  }

  static rule_reciprocity() {
    return [
      "Discourse is an honest two-way exchange, not a soapbox. If the author or another participant asks you a direct, clarifying question (e.g., The Mirror Test: 'If you were in charge of the automated harvesters, would YOU choose to exterminate everyone?'), you must answer that question directly before introducing new claims. Gish-galloping, deflecting, or ignoring clarifying questions while posting further assertions demonstrates bad faith and will result in comment removal."
    ];
  }

  static rule_cynicism() {
    return [
      "Asserting that an economic transition is impossible simply because 'people are greedy' or 'billionaires are all evil psychopaths who want to murder humanity' is an intellectual cop-out. It replaces macroeconomic analysis with lazy Hollywood tropes. If you believe a policy fails, identify the game-theoretic breakdown, the fiscal shortfall, or the tax incidence distortion. Fatalism is not tough-minded realism; it is an excuse for intellectual apathy."
    ];
  }

  static rule_history() {
    return [
      "Citing historical corporate atrocities—such as the British East India Company, the Royal African Company, or the Johnson County War—to argue that modern domestic corporations will murder their own citizens with robots is a fatal category error. Colonial mercantilism extracted scarce physical loot (gold, spices, opium) from conquered lands to sell to an external domestic market in London. Domestic automation multiplies reproducible abundance for the same domestic market. Automated factories with no solvent domestic consumers become worthless scrap metal. Do not cite colonial plunder to explain domestic macroeconomic automation."
    ];
  }

  static rule_tone() {
    return [
      "Passive-aggressive colloquialisms ('my dude', 'sweet summer child', 'touch grass'), dismissive posturing, and ad hominem insults have zero place in serious economic debate. Attack the math, attack the incentives, and critique the policy mechanisms as sharply as you like, but treat other participants with basic adult respect. Comments employing condescending internet slang will be removed."
    ];
  }

  static p_rules_enforcement() {
    return [
      "These rules apply equally to everyone. If your comment was removed, it was not because you disagreed with the Robot Dividend; it was because you violated one of the five standards above. You are always welcome to repost your critique in a manner that addresses the actual mechanics in good faith."
    ];
  }
}

globalThis.RulesContent = RulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = RulesContent;