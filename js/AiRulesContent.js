class AiRulesContent {
  static getMeta() {
    return {
      kicker: "Internal LLM Collaboration Directives & Style Guide",
      title: "AI Collaboration & Prompting Rules",
      subtitle: "The negative constraints and stylistic parameters required to write natural, grounded, un-AI-sounding economic rebuttals."
    };
  }

  static manifest() {
    return [
      {
        section: "ai_rules_section",
        partLabel: "Directives",
        title: "The Natural Voice Playbook",
        blocks: [
          { id: "p_ai_rules_intro", type: "p" },
          { id: "box_anti_tells", type: "sidebar", kicker: "Directive 1", title: "Eliminating the Five AI Tells" },
          { id: "box_human_syntax", type: "sidebar", kicker: "Directive 2", title: "Natural Human Syntax & Rhythm" },
          { id: "box_prompt_template", type: "sidebar", kicker: "Directive 3", title: "Master Copy-Paste Comment Prompt" },
          { id: "p_ai_rules_summary", type: "p" }
        ]
      }
    ];
  }

  static p_ai_rules_intro() {
    return [
      "This reference page codifies the exact rules for generating natural, human-sounding rebuttals in public forums. The greatest problem with using LLMs in comment sections is that standard AI responses are instantly recognizable: they sound like a polite corporate HR manager summarizing a textbook, triggering instant skepticism from real participants."
    ];
  }

  static box_anti_tells() {
    return [
      "Strictly eliminate the five giveaways of AI text:\n1. No Throat-Clearing Intros: Never start with praise ('That's a fascinating point!', 'You raise a great historical question'). Start directly with the core argument.\n2. No Symmetrical Bullet-List Addiction: Never output three neatly balanced 40-word bullet points with bold titles. Real human comments use uneven paragraphs.\n3. Ban the AI Buzzword Smog: Never use 'delve', 'tapestry', 'testament', 'pivotal', 'nuanced', 'crucial', 'stark', 'beacon', or 'interplay'.\n4. No Corporate Diplomatic Balancing: Do not hedge obvious truths merely to seem neutral. If an analogy is mathematically broken, state that directly.\n5. No Tidy Wrap-Up Conclusions: Never end with a Hallmark summary ('In conclusion, while the future remains uncertain, only time will tell...'). End on a punchy, lingering point."
    ];
  }

  static box_human_syntax() {
    return [
      "To sound like an articulate, grounded individual typing from a keyboard:\n• Vary sentence length aggressively: place a short, blunt four-word sentence right after a long, detailed explanation.\n• Use conversational conversational transitions: 'Look,', 'Here's the problem with that:', 'That sounds plausible until you look at the math.', 'Fair enough, but...'\n• Ground the math in concrete objects: talk about combines, bushels of wheat, power meters, grocery shelves, and factory balance sheets rather than abstract 'socio-economic paradigms.'\n• The Mirror Test rule: when a commenter retreats into cartoon villainy, immediately ask what they would personally do in that seat."
    ];
  }

  static box_prompt_template() {
    return [
      "Copy-paste this template into your prompt when drafting a reply to online cynics:\n\n'Draft a reply to this commenter for me. Here are the negative constraints:\n- Write as an articulate, grounded author in an internet comment section.\n- No bullet points. No bold text headers. Use 3-4 natural, conversational paragraphs.\n- Do not use throat-clearing praise ('Good point') or tidy summary conclusions ('In conclusion'). Dive straight into the refutation.\n- Vary sentence lengths. Use occasional short, blunt sentences.\n- Ban AI buzzwords: delve, crucial, nuanced, tapestry, testament, stark, pivotal.\n- Keep it under 220 words. Make it punchy, reasonable, and intellectually lethal.'"
    ];
  }

  static p_ai_rules_summary() {
    return [
      "By enforcing these negative constraints, the AI shifts from generating synthetic corporate prose to functioning as a high-speed drafting partner that speaks with authentic intellectual clarity."
    ];
  }
}

globalThis.AiRulesContent = AiRulesContent;
if (typeof module !== "undefined" && module.exports) module.exports = AiRulesContent;