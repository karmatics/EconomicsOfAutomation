class EarthContent {
  static getMeta() {
    return {
      kicker: "Applying the Lessons to Our World",
      title: "Transitioning on Planet Earth",
      subtitle: "Navigating legacy institutions, fiscal reform, and the path to a citizen dividend in the real world."
    };
  }

  static getImagePrompts() {
    return {
      masterAnchor: "Cinematic 35mm film still, shot on Arri Alexa with anamorphic lenses. Contemporary real-world aesthetic with near-future smart infrastructure: urban centers, automated logistics freight corridors, solar farms, human citizens collaborating with AI tools in daylight. Realistic, high detail, grounded."
    };
  }

  // Section 1: The Terrestrial Reality
  static p_earth_legacy_1() {
    return [
      "The frontier colonies possessed a decisive luxury: they started with a blank canvas. They had no entrenched tax codes written by century-old lobbying cartels, no trillions in underwater government bonds, no partisan duopoly weaponizing cultural grievances, and no deep-seated fear that decoupling work from survival would somehow dismantle the moral fabric of society. On planet Earth, we do not have the luxury of an empty continent.",
      "The thought experiments of the twelve, the hundred, and the 100,000 colonists demonstrate the pure physical arithmetic of automation: when machines produce a surplus, that surplus can be distributed unconditionally. But translating that arithmetic to Earth means navigating the messy, friction-filled reality of legacy political institutions, existing sovereign debts, and entrenched partisan warfare."
    ];
  }

  static p_earth_legacy_2() {
    return [
      "Today, terrestrial governments fund almost all public services through payroll taxes and personal income taxes—directly taxing human sweat. As AI and humanoid robotics accelerate, this creates a catastrophic fiscal scissors: government revenue from human labor contracts just as the need for citizen economic support skyrockets. Any viable transition must decouple state revenues from human wage labor and anchor them to automated productivity.",
      "The fatal flaw of modern Earth economies is that survival and public revenue are both pinned to human employment. When an enterprise replaces ten thousand accountants or warehouse workers with generative AI and autonomous robots, corporate margins expand while the municipal income tax base collapses. The current system punishes the worker and starves the public coffers precisely as wealth generation hits all-time highs."
    ];
  }

  // Section 2: The Two-Number Earth Model
  static p_earth_model_1() {
    return [
      "Can the two-number democratic taxation system work on Earth? Yes—by formalizing the balance between aggregate tax collection and progressivity into an accessible, interactive citizen consensus model. Instead of arguing over dozens of arbitrary tax brackets, voters can adjust two foundational controls: the total size of the public dividend and the steepness of the curve capturing high-end capital returns.",
      "Adapting the colony's mathematical tax function to our world allows us to test real policy trade-offs: what happens to government revenue, poverty elimination, and business reinvestment when total tax collections and progressivity indices are adjusted dynamically across the transition curve?"
    ];
  }

  static p_earth_sim_stub() {
    return [
      "Interactive Simulation Preview: In this section, you will be able to test and manipulate the parameters of the Earth transition model using dynamic sliders—exploring how changing tax levels and progressivity curves balance the budget and fund universal citizen dividends. (Interactive TaxChart component will be mounted here).",
      "Interactive Transition Engine: Dynamic control sliders will allow real-time exploration of tax curves, progressivity coefficients, and robot dividend distribution floors. Ready for integration with the TaxChart module."
    ];
  }

  static manifest() {
    return [
      {
        section: "earth_legacy",
        partLabel: "Part One",
        title: "The Legacy Dilemma: Navigating the Friction of Earth",
        blocks: [
          { id: "p_earth_legacy_1", type: "p" },
          { id: "p_earth_legacy_2", type: "p" }
        ]
      },
      {
        section: "earth_model",
        partLabel: "Part Two",
        title: "The Algorithmic Path Forward",
        blocks: [
          { id: "p_earth_model_1", type: "p" },
          { id: "p_earth_sim_stub", type: "callout" }
        ]
      }
    ];
  }
}

globalThis.EarthContent = EarthContent;
if (typeof module !== "undefined" && module.exports) module.exports = EarthContent;