class RulesContent {
  static getMeta() {
    return {
      kicker: "Quora Discussion Standards",
      title: "Ground Rules for Commenting",
      subtitle: "Basic expectations for fair discussion, rational game theory, and why bad-faith comments get removed."
    };
  }

  static getQuoraBlurbs() {
    return {
      compact: "💬 Note on Comments: I actively moderate replies under my answers to keep the discussion productive. If your immediate reflex is that capital will simply hoard the robots and let everyone fend for themselves, please review the [Ground Rules & The Mirror Test](https://karmatics.github.io/EconomicsOfAutomation/rules.html) before replying. Bad-faith deflections or refusal to answer what you would do in their shoes will be removed.",
      detailed: "🛑 Before Replying: I moderate comment threads on my posts to prevent bad-faith derailment. If you plan to comment, please review the Ground Rules:\n1. The Mirror Test: What would YOU do in their position? (https://karmatics.github.io/EconomicsOfAutomation/rules.html#mirror)\n2. Game Theory & Taxes: Why capital needs solvent domestic consumers (https://karmatics.github.io/EconomicsOfAutomation/rules.html#gametheory)\n3. Respect the Thought Experiment: Closed models don't have outside escape hatches (https://karmatics.github.io/EconomicsOfAutomation/rules.html#sandbox)\n4. Substance Over Cynicism: Substantive economic pushback is welcome; bad-faith sneering is deleted (https://karmatics.github.io/EconomicsOfAutomation/rules.html#civility)\nFull economic series: https://karmatics.github.io/EconomicsOfAutomation/"
    };
  }

  static manifest() {
    return [
      {
        section: "quora_rules",
        partLabel: "Discussion Standards",
        title: "Guidelines for Fair Discussion",
        blocks: [
          { id: "p_quora_intro", type: "p" },
          { id: "rule_mirror", type: "sidebar", kicker: "Rule 1 • The Mirror Test", title: "What Would You Do in Their Position?" },
          { id: "rule_gametheory", type: "sidebar", kicker: "Rule 2 • Game Theory & The Law", title: "Paying Taxes vs. Supporting the Rules" },
          { id: "rule_sandbox", type: "sidebar", kicker: "Rule 3 • Respect the Sandbox", title: "Don't Break the Thought Experiment" },
          { id: "rule_civility", type: "sidebar", kicker: "Rule 4 • Civility & Homework", title: "Critique the Mechanics, Not the Person" },
          { id: "p_quora_closing", type: "p" }
        ]
      }
    ];
  }

  static p_quora_intro() {
    return [
      "If you followed a link here from one of my Quora answers or posts, welcome. I don't own Quora, and these are not 'house rules' for the whole platform. But within my own comment threads, I do remove comments that refuse to engage with basic economics, rely on bad-faith deflections, or ignore simple game theory.\n\nThis is not censorship, and it is not an attempt to silence disagreement. If you believe the progressive tax schedule is flawed, that border-adjusted consumption taxes have enforcement gaps, or that Land Value Taxes face political hurdles, please post your critique! Detailed economic pushback is what makes these discussions valuable.\n\nHowever, discussions about AI and automation frequently derail into unexamined cynicism—assuming that people in power will always act out of cartoon greed, or calling people 'naive' without analyzing incentives. To keep the signal-to-noise ratio high, comments under my posts are held to the four basic standards below."
    ];
  }

  static rule_mirror() {
    return [
      "The most common objection in online comments is that capital owners will simply hoard everything: *'The billionaires and corporations will own all the robots, keep 100% of the profits, lobby against any taxes, and let everyone else starve or fend for themselves.'*\n\nIf you make a prediction about what people with capital will do, you must be prepared to answer **The Mirror Test**:\n\n**'If YOU were in their position, what would YOU do?'**\n\nIf you owned automated farms and factories producing an overwhelming surplus of goods, would you genuinely lobby for an economic order where the entire domestic population is destitute, desperate, and bankrupt, while your warehouses sit full of products no one can afford? Or would you support a system that guarantees solvent customers, social stability, and a safe, flourishing civilization where your wealth actually commands real security and respect?\n\nIf you wouldn't choose widespread misery and collapse for your own society, don't lazily assume everyone else will either. And if you refuse to answer what you would do in their shoes, you aren't analyzing rational self-interest—you are projecting bad-faith tropes to excuse yourself from doing real economic thinking."
    ];
  }

  static rule_gametheory() {
      return [
        "Speculation about what corporations, the wealthy, or politicians will do is evaluated under **Game Theory**—the study of rational actors responding to systemic feedback loops, not moral platitudes.\n\nHere it is critical to distinguish between **individual tax compliance**, **micro-lobbying**, and **macro-systemic stability**:\n\n1. **Why people and businesses pay taxes:** Nobody pays taxes out of generosity. They pay because the law mandates it, backed by audits, asset freezes, and legal penalties. Coercion solves the immediate compliance game.\n\n2. **Micro-evasion vs. Macro-rules:** Cynics often reflexively shout *'you're so naive—elites will just lobby away all taxes!'* That confuses the tactical game with the structural game. Yes, individual firms lobby at the margin for deductions. But rational capital owners do not lobby to destroy the entire legal and customer infrastructure that gives their assets value. A business owner might seek a property tax deduction, but they do not lobby to abolish the court system that enforces their land deeds or the roads that deliver their goods.\n\n3. **The Law of Realization:** An automated factory has zero economic value if domestic consumers have no money to buy its output. Capitalists cannot consume all their own factory output. Capital owners comply with the tax because the law requires it—and they support the policy framework because solvent customers are the non-negotiable condition for capital survival.\n\nFor a deeper look, see our primer on [Game Theory for Automation](gametheory.html)."
      ];
    }
  static rule_sandbox() {
    return [
      "Simplified thought experiments (like twelve settlers on a fertile frontier, or a settlement where currency is backed by milled timber) exist for an analytical purpose: they isolate how physical goods, money claim checks, and machines interact without the immense noise of modern central banking.\n\nAttacking an isolated thought experiment by saying *'a foreign mega-corporation will send gunships to enslave the settlers and build a casino'* breaks the sandbox. The thought experiment represents the closed economic system of Earth. There is no outside planet to export to, and there are no alien tourists booking your casino.\n\nIf you want to debate real-world policy on Earth, critique the statutory tax architecture and trade policies in Part 3 of the main series. Don't smuggle outside forces into a closed model to dodge the arithmetic."
    ];
  }

  static rule_civility() {
    return [
      "Disagree with the policy, math, and conclusions as sharply as you like. But drop condescending internet dismissals—specifically 'you're so naive'—and I'm not your 'bro.'\n\nIf a comment simply sneers, shows that the author hasn't read the piece, or refuses to answer direct questions about incentives, it will be removed. Nobody is entitled to waste other people's time."
    ];
  }

  static p_quora_closing() {
    return [
      "Keep your argument focused on the economic mechanisms, incentives, and game theory, and your comment will always stand.\n\nTo read the complete six-part series, visit [The Robot Dividend: Complete Series](index.html)."
    ];
  }
}

globalThis.RulesContent = RulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = RulesContent;