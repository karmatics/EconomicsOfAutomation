class ColonyContent {
  static getMeta() {
    return {
      kicker: "Scaling the model to 100,000 pioneers, tangible money, and machine abundance",
      title: "2. The Colony of 100,000",
      subtitle: "Why clear democratic rules and direct fiscal consensus make the transition to full automation manageable."
    };
  }

  static p_colony_intro_1() {
    return [
      "Our first thought experiment looked at twelve settlers and then a hundred. But critics will reasonably ask: what happens when you scale up to a real city of a hundred thousand people? Can the arithmetic of abundance hold up when you need real hospitals, power grids, and municipal governance?"
    ];
  }

  static p_colony_intro_2() {
    return [
      "It can, provided we don't bring all of Earth's political dysfunctions with us. Our real-world voting systems divide us into bitter partisan camps. Plurality ballots lead to vote splitting, primary extremism, and two-party gridlock where passing sensible economic policy is nearly impossible. To see how clean the automation transition can be, we first look at how it works in a city designed without those democratic defects."
    ];
  }

  static sidebar_ranked_voting() {
    return [
      "Why Ranked Voting Eliminates Gridlock: Instead of a traditional 'pick-one' ballot—which splits votes and forces people into lesser-of-two-evils thinking—the colony uses ranked ballots. The winner is the candidate who beats every competitor head-to-head, naturally selecting the person closest to the median consensus. When setting a single number, picking the median is hard to game: extreme votes on either end can't pull the result away from the center. It keeps things stable without partisan hijacking."
    ];
  }

  static p_colony_money_1() {
    return [
      "At a hundred thousand people, you need a dependable currency. Remembering the lesson of the hundred pioneers who backed their scrip with lumber, this city backs every Credit with custody receipts for a basket of physical essentials: kilowatt-hours of clean power, liters of water, staple grain, and standardized building supplies."
    ];
  }

  static p_colony_money_2() {
    return [
      "Because every Credit represents a claim check on real reserves, prices can adjust freely as technology improves without runaway inflation. Money isn't wealth itself; it's a ticket redeemable for physical output produced by the colony's farms and workshops."
    ];
  }

  static p_colony_tax_1() {
    return [
      "To keep public finance clear, the colony replaces thousands of pages of tax loopholes with a mathematical curve set by two dials: Total Collection Rate ($T$) and Progressivity ($P$). Think of it like a thermostat. You don't adjust the fuel-to-air combustion mixture inside your furnace; you just set the temperature you want. That's what these two dials do. On the frontier, citizens vote on them directly. On Earth, a legislature can write that exact formula into law on auto-pilot."
    ];
  }

  static p_colony_tax_2() {
    return [
      "The collection dial ($T$) sets the overall share of surplus captured for public dividends and infrastructure, while progressivity ($P$) sets the shape of the curve. Critics often object: 'If you let people vote on their own checks, won't they vote for 100% on day one?' People don't actually behave that way. In real democracies, voters already have the power to elect politicians who would slash all taxes to zero; they don't do it because they know roads would crumble and civilization would fail. The collection dial bundles the tax and the dividend into a single balanced equation: you can't vote for a check without raising $T$, and you can't strip capital of maintenance funds without collapsing your own future dividend. The median voter naturally converges on a sustainable middle."
    ];
  }

  static p_colony_tax_3() {
    return [
      "Whenever progressivity is set above 30%, the formula automatically produces negative tax credits for lower income brackets. It creates a universal dividend floor without needing a separate welfare bureaucracy or intrusive means tests. At the same time, the math guarantees that the effective tax rate on earning an extra Credit through specialized craft or extra hours always leaves you with more take-home pay. There are no sudden welfare cliffs where working an extra hour makes you worse off."
    ];
  }

  static p_colony_robot_1() {
    return [
      "With these rules in place, the colony receives a shipment of industrial robots and AI software. Rather than hoarding the technology or fearing unemployment, the settlement uses the machines to manufacture more machines, quickly scaling the fleet to 100,000 autonomous units—one machine for every citizen."
    ];
  }

  static p_colony_robot_2() {
    return [
      "The machines take over routine physical chores: farming, timber harvesting, utility maintenance, and heavy construction. Where human crews previously worked twelve-hour shifts under alien suns, automated combines and excavators run around the clock on solar power. Human work shifts from compulsory labor into chosen vocations, arts, science, and civic life."
    ];
  }

  static p_colony_trans_1() {
    return [
      "If taxes depended on human payrolls, replacing 100,000 jobs would destroy municipal budgets and create mass poverty. But in the colony, the two-dial tax code absorbs the shift smoothly. As autonomous factories generate record surplus while payrolls drop, the community sets the collection rate to capture machine output and channel it directly into the citizen dividend floor."
    ];
  }

  static quote_colony() {
    return [
      "When machines produce all the food, shelter, and energy, forcing humans to toil for permission to eat isn't economics—it's an obsolete superstition."
    ];
  }

  static p_colony_trans_2() {
    return [
      "The 100,000 pioneers reached full automation without strikes, breadlines, or financial collapse because their system was designed to share abundance rather than ration scarcity. The challenge of automation isn't physical or mathematical; it's institutional."
    ];
  }

  static p_colony_trans_3() {
    return [
      "On Earth, we can't start with a clean slate on an uninhabited world. In a free society, our main job is education: helping people understand how vote splitting keeps us polarized, and how simple mathematical tax rules can guarantee abundance. With that understanding, we can use our existing democratic institutions to enact the reforms we need."
    ];
  }

  static manifest() {
    return [
      {
        section: "introduction",
        partLabel: "Part One",
        title: "Scaling Up to a City",
        blocks: [
          { id: "p_colony_intro_1", type: "p" },
          { id: "p_colony_intro_2", type: "p" },
          {
            id: "sidebar_ranked_voting",
            type: "sidebar",
            kicker: "Governance Note",
            title: "Why Ranked Voting Eliminates Gridlock"
          }
        ]
      },
      {
        section: "currency",
        partLabel: "Part Two",
        title: "What Backs the Money?",
        blocks: [
          { id: "p_colony_money_1", type: "p" },
          { id: "p_colony_money_2", type: "p" }
        ]
      },
      {
        section: "taxation",
        partLabel: "Part Three",
        title: "A Two-Dial Tax Code",
        blocks: [
          { id: "p_colony_tax_1", type: "p" },
          { id: "p_colony_tax_2", type: "p" },
          {
            id: "comp_colony_tax_chart",
            type: "component",
            component: "TaxChartComponent",
            title: "Democratic Tax Curve & Dividend Simulator"
          },
          { id: "p_colony_tax_3", type: "p" }
        ]
      },
      {
        section: "robotics",
        partLabel: "Part Four",
        title: "When Machines Match the Population",
        blocks: [
          { id: "p_colony_robot_1", type: "p" },
          { id: "p_colony_robot_2", type: "p" }
        ]
      },
      {
        section: "transition",
        partLabel: "Part Five",
        title: "How the Transition Works",
        blocks: [
          { id: "p_colony_trans_1", type: "p" },
          { id: "quote_colony", type: "quote" },
          { id: "p_colony_trans_2", type: "p" },
          { id: "p_colony_trans_3", type: "p" }
        ]
      }
    ];
  }
}

globalThis.ColonyContent = ColonyContent;
if (typeof module !== "undefined" && module.exports) module.exports = ColonyContent;