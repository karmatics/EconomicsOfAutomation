class RulesContent {
  static getMeta() {
    return {
      kicker: "Quora Moderation Policy & Discussion Standards",
      title: "Ground Rules for Replying to My Quora Posts",
      subtitle: "Why I ask commenters what they would do in the same position, and how we keep discussions focused on real economics rather than movie tropes."
    };
  }

  static manifest() {
    return [
      {
        section: "rules_summary",
        partLabel: "Overview",
        title: "The Four Quick Rules (TL;DR)",
        blocks: [
          { id: "p_quora_context", type: "p" },
          { id: "sidebar_tldr_summary", type: "sidebar", kicker: "Summary", title: "The Four Standards at a Glance" }
        ]
      },
      {
        section: "rules_breakdown",
        partLabel: "Details",
        title: "The Logic Behind the Rules",
        blocks: [
          { id: "rule_mirror", type: "sidebar", kicker: "Rule 1 • The Mirror Test", title: "Heading Off the Cartoon Villain Trap" },
          { id: "rule_cynicism", type: "sidebar", kicker: "Rule 2 • Performative Cynicism", title: "The 'Bunker King' Fantasy & Evil for Evil's Sake" },
          { id: "rule_sandbox", type: "sidebar", kicker: "Rule 3 • Respect the Sandbox", title: "Thought Experiments vs. Real-World Legislation" },
          { id: "rule_tone", type: "sidebar", kicker: "Rule 4 • Keep it Civil", title: "The 'You're So Naive' Reflex" },
          { id: "p_quora_process", type: "p" }
        ]
      }
    ];
  }

  static p_quora_context() {
    return [
      "If you’re reading this from one of my Quora answers or posts, welcome. I sometimes moderate my comment threads to keep the signal-to-noise ratio high. I always warn people first by linking to this page, and whenever I delete a comment, I leave a note explaining which rule was crossed.\n\nThe goal is never to silence disagreement. If you have a critique of tax incidence, price stability, capital expenditure, or the legislative glide path, that is great discourse and I welcome it. These rules exist for one reason: to stop comment threads from immediately descending into reflexive cynicism, comic-book villainy, and personal snark."
    ];
  }

  static sidebar_tldr_summary() {
    return [
      "If you're commenting on my Quora posts, here are the four rules to keep in mind:\n\n1. **The Mirror Test (The Golden Rule):** If your argument is that the wealthy will simply hoard all the robots, hide in bunkers, or let humanity starve, be prepared to answer: *If you were in their position, is that what YOU would do?* If you wouldn't do it, don't assume others are cartoon villains just to dodge the economics.\n2. **Performative Cynicism is Not an Argument:** Assuming people will act evil purely for the sake of being evil—contrary to their own self-interest and financial survival—fails basic game theory. Capital needs solvent domestic consumers to have any value.\n3. **Respect the Thought Experiment:** A simplified sandbox (like twelve pioneers or an island of castaways) isolates currency and production on purpose. Don't smuggle in external mercenary armies or alien lasers to dodge answering the underlying economic principles.\n4. **Keep it Civil:** Calling someone 'naive' because they use game theory instead of cynicism is a cop-out. Critique the math and the policy as sharply as you want, but drop the condescending slang, passive aggression, and personal insults."
    ];
  }

  static rule_mirror() {
    return [
      "When people run out of macroeconomic counterarguments, they almost always retreat into comic-book plots: 'Billionaires will just hoard all the robots, build fortified enclaves, and let the rest of humanity starve.'\n\nWhenever someone makes this claim, I will ask them this exact question:\n\n**'If you were in this position, what would you do?'**\n\nThink about why this question is so important. If you developed automated combines, modular housing factories, and clean energy grids that produced an overwhelming surplus of physical necessities, would *you* order armed drones to massacre your neighbors and starve eight billion people? Or would you support an automated dividend that ensured a stable, peaceful, flourishing civilization where you could enjoy your wealth in safety and public honor?\n\nIf you wouldn't choose mass starvation, then why are you predicting that someone else inevitably would? If you are unwilling to say, 'Yes, that is what I would do in their shoes,' then there is something fundamentally broken with your argument. You have stopped analyzing human incentives and started projecting cinematic villainy onto others to justify feeling helpless."
    ];
  }

  static rule_cynicism() {
    return [
      "The 'Bunker King' Fantasy & Evil for Evil's Sake: A very common comment is that the ultra-wealthy don't care about consumer markets and will simply 'build bunkers and defend them with private armies.'\n\nThat sounds tough-minded, but it makes zero sense under cold game theory:\n\n1. **A bunker is solitary confinement:** Wealth is an intersubjective social status game. You cannot show off a trillion dollars to an android, and you cannot enjoy luxury inside a concrete tomb surrounded by sentry turrets. A billionaire isolated in a bunker with robots isn't an emperor; he's a prisoner in an appliance warehouse.\n2. **Capital requires solvent consumers:** Automated factories producing cars, houses, and food have zero commercial value if the domestic public has no income. Corporate revenues crash to zero and stock values evaporate. Capital needs the Robot Dividend just to stay solvent.\n\nAssuming that elites will destroy the consumer economy and imprison themselves in bunkers assumes they will act evil *purely for the sake of being evil*, even when it destroys their own wealth, safety, and status. That's why I ask people what they would do: if you wouldn't make that insane trade, don't base your economic analysis on assuming someone else would."
    ];
  }

  static rule_sandbox() {
    return [
      "Thought Experiments vs. Real-World Policy: Simplified models (like seven castaways on an island or pioneers at a sawmill) exist to isolate how currency, labor, and machine output interact when stripped of real-world noise. Attacking an island model by saying 'corporations would send gunboats to massacre the castaways and build a luxury resort' breaks the sandbox.\n\nThe island represents the whole planet. There is no off-screen corporation, and there is no outside world to book your resort. If you want to debate real-world policy on Earth, critique the actual legislative architecture in Part 3 (the border-adjusted VAT, corporate surtax, and land value tax). But don't smuggle outside forces into a closed thought experiment just to avoid the math."
    ];
  }

  static rule_tone() {
    return [
      "The 'You're So Naive' Reflex: Dismissing an argument by saying 'You're so naive to think the rich will do this' is not a counterargument; it's a defense mechanism. Cynicism often masquerades as sophistication because predicting catastrophe makes you feel worldly without requiring you to do any actual homework on tax design or game theory.\n\nI don't expect anyone to share machine surplus out of kindness or charity. I argue they will do it for two cold, selfish reasons: first, because an automated electorate will outvote them in a democracy; and second, because capital owners need solvent domestic buyers to keep their businesses alive.\n\nCalling someone naive because they analyze incentives instead of declaring doom is just performative cynicism. Disagree with the mechanics, but leave the condescending internet slang and sneers at the door."
    ];
  }

  static p_quora_process() {
    return [
      "How I Moderate:\n\n1. **Warning First:** If a comment violates these guidelines, I will reply with a link to this page and identify which rule was crossed, giving you a chance to refocus on the economics.\n2. **A Note on Deletion:** If a comment is deleted, I will leave a brief note explaining why so the thread remains transparent.\n3. **Good-Faith Welcome:** You are always welcome to reformulate your argument around the actual economics and post again. If your argument holds up to first principles, it will stand."
    ];
  }
}

globalThis.RulesContent = RulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = RulesContent;