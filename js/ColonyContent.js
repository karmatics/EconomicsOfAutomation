class ColonyContent {
  static getMeta() {
    return {
      kicker: "Scaling the model to 100,000 pioneers, tangible money, and machine abundance",
      title: "The Colony of 100,000",
      subtitle: "Why an optimal democratic architecture and direct fiscal consensus make the transition to full automation effortless."
    };
  }

  static getImagePrompts() {
    return {
      masterAnchor: "Cinematic 35mm film still, shot on Arri Alexa with anamorphic lenses, natural golden hour lighting. Authentic planetary frontier aesthetic: realistic wear, composite materials, solar array frames, hydraulic utility pistons, unpainted titanium, rough-hewn timber, canvas shade tarps, utilitarian denim and canvas workwear. Grounded practical sci-fi film still.",
      fig_colony_gov: "A bustling civic assembly courtyard of a 100,000-person frontier city. In the foreground, diverse citizens view public transparent voting terminals displaying ranked preference consensus distribution curves under timber-and-glass arches. In the background, civic habitations and green terraformed hills.",
      fig_colony_depot: "A massive multi-commodity automated warehouse on a frontier colony. Overhead gantry cranes move standard shipping pods containing solar storage cells, yellow-pine timber, grain sacks, and pure water containers. Colonists inspect rugged data slates showing basket-pegged credit reserves.",
      fig_colony_bots: "An open industrial clearing outside the colony settlement. Human engineers and operators stand beside newly unpacked bipedal and tracked heavy-utility robots. Holographic diagnostics display open-source AI foundation models as the machines begin assembly of subsequent robotic units."
    };
  }

  // Section 1: The Setup & Clean Canvas at Scale
  static p_colony_intro_1() {
    return [
      "In our first thought experiment, we watched twelve settlers and then a hundred manage the arrival of automated machines. But critics will understandably ask: what happens when you scale up from a tiny frontier outpost to a real city of a hundred thousand people? Can the arithmetic of abundance survive in a society large enough to need complex infrastructure, hospitals, transit grids, and municipal governance?",
      "The jump from a hundred people to a hundred thousand is the test that matters. At this scale, direct interpersonal memory is completely impossible. Society requires a real legal framework, public budgets, and an organized fiscal system. The question is whether the transition to machine abundance can still be handled gracefully when an economy reaches the size of a modern city."
    ];
  }

  static p_colony_intro_2() {
    return [
      "The answer is yes—provided we don't blind ourselves by dragging all the structural dysfunctions of Earth along for the ride. We aren't quite ready to leap directly into the messy reality of our current terrestrial economies, because our real-world political systems are burdened by a fatal defect: our voting methods divide us into bitter partisan warfare. Plurality voting and first-past-the-post ballots inevitably lead to vote splitting, primary extremism, and two-party gridlock. In that environment, passing rational fiscal policy is nearly impossible. To see how clean the automation transition actually is, we must first examine how it works in a society designed without those democratic defects.",
      "To understand how smoothly an automated transition can run, we have to strip away the institutional pathologies that paralyze planet Earth. On Earth today, our voting methods punish nuance: vote splitting forces citizens into defensive partisan camps, transforming economic debate into an endless culture war. Before we confront the entrenched friction of terrestrial politics on our third page, let us first look at what happens when a society of 100,000 people starts with an optimal democratic framework and direct fiscal consensus."
    ];
  }

  static sidebar_ranked_voting() {
    return [
      "Instead of our traditional 'pick-one' plurality ballot—which causes vote splitting and forces voters to pick the lesser of two evils—the colony uses ranked ballots. Under ranked voting (specifically evaluated through the Condorcet criterion), citizens simply rank candidates in order of preference. The winner is the candidate who beats every other competitor in head-to-head comparisons. In practice, this almost always selects the candidate closest to the median consensus of the entire electorate, completely eliminating partisan primaries, spoiler candidates, and tribal gridlock.",
      "The colony avoids two-party polarization by using ranked voting. Rather than forcing voters into binary camps where third choices split the vote, voters rank their options. By applying the Condorcet standard—finding the candidate who wins head-to-head matchups against all others—elections naturally identify the median preference of the population. Candidates cannot win by firing up a zealous 30% base while alienating everyone else; they have to be broadly acceptable to the majority."
    ];
  }

  static p_colony_china_contrast() {
    return [
      "It is worth noting a terrestrial counterpoint: authoritarian regimes like China face far less procedural friction when restructuring their economies. Because power is centrally controlled from the top down, a command regime can decree mass automation, deploy millions of industrial robots, and mandate demographic reallocations overnight without waiting for legislative consensus. That central authority undeniably makes their technical execution of an automated transition faster and easier. But it comes at the steep price of personal freedom, individual preference, and civil liberty. Our challenge in a free society is to achieve that same effortless transition through optimal democratic consensus, rather than bureaucratic coercion.",
      "Consider how this contrasts with centrally controlled systems like China. An authoritarian command structure can decree automation from above, retooling entire cities and deploying robot fleets by executive fiat. While that top-down control certainly makes executing a rapid transition easier in the short run, it sacrifices human autonomy and ignores genuine public consent. A free society cannot and should not transition that way. Our goal is showing that when democracy is engineered properly, a free people can transition even more smoothly—by voting directly on the rules of their own abundance."
    ];
  }

  // Section 2: The Tangible Basket Currency
  static p_colony_money_1() {
    return [
      "Having scaled far beyond the hundred-person sawmill settlement, the colony needs a stable medium of exchange. Rather than adopting unbacked fiat currency subject to speculative debasement, or gold that carries little practical utility, they back their currency with a standardized basket of essential physical goods.",
      "At 100,000 people, currency is essential. Remembering the lesson of the hundred pioneers who backed their scrip with milled lumber, this larger settlement backs every Credit not with paper promises, but with custody receipts for a tangible basket of core physical commodities: kilowatt-hours of clean power, liters of purified water, staple grain, and standardized building materials."
    ];
  }

  static p_colony_money_2() {
    return [
      "Because every Credit in circulation represents an honest claim check on real, physical reserves, prices can adjust freely to reflect supply innovations without the threat of runaway inflation. Money here is not wealth itself; it is an unforgeable ticket redeemable for physical abundance produced by the colony's farms, reactors, and mills.",
      "This commodity-basket standard keeps money anchored in physical reality. Speculative financial bubbles cannot conjure phantom wealth from thin air, because every Credit corresponds to tangible goods in public depots. The currency serves its true historical purpose: an accurate, trusted accounting token to share and trade real output."
    ];
  }

  // Section 3: Algorithmic Taxation: Voting on Two Numbers
  static p_colony_tax_1() {
    return [
      "With a non-partisan legislature and an honest currency in place, the colony solves public finance by replacing the thousands of pages of special-interest tax loopholes that plague Earth with an open mathematical formula governed by just two numbers.",
      "On Earth, tax codes are battlegrounds for lobbyists, packed with tens of thousands of carve-outs and shelters. The colony replaces all of that with a radically transparent, democratic fiscal policy. The entire tax and dividend structure is defined by two fundamental numbers chosen directly by the citizens."
    ];
  }

  static p_colony_tax_2() {
    return [
      "The first number is the Total Collection Rate (T): the percentage of aggregate colony output collected each year for public infrastructure and universal citizen dividends. The second number is the Progressivity Index (P): the slope of the curve determining how much of that collection comes from high-capital enterprises versus lower earners. Every citizen votes by simply picking their two preferred numbers on an annual ballot, and the median preference becomes the law of the land.",
      "Every year, each citizen casts a ballot by selecting two values: a target percentage for total public revenue (T), and a progressivity index (P) defining the curve. Because the median choice automatically governs both parameters, the tax code directly reflects the median voter's will—without a single lobbyist or backroom deal."
    ];
  }

  static p_colony_tax_3() {
    return [
      "Notice the elegance of this mechanism: as shown in the simulation above, whenever the citizens vote for a progressive curve above 30%, the formula automatically generates negative income tax credits for the lower percentiles. It creates an unconditional citizen dividend floor without requiring separate welfare legislation. The tax code and the Robot Dividend are the exact same mathematical function.",
      "Because the tax schedule is an open mathematical curve, negative taxes flow naturally to lower brackets as a guaranteed dividend floor. There is no separate welfare bureaucracy, no means-testing stigma, and no paperwork labyrinth. The community simply tunes the two numbers to balance public revenue and individual freedom."
    ];
  }

  // Section 4: The Robot Influx & 1:1 Automation
  static p_colony_robot_1() {
    return [
      "With these institutional foundations running smoothly, the colony receives a shipment of advanced utility robots along with sophisticated AI control software. Rather than hoarding the technology or fearing unemployment, the colony uses the machines to build more machines, rapidly expanding the fleet to 100,000 autonomous units—one machine worker for every human citizen.",
      "A fleet of versatile industrial automatons and open foundation AI models arrives at the settlement. The pioneers immediately deploy them to quarry stone, mill lumber, and manufacture duplicates, quickly scaling the robotic workforce until machines equal the human population."
    ];
  }

  static p_colony_robot_2() {
    return [
      "The machines take over all routine physical drudgery: farming, timber harvesting, utility grid maintenance, and heavy construction. Where human crews previously endured exhausting twelve-hour shifts under alien suns, automated combines and hydraulic excavators run around the clock, powered by solar arrays and coordinated by AI logistics.",
      "Autonomous tractors cultivate the fields, robotic haulers manage the warehouses, and automated framing units erect homes at machine speed. Human labor shifts from compulsory toil into chosen vocations, creative arts, scientific research, and civic life."
    ];
  }

  // Section 5: The Frictionless Shift to Abundance
  static p_colony_trans_1() {
    return [
      "Now observe what happens to employment and human survival as machines take over. In a terrestrial economy where taxes depend on human payrolls, replacing 100,000 human jobs would collapse municipal revenues and trigger mass poverty. But in the colony, the two-number democratic tax code absorbs the transition without friction.",
      "Because the colony’s fiscal system is parameterized, the transition requires no emergency bailout bills. As autonomous factories generate record surpluses while human payrolls shrink, citizens simply use their annual ballot to set the collection rate to capture machine output and channel it directly into the citizen dividend floor."
    ];
  }

  static quote_colony() {
    return [
      "An optimal economic system does not manufacture busywork to justify human existence; it updates its ledger to reflect the reality of machine abundance.",
      "When machines produce all the food, shelter, and energy, forcing humans to toil for permission to eat is not economics—it is an obsolete superstition."
    ];
  }

  static p_colony_trans_2() {
    return [
      "The 100,000 pioneers achieved full automation without a single strike, breadline, or economic collapse because their democracy was engineered to share abundance rather than ration scarcity. This thought experiment proves that the challenge of automation is not physical or mathematical; it is institutional.",
      "The colony demonstrates that when democracy functions without vote-splitting and fiscal policy is set directly by the people, full automation is an unalloyed blessing. This brings us directly to the real challenge: how do we bring these principles home to planet Earth?"
    ];
  }

  static p_colony_trans_3() {
    return [
      "On Earth, we cannot start from scratch on an uninhabited world, nor can we rely on top-down decrees like China. In a free society, our primary task is education: helping the population understand what an optimal democratic system looks like, how vote splitting keeps us divided, and how simple mathematical fiscal rules can guarantee abundance. With that understanding, we can use our existing voting systems to enact the structural reforms we need. That transition on Earth is the subject of our final chapter.",
      "Our path on Earth requires something far more durable than authoritarian decrees: educating the citizenry. By recognizing how our flawed voting methods polarize us and understanding how clean algorithmic taxation works, we can use our current democratic process to build a modern system that serves everyone. On the next page, we examine the practical transition here at home."
    ];
  }

  static manifest() {
    return [
      {
        section: "introduction",
        partLabel: "Part One",
        title: "Scaling Up: The Clean Canvas at 100,000",
        blocks: [
          { id: "p_colony_intro_1", type: "p" },
          { id: "p_colony_intro_2", type: "p" },
          {
            id: "sidebar_ranked_voting",
            type: "sidebar",
            kicker: "Governance Note",
            title: "Why Ranked Voting Eliminates Partisan Gridlock"
          },
          { id: "p_colony_china_contrast", type: "p" }
        ]
      },
      {
        section: "currency",
        partLabel: "Part Two",
        title: "The Tangible Basket Standard",
        blocks: [
          { id: "p_colony_money_1", type: "p" },
          { id: "p_colony_money_2", type: "p" }
        ]
      },
      {
        section: "taxation",
        partLabel: "Part Three",
        title: "Algorithmic Taxation: Voting on Two Numbers",
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
        title: "The Machine Influx: Scaling to 100,000 Robots",
        blocks: [
          { id: "p_colony_robot_1", type: "p" },
          { id: "p_colony_robot_2", type: "p" }
        ]
      },
      {
        section: "transition",
        partLabel: "Part Five",
        title: "The Frictionless Shift to Abundance",
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