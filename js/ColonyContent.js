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
      "It is worth considering a geopolitical reality that Western commentators often misjudge: an authoritarian command state like China is structured to adapt to post-labor automation with brutal efficiency. A centralized regime does not have to spend decades navigating corporate lobbying, legislative filibusters, or media culture wars. If Beijing decides to deploy tens of millions of humanoid robots, retool entire industrial provinces, and allocate the physical harvest by executive decree, it can move fast. And if AI systems handle an increasing share of scientific research and engineering, the old Western assumption that top-down states 'cannot innovate' falls flat. The challenge for a free society is not pretending authoritarian states are incompetent; it is proving that a democracy can achieve this same transition voluntarily—through transparent consensus and clear fiscal rules—without surrendering human liberty to a digital police state.",
      "Consider the geopolitical contrast with command economies like China. A centralized government faces far less procedural friction when labor becomes obsolete. They can mandate industrial automation, deploy massive robotic fleets, and reallocate physical resources by executive decree. The old cliché that authoritarian regimes will fail because they stifle human innovation misses the point: when advanced AI and autonomous systems drive the innovation cycle themselves, command economies can execute at terrifying speed. Our task in the democratic world is existential: if we remain paralyzed in partisan warfare over obsolete payroll taxes, top-down command regimes will operationalize post-labor abundance long before we do."
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

  static p_colony_tax_1() {
    return [
      "To see how clean public finance becomes in an automated society, the colony replaces the tens of thousands of pages of special-interest tax loopholes that plague Earth with an open mathematical schedule defined by two intuitive dials. On the frontier, citizens demonstrate this directly by voting on the parameters at the ballot box. On Earth, this represents an inspiring horizon for direct digital democracy—where citizens could annually tune the macro dials of their own commonwealth. But we do not need to wait for a total constitutional overhaul to begin: standard representative legislatures can charter this exact continuous schedule into law as an automated statutory auto-pilot. In both cases, the tax code ceases to be a corrupt labyrinth of political favoritism; it becomes an open, transparent protocol.",
      "The colony's two-number tax schedule serves as a pedagogical model for radical fiscal transparency. On Earth today, tax codes are labyrinthine battlegrounds for corporate lobbyists, packed with tens of thousands of carve-outs, accelerated shelters, and offshore loopholes. In a well-designed post-labor economy, whether tuned directly by citizen consensus or enacted by elected representatives as a statutory stabilization rule, fiscal policy is parameterized cleanly: capturing automated capital profits and converting them into an unconditional baseline for every citizen through a single continuous curve."
    ];
  }

  static p_colony_tax_2() {
    return [
      "The two dials are straightforward: the total collection rate (T) sets the overall percentage of economic surplus captured for public dividends and infrastructure, while the progressivity index (P) sets the shape of the curve. To prevent a scenario where voters set taxes so high that essential technicians quit before anyone notices the grid degrading, the collection dial operates within a safety corridor. While citizens vote freely on progressivity to decide how equal or differentiated incomes should be, the ceiling on total collection is tied to physical indicators: warehouse inventories of food and materials, power grid reserve margins, and vacancy rates in critical maintenance trades. If physical reserves drop or essential staffing runs short, the collection ceiling gently throttles back. The public steers the economic engine with genuine democratic agency, but the vehicle has safety limits to prevent the electorate from accidentally outrunning the physical capacity of the real world.",
      "The strength of this two-number mechanism is its stability over time. One parameter governs total surplus capture within an engineered safety envelope, and the other governs progressivity. Because the curve is continuous, it operates smoothly across the entire transition. When most people work for wages, it acts as a standard progressive tax. As machines replace human labor, the same formula automatically channels growing machine surplus into universal dividends without requiring emergency bailout bills, while physical capacity metrics keep the system grounded."
    ];
  }

  static p_colony_tax_3() {
    return [
      "Whenever citizens vote for a progressivity curve above 30%, the formula automatically generates negative tax credits for lower income percentiles. It creates an unconditional citizen dividend floor without requiring a separate welfare bureaucracy or means-testing rules. At the same time, the math guarantees that the effective marginal tax rate across every bracket remains well below 100%. Earning an extra Credit through specialized craft, engineering, or voluntary overtime always puts more money in your pocket. There are no sudden welfare cliffs or administrative trapdoors where working an extra hour leaves you worse off.",
      "Because the tax schedule is an open mathematical curve, negative taxes flow naturally to lower brackets as a guaranteed dividend floor. There is no separate welfare bureaucracy, no means-testing stigma, and no paperwork labyrinth. The community simply tunes the two numbers to balance collective security and individual reward, confident that the formula mathematically guarantees that additional human contribution is always rewarded with higher net income."
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