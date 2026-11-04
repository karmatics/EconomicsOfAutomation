class ColonyContent {
  static getMeta() {
    return {
      kicker: "Scaling the model to 100,000 pioneers, tangible money, and machine abundance",
      title: "2. The Colony of 100,000",
      subtitle: "Why clear democratic rules and direct fiscal consensus make the transition to full automation manageable."
    };
  }

  // Fallback methods for headless environments where HTML templates are not mounted
  static p_colony_intro_1() {
    return [
      "Our first thought experiment watched twelve pioneers and then a hundred settlers manage the arrival of automated machines. But critics will reasonably ask: what happens when you scale up from a tiny frontier outpost to a real city of a hundred thousand people? Can the arithmetic of abundance hold together in a society large enough to need complex transit grids, municipal water, hospitals, and public governance?"
    ];
  }

  static p_colony_intro_2() {
    return [
      "It can, provided we don't blind ourselves by dragging all the structural dysfunctions of Earth along for the ride. Our real-world voting systems divide us into bitter partisan camps. Plurality ballots and first-past-the-post voting inevitably produce vote-splitting, primary extremism, and two-party gridlock where passing rational fiscal policy is nearly impossible. To see how clean the automation transition actually is, we first examine how it works in a city designed without those democratic defects."
    ];
  }

  static sidebar_ranked_voting() {
    return [
      "Why Ranked Voting Eliminates Gridlock:\n\nInstead of our traditional 'pick-one' plurality ballot—which causes vote splitting and forces voters to pick the lesser of two evils—the colony uses ranked ballots evaluated through the Condorcet criterion. The winner is the candidate who beats every other competitor in head-to-head comparisons, selecting the person closest to the median consensus.\n\nWhen applied to setting a single scalar number—like Dial T or community dues—this connects directly to Duncan Black's foundational Median Voter Theorem (1948). On a continuous spectrum, preferences are single-peaked, meaning taking the median is mathematically strategy-proof: a fringe minority voting for an extreme number cannot pull the median away from the center. It guarantees pragmatic, centrist stability without extremist hijacking."
    ];
  }

  static p_colony_money_1() {
    return [
      "Having scaled far beyond the hundred-person sawmill settlement, the colony needs a stable medium of exchange. Remembering the lesson of the pioneers who backed their currency with lumber, this city backs every Credit with custody receipts for a standardized basket of physical essentials: kilowatt-hours of clean power, liters of purified water, staple grain, and modular building supplies."
    ];
  }

  static p_colony_money_2() {
    return [
      "Because every Credit in circulation represents an honest claim check on real physical reserves, prices can adjust freely to reflect technological improvements without the threat of runaway monetary debasement. Money here is not wealth itself; it is an unforgeable ticket redeemable for physical abundance produced by the colony's farms, reactors, and mills."
    ];
  }

  static p_colony_tax_1() {
    return [
      "To keep public finance transparent, the colony replaces tens of thousands of pages of special-interest tax loopholes with an open mathematical schedule defined by two intuitive settings: the Total Collection Rate (T) and the Progressivity Index (P).\n\nThink of it like a home thermostat. You don't open the furnace to manually adjust the air-to-fuel combustion ratio; engineers designed the furnace to regulate that automatically. You simply dial the temperature you want. Dials T and P are the thermostat interface for an automated economy. On the frontier, citizens tune them at the ballot box. On Earth, a legislature can charter that exact formula into statutory law as an automated auto-pilot."
    ];
  }

  static p_colony_tax_2() {
    return [
      "The collection dial (T) sets the overall percentage of economic surplus captured for public dividends and municipal infrastructure, while the progressivity index (P) sets the shape of the curve. Critics often object: 'If people vote on their own checks, won't they vote for T = 100% on day one?'\n\nIn practice, people do not behave like children voting for candy for breakfast. In existing democracies, voters already hold the legal power to elect leaders who would cut all taxes to zero tomorrow; they don't do it because they know roads would crumble, power grids would fail, and civilization would collapse. Dial T bundles collection and the dividend into a single balanced equation: you cannot vote for an unbacked check without raising T, and you cannot vote to strip capital of maintenance funds without collapsing your own future dividend. The median voter naturally isolates the sustainable center."
    ];
  }

  static p_colony_tax_3() {
    return [
      "Whenever citizens vote for a progressivity curve above 30%, the formula automatically generates negative tax credits for lower income percentiles. It creates an unconditional citizen dividend floor without requiring an intrusive welfare bureaucracy or means-testing rules.\n\nAt the same time, the math guarantees that the effective marginal tax rate across every bracket remains well below 100%. Earning an extra Credit through specialized craft, engineering, or voluntary overtime always puts more money in your pocket. There are no sudden welfare cliffs or administrative trapdoors where working an extra hour leaves you worse off."
    ];
  }

  static p_colony_robot_1() {
    return [
      "With these institutional foundations running smoothly, the colony receives a shipment of advanced utility robots along with AI control software. Rather than hoarding the technology or fearing unemployment, the colony uses the machines to manufacture more machines, rapidly expanding the fleet to 100,000 autonomous units—one machine worker for every human citizen."
    ];
  }

  static p_colony_robot_2() {
    return [
      "The machines take over all routine physical drudgery: farming, timber harvesting, utility grid maintenance, and heavy construction. Where human crews previously worked exhausting twelve-hour shifts under an alien sun, automated combines and hydraulic excavators run around the clock, powered by solar arrays and coordinated by AI logistics. Human activity shifts from compulsory survival into voluntary vocations, scientific research, creative arts, and civic life."
    ];
  }

  static p_colony_trans_1() {
    return [
      "In a legacy economy where public budgets rely on taxing human wages, replacing 100,000 human jobs would collapse municipal revenues and trigger mass destitution. But in the colony, the two-dial tax code absorbs the transition without friction. As corporate automation generates record output while payroll costs drop, the community tunes Dial T to capture machine rents and distribute them directly as an expanding citizen dividend floor."
    ];
  }

  static quote_colony() {
    return [
      "An optimal economic system does not manufacture busywork to justify human existence; it updates its ledger to reflect the reality of machine abundance."
    ];
  }

  static p_colony_trans_2() {
    return [
      "The 100,000 pioneers achieved full automation without a single strike, breadline, or financial crash because their governance was engineered to share abundance rather than ration scarcity. The challenge of automation is not physical or mathematical; it is institutional."
    ];
  }

  static p_colony_trans_3() {
    return [
      "On Earth, we cannot start from scratch on an uninhabited world. In a free society, our primary task is education: helping people understand how vote-splitting keeps us polarized, and how simple mathematical fiscal rules can guarantee abundance. With that understanding, we can use our existing democratic institutions to enact the structural reforms we need."
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