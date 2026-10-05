class RulesContent {
  static getMeta() {
    return {
      kicker: "Quora Discussion Standards",
      title: "Ground Rules for Replying on Quora",
      subtitle: "A quick guide to keeping discussions focused on real economics and game theory rather than movie tropes."
    };
  }

  static manifest() {
    return [
      {
        section: "quora_rules",
        partLabel: "Forum Notice",
        title: "Comment Rules",
        blocks: [
          { id: "p_quora_intro", type: "p" },
          { id: "rule_mirror", type: "sidebar", kicker: "Rule 1 • The Mirror Test", title: "Heading Off the Cartoon Villain Trap" },
          { id: "rule_cynicism", type: "sidebar", kicker: "Rule 2 • Performative Cynicism", title: "The 'Bunker King' Fantasy & 'You're So Naive'" },
          { id: "rule_sandbox", type: "sidebar", kicker: "Rule 3 • Respect the Sandbox", title: "Don't Break the Thought Experiment" },
          { id: "rule_civility", type: "sidebar", kicker: "Rule 4 • Civility", title: "Critique the Math, Not the Person" },
          { id: "p_quora_closing", type: "p" }
        ]
      }
    ];
  }

  static p_quora_intro() {
    return [
      "If you were linked here from one of my Quora answers or posts, welcome. I sometimes moderate my threads to keep the signal-to-noise ratio high. I always warn people first by linking here, and if I ever delete a comment, I leave a note explaining why.\n\nWhile some of these are standard rules of civil debate, a couple are specific to discussions about AI, robotics, and the economics of automation—where people tend to jump straight into apocalyptic movie plots instead of dealing with actual economics. Here is what to keep in mind:"
    ];
  }

  static rule_mirror() {
    return [
      "When people run out of economic counterarguments, they almost always retreat into comic-book plots: 'Billionaires will just hoard all the robots, exterminate humanity, and let everyone starve.'\n\nIf you make this claim, be prepared to answer this question:\n\n**'If you were in this position, what would you do?'**\n\nIf you developed automated farms and factories that produced an overwhelming surplus of food and housing, would *you* order drones to murder your neighbors and starve eight billion people? Or would you support an automated dividend that ensured a stable, peaceful, prosperous civilization where you could enjoy your wealth in safety and respect?\n\nIf you wouldn't choose mass murder, don't assume everyone else will either. And if you are unwilling to say, 'Yes, that is what I would do in their shoes,' then you aren't analyzing rational self-interest—you are projecting cartoon villainy onto others to justify feeling helpless."
    ];
  }

  static rule_cynicism() {
    return [
      "Dismissing an economic argument by saying 'You're so naive' or 'They'll just hide in fortified bunkers' is not tough-minded realism—it's a defense mechanism.\n\nFirst, a bunker is solitary confinement. Wealth is a social status game. You cannot flex a trillion dollars on an android, and living in an underground bunker while the world collapses isn't winning; it's solitary confinement in an appliance warehouse.\n\nSecond, capital owners need solvent consumers. An automated factory has zero commercial value if the domestic public has no income to buy its products. Assuming elites will destroy their own customer base assumes they will act evil *purely for the sake of being evil*, even when it destroys their own wealth.\n\nI don't expect anyone to share surplus out of charity; I argue they will do it out of cold self-preservation. Critique the tax mechanics or the game theory, but drop the knee-jerk nihilism."
    ];
  }

  static rule_sandbox() {
    return [
      "Simplified thought experiments (like seven castaways on an island or pioneers at a sawmill) exist to isolate how currency and machine abundance interact without the noisy distractions of real-world politics.\n\nAttacking an island thought experiment by saying 'a corporation will send gunboats to massacre the castaways and build a resort' breaks the sandbox. The island represents the closed system of Earth—there is no outside corporation, and there is no outside planet to book your resort.\n\nIf you want to debate real-world policy on Earth, critique the actual legislative tax architecture in Part 3. But don't smuggle outside forces into a closed model just to dodge the economic principles."
    ];
  }

  static rule_civility() {
    return [
      "Disagree with the math, the policy, and the conclusions as sharply as you like—that's what makes debate worthwhile. But drop the condescending internet slang, sneering dismissals, and personal insults.\n\nComments that rely on snark, bad-faith deflections, or patronizing jargon will receive a warning and, if continued, will be removed."
    ];
  }

  static p_quora_closing() {
    return [
      "That's it. Keep the discussion focused on the actual economic mechanisms and game theory, and your comment will always stand."
    ];
  }
}

globalThis.RulesContent = RulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = RulesContent;