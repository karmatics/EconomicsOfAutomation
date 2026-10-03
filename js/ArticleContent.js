class ArticleContent {

  static getMeta() {
      return {
        kicker: "A thought experiment on work, money, and machines",
        title: "The Robot Dividend",
        subtitle: "A first-principles guide to post-labor economics: how machine abundance decouples survival from sweat, and why the arithmetic of a Robot Dividend holds up."
      };
    }
  static getImagePrompts() {
    return {
      masterAnchor: "Cinematic 35mm film still, shot on Arri Alexa with anamorphic lenses, natural golden hour frontier lighting. Style reminiscent of Earth 2, Firefly, and Terra Nova: authentic planetary colony aesthetic, realistic wear and tear, weathered matte composite materials, solar array frames, hydraulic utility pistons, unpainted titanium and dusty polymer mixed with rough-hewn timber, canvas shade tarps, and utilitarian denim and canvas workwear. Photorealistic, atmospheric dust motes, subtle lens flare, realistic depth of field, tactile textures. No sleek white plastic, no neon cyberpunk, no post-apocalyptic rubble.",
      fig_dozen: "Cinematic wide-angle shot of a frontier planetary colony. In the foreground, twelve colonists of varied ages and builds in dusty utility flightsuits and canvas work vests sit around a long, hand-crafted wooden trestle table set outdoors in front of a prefab habitat. In the middle ground, a scorched, heat-tiled cargo pod rests on stabilizer pads in a clearing of alien grass. Stepping down from the pod's ramp is a squad of rugged, solar-powered bipedal and quadruped agricultural utility machines with matte olive and unpainted titanium chassis, hydraulic articulated joints, and tool grips. Warm afternoon sunlight, rolling prairie hills and terraformed pine-like trees in the background, authentic Earth 2 and Firefly frontier sci-fi atmosphere, photorealistic 8k.",
      fig_hundred: "A bustling open-air frontier community sawmill on an alien world. In the foreground, a close-up medium shot shows two colonists in heavy leather work gloves and dust-caked denim shirts exchanging payment: one holds a rugged, scratched handheld data slate displaying an amber-monochrome digital certificate depicting a standardized lumber board, while the other holds a physical, freshly milled yellow-pine 2x4 board with a glowing stamped verification barcode. In the background, stacks of uniform cut timber sit under canvas awnings, powered by a rugged hybrid tractor with solar panels and high-torque treads. Golden hazy sunlight, sawdust floating through light beams, photorealistic cinematic film still.",
      fig_trans: "A rugged logging and farming perimeter on a frontier colony. In the background, massive heavy-duty mechanical harvester robots with multi-tread tracks and articulated hydraulic chainsaw arms fell and stack massive alien trees, kicking up plumes of dirt and pine needles. In the foreground, a group of relaxed human colonists sit on a tailgate of an electric utility truck under a shade tarp with warm mugs, holding a tablet showing monthly community distribution ledgers. They are observing the automated harvesting without stress or fatigue. Natural daylight, atmospheric mist, realistic machinery wear and grease, grounded practical sci-fi film still.",
      fig_auto: "A relaxed, sunlit settlement town square and open-air wooden café veranda on a thriving frontier colony planet. In the foreground, a colonist sits on the wooden porch steps playing an acoustic wooden guitar for a small gathering of smiling friends drinking tea, surrounded by hand-painted ceramic mugs and sketchbooks. In the background, quiet autonomous utility drones and compact robotic weeders glide smoothly through lush agricultural terraced fields. A sense of relaxed freedom and chosen vocations, warm late-afternoon sun, terracotta and cedar architectural details mixed with solar roof tiles, beautiful cinematic realism."
    };
  }

  // Section 1: The Scarcity Illusion
  static p_scarcity_1() {
    return [
      "Whenever the conversation turns to AI and robots eventually doing most of the work humans do today, the reaction is almost always the same: if the machines take every job, how will anyone earn enough to eat, pay rent, or see a doctor?",
      "Ask almost anyone what happens when machines take over human labor, and the worry is virtually instantaneous: without jobs, how does anyone buy food, cover housing, or afford healthcare?"
    ];
  }

  static p_scarcity_2() {
    return [
      "Sit with that fear for a second, because it's a strange one. We are worried that inventing a technology capable of producing an overwhelming surplus of food, housing, energy, healthcare and manufactured goods will somehow leave humanity worse off. More of everything, produced with less human effort, adding up to poverty — that should set off alarm bells on its own.",
      "Pause on that anxiety for a moment, because it defies basic arithmetic. We are terrified that achieving an effortless surplus of food, shelter, clean power, and medicine will plunge humanity into ruin. The idea that having vastly more of everything with far less human struggle leads to poverty should strike us immediately as an absurdity."
    ];
  }

  static p_scarcity_3() {
    return [
      "The anxiety usually isn't about technology itself. It comes from confusing money with wealth. Money has never been food, housing, or healthcare—it is an accounting token engineered for a world where getting anything done demanded human muscle. For thousands of years, having no job and having nothing to eat were the exact same physical reality: if people didn't work the fields, crops didn't grow and the community starved. That history forged an automatic reflex: labor equals income equals survival. But automation breaks that equation. You can now have minimal human sweat alongside record physical output. When people ask, 'If robots take our jobs, how will we buy food?' they are asking a question that assumes human sweat is still required to bake the bread. If machines are already baking it, employment is no longer the engine of our sustenance—it is just an outdated gatekeeper.",
      "The worry comes down to a mix-up between claim checks and the harvest. Money has never been a meal, a roof, or medical care; it is an accounting convention we invented to ration scarcity in a world where physical survival demanded human muscle. For centuries, our operating formula has read: sweat → wages → survival. When automation severs labor from production, our instincts tell us the sky is falling. But machines don't destroy goods; they produce them. When automated granaries overflow, starvation is a failure of our ledger, not a law of nature."
    ];
  }
  static p_scarcity_4() {
      return [
        "Where does this inquiry lead? Over the course of this six-part investigation, we will trace the journey from a tiny frontier outpost all the way to modern macroeconomic policy on Earth. We begin with twelve pioneers with no money, scale to a settlement of a hundred where currency is backed by physical utility, introduce partial robotic labor, and watch how an unconditional dividend naturally emerges. From there, we scale the model to a city of 100,000, tackle our polarized politics on Earth, dismantle the psychology of the 'doomer loop,' compare competing post-labor architectures, and run an adversarial gauntlet against every major economic objection. To see why our scarcity instincts are obsolete, we begin by stripping away central banks, stock markets, and financial plumbing to watch the story unfold from scratch—one relationship, then one ledger, at a time.",
        "To understand how a society can thrive when machines do the work, we must trace the idea from its simplest beginnings to full-scale civilization. This series maps that entire transition: starting with a 12-person homestead where reputation replaces money, advancing to a 100-person settlement with a timber-backed Credit, introducing a partial robot shipment that decouples survival from shifts, and scaling to a democratic city of 100,000 with algorithmic taxation. Finally, we bring the model home to planet Earth, showing how a modern economy can update its distribution rules so that machine progress elevates every individual's baseline."
      ];
    }
  static p_dozen_1() {
      return [
        "Picture twelve colonists settled on a fertile, Earth-like frontier world, operating independently without active supply lifelines back home. Everyone works hard, but they live reasonably well. Two tend the crops. Two build and maintain the shelters. Two keep the water filtration system humming. The rest split their time felling timber, repairing worn tools, and cooking. Life is steady and honest, but because every pair of hands is needed to keep the community running, nobody takes an indefinite holiday.",
        "On an isolated frontier planet, twelve pioneers establish a self-sufficient homestead. Everyone puts in an honest, full day's work, and in return they enjoy decent meals and secure shelter. A couple of colonists farm, a couple build and patch habitations, and others take on water maintenance, timber, and communal cooking. They get by comfortably, but keeping that standard requires regular effort from all twelve.",
        "Imagine twelve people establishing a new colony. The work is steady and people put in solid days, but nobody is starving and the living is decent. Two settlers handle agriculture, two handle carpentry, two watch the water systems, while the rest manage tools and food prep. As long as everyone pulls their weight, life on the frontier is stable and comfortable."
      ];
    }
  static p_dozen_2() {
    return [
      "There's no money here, and no need for any. Twelve people is small enough that everyone knows everyone else intimately. You know who spent the morning knee-deep in the irrigation ditch and who was up on the roof in the rain fixing a leak. Reputation does the job a ledger would do in a larger group — contribution is visible, freeloading is nearly impossible to hide, and food, water, and shelter get shared without anyone needing to keep score.",
      "Within a tight circle of twelve, currency is completely redundant. Direct social visibility does all the heavy lifting. Everyone sees who worked the irrigation lines and who repaired the solar converters. Mutual accountability replaces ledgers; freeloading is immediately conspicuous, and survival essentials circulate freely because reputation is the only credit that matters."
    ];
  }

  static p_dozen_3() {
      return [
        "Then, one day, an automated cargo pod sent on a long trajectory from Earth touches down in a clearing. Inside is a squad of rugged, autonomous utility robots equipped with high-efficiency solar arrays and modular self-diagnostic systems. Between them, they can handle almost every routine physical task the colony needs: plowing fields, milling timber, cooking meals, and rough construction.",
        "Then a pre-programmed resupply pod drifts down from orbit. Inside is a squad of versatile autonomous machines, complete with an onboard self-sustaining power system. Straight out of the crate, they are capable of handling the heavy lifting: planting crops, hauling timber, maintaining infrastructure, and preparing meals.",
        "Everything changes when a supply drop arrives carrying a complement of rugged utility automatons. Powered by their own modular energy systems and built for self-maintenance, these machines can do all the routine physical chores: farming, carpentry, plumbing, and cooking."
      ];
    }
  static p_dozen_4() {
    return [
      "Do the twelve colonists panic because they've just \"lost their jobs\"?",
      "Do these twelve pioneers shudder in fear because their labor has been rendered obsolete?"
    ];
  }

  static p_dozen_5() {
    return [
      "They don't panic, because the machines offer something far more valuable than extra goods: they give the colonists their time back. For the first time, survival is separated from sweat. The machines mill sturdier lumber, cultivate larger fields, and build better homes at mechanical speed. But the real change is human freedom. The twelve pioneers no longer have to spend their waking hours toiling just to earn the right to exist. Their time is their own. They can read, explore, study, craft, or spend sunny afternoons together doing whatever they choose. Compulsory labor largely disappears, leaving behind something rare in human history: genuine control over one's own days.",
      "Not at all. While having larger homes and plentiful food is welcome, the real breakthrough is simpler: people no longer have to work just to stay alive. Because autonomous utility units plow the soil, fell timber, maintain water lines, and prepare meals, the settlers are freed from the biological tax of survival. The defining gift of automation isn't just a bigger pile of stuff; it's the return of human time.",
      "Far from it. Extra grain and larger habitations are welcome blessings, but they miss the real triumph: the machines eliminate the necessity of human drudgery entirely. No one has to chop wood in the freezing rain or spend dawn to dusk pulling weeds just to justify their dinner. The work is done, survival is guaranteed, and the colonists are finally free to live rather than merely labor."
    ];
  }
  static fig_dozen() {
      return [
        "Fig. 1: Twelve colonists, a surplus harvest, and utility robots stepping off the cargo pod.",
        "Fig. 1: Machine speed transforms the homestead: larger houses, plentiful food, and zero required chores."
      ];
    }

  static p_dozen_6() {
    return [
      "Work was never the ultimate purpose of human life; it was the price of admission to stay alive. When machines pay that price for us, we don't lose our livelihood—we gain our lives. The arrival of automated labor means nobody has to work unless they choose to.",
      "Work has always been a means to an end—a tax paid in sweat to secure food, shelter, and comfort. When automatons pay that tax instead of people, nothing of human value is destroyed. What is gained is the rarest commodity in human history: the freedom to spend your days doing whatever you want."
    ];
  }
  static p_hundred_1() {
      return [
        "Now shift focus across the continent to a separate settlement—a sister colony of a hundred people that hasn't received any automated pods. Here, every timber, brick, and meal is still produced entirely by human hands. But with a hundred settlers, something fundamental shifts: the group has expanded well past the threshold where human memory can casually track everyone's daily effort. You can no longer know, simply by looking around the campfire at night, who was digging irrigation trenches all afternoon and who was resting in the shade. Direct social visibility breaks down, and reputation alone can no longer balance the community's books.",
        "To see how money enters the picture, imagine an entirely different colony across the continent: a community of a hundred pioneers where machines haven't arrived yet, and everyone still toils under the old rules. In a group this size, organic trust fails. You hit the scale where you can no longer keep mental tabs on a hundred different people's daily work. Without that direct personal visibility, reputation alone can no longer serve as the economic ledger.",
        "Now shift your focus to a separate settlement across the continent: a sister colony of a hundred people where every crop and shelter is still built by hand. At a hundred people, you cross the line where direct interpersonal memory can track who pulled their weight. Reputation can no longer balance the books."
      ];
    }
  static p_hundred_2() {
    return [
      "Without some way to verify contribution, trade turns messy. A farmer has no simple way to know whether the stranger asking for tomatoes spent yesterday chopping firewood or napping in the shade. To keep exchange fair and freeloading rare, the colony needs a stand-in for trust: money.",
      "Scale dissolves organic trust. A farmer cannot audit whether the newcomer requesting a bushel of grain spent the morning felling timber or resting in a hammock. To prevent social friction and keep distribution orderly among relative strangers, the settlement requires a portable surrogate for verified contribution: a monetary unit."
    ];
  }

  static p_hundred_3() {
      return [
        "Rather than inventing a fiat currency out of thin air, the community anchors its money to something tangible and standardized: milled lumber from the local sawmill. They create a unit called the Credit, pegged directly to a standard 2×4 board. If you're building a shed or an extra bedroom and need raw timber, you can always cash in your Credits at the lumber yard for physical 2×4s. But day to day, whether tracked in paper scrip or on a simple digital balance, Credits circulate just like dollars to buy groceries, hire an electrician, or pay the settlement doctor.",
        "To keep exchange clear, the colony backs its currency with real material wealth: standard yellow-pine 2×4s produced at the community sawmill. They call the unit a Credit. One Credit can always be redeemed at the storage yard for an actual 2×4 board—handy whenever someone is adding an extension to their home or building furniture. For everyday trade, Credits simply circulate like ordinary dollars, on paper or digital ledgers, buying bread, tailoring, or medical care.",
        "They establish a standard monetary unit: the Credit, backed one-to-one by standardized timber from the town mill. Anyone who needs building materials for a project can walk into the warehouse and cash their Credits in for actual 2×4 lumber. In daily life, nobody drags boards through the marketplace; people simply swap Credits like dollars to purchase food, services, and shelter."
      ];
    }

  static fig_hundred() {
      return [
        "Fig. 2: The Credit standard: redeemable for milled 2×4 lumber, circulating like dollars for daily trade.",
        "Fig. 2: A warehouse-backed Credit: usable as building materials or traded freely for goods and services."
      ];
    }

  static p_hundred_4() {
      return [
        "Notice why this currency standard works: milled lumber has immediate, indisputable physical utility. You can always use a standard 2×4 to frame a bedroom, brace a roof, or craft furniture. Contrast this with gold: gold holds value primarily through convention and historical habit, not practical utility in an early frontier settlement. Spending colony labor digging in the dirt for soft yellow metal would be a pointless waste of human effort when what people need is shelter, food, and clean water. Wealth is never the token; wealth is the physical goods and services the token commands. Because the Credit represents an actual board produced by the mill, money here is an honest claim check on physical output.",
        "The Credit is anchored in tangible, real-world utility. Unlike gold—whose value rests on collective convention and would be a waste of colony labor to mine—a standard 2×4 board possesses undeniable material worth: it directly frames homes, fences, and tools. Anyone holding a Credit holds a guarantee for something genuinely useful in the settlement. Money here is not wealth itself; it is an honest claim check on the community's physical output.",
        "Choosing milled lumber anchors the economy in genuine physical reality. A 2×4 isn't like gold, whose worth relies on shared myth rather than practical utility for survival. It is something you can immediately use to keep the rain off your family. The Credit is a promise backed by physical usefulness. In an unautomated colony, this keeps the ledger honest: every board demands human sweat, so earning Credits requires contributing labor."
      ];
    }
  static p_trans_1() {
      return [
        "Then a cargo pod touches down carrying an automated workforce, but only enough units to handle about half the colony's total labor. The machines take over the heaviest tasks: clearing land, felling trees, and rough framing. But between limited machinery and nuanced jobs that require human dexterity, plenty of work remains across the settlement.",
        "A partial shipment of utility robots lands at the hundred-person colony. There aren't enough machines to automate everything, but they immediately take over the hardest chores—deep excavation, row planting, and bulk logging. Roughly half of the community's total workload still demands human hands."
      ];
    }

  static p_trans_2() {
    return [
      "Under the old rules, this looks like an economic crisis. If robots take over half the work, half the workforce loses their shifts—and without shifts, they stop earning Credits. But the food in the depot and the timber in the yard didn't vanish; they multiplied. Net of the power, maintenance, and materials required to keep the machines running, the colony's total physical output has surged. At the same time, relative prices adjust: because timber and grain are harvested at machine speed, their cost in Credits drops, immediately lowering the baseline expense of staying alive. The underlying arithmetic is straightforward: if a hundred people require a hundred bushels of grain, and autonomous combines harvest a hundred and fifty, unemployed workers cannot explain a food shortage. A grocery shelf does not care whether wheat was reaped by a human hand or a robotic arm; it only cares whether someone holds an accounting token to take it home. Letting people go hungry while silos overflow is an obsolete failure of bookkeeping.",
      "Look at what happens if the colony clings to its old distribution rules: half the workforce is no longer needed at the mill or the farm, so half the workforce stops earning Credits. But the food in the depot and the timber in the yard didn't vanish—they multiplied. Even if automation arrives unevenly, the price of automated staples drops. The physical arithmetic is simple: if a hundred people need a hundred bushels of grain, and autonomous combines harvest a hundred and fifty, the existence of unemployed citizens cannot explain a food shortage. A grocery shelf doesn't care who or what reaped the wheat; it only cares whether someone has a token to take it home.",
      "Seen through the old lens, automation sounds like disaster: fewer available shifts means fewer people earning Credits. But the food in the warehouse didn't vanish; it multiplied, and the cost of producing basic staples plummeted. Letting people go without meals or housing simply because automated equipment made their old tasks obsolete is a failure of bookkeeping, not a shortage of goods."
    ];
  }
  static p_trans_3() {
      return [
        "The solution is straightforward: update the ledger to match physical reality. For the purpose of our thought experiment, assume the machines are deployed as community infrastructure. (In the real world, whether automation is owned publicly, taxed through corporate revenue, or held in citizen-dividend trusts is a secondary question of institutional plumbing—the physical arithmetic is indifferent to the corporate structure). Because the autonomous fleet produces a steady, net physical surplus of food, power, and materials with room to spare, the settlement issues an unconditional baseline of Credits to every citizen each month. Call it the Robot Dividend.",
        "The community simply updates its ledger. Since the automated fleet belongs to everyone and pumps out surplus staples, the colony distributes a regular baseline of Credits to every settler, unconditionally. The dividend decouples basic survival from having to hold down a job.",
        "The solution is straightforward: an update to the accounting. The robots are community property, deployed for everyone's benefit. Because they generate a steady, automated surplus of food, materials, and power, the settlement issues an unconditional baseline stipend of Credits to every citizen each month. Call it the Robot Dividend."
      ];
    }
  static p_trans_4() {
    return [
      "Set that dividend at a level that reliably covers basic housing, food, and essentials, and survival stops being conditional on employment. Nobody starves, because the robots — not their own two hands — are now doing half the colony's necessary labor."
    ];
  }

  static fig_trans() {
      return [
        "Fig. 3: Heavy chores move to machines; the dividend flows to all, while work becomes a choice.",
        "Fig. 3: Public automation funds a baseline Credit dividend—some work full-time, others choose leisure."
      ];
    }

  static p_trans_5() {
    return [
      "This dividend does not abolish markets or prices; it simply establishes a universal starting floor. Credits still circulate freely, prices still balance supply and demand, and anyone who wants more than the baseline can go earn it. Work does not divide artificially into everyone clocking four-hour shifts: some colonists choose not to work formal jobs at all, living on their baseline dividend while raising families, studying, or tinkering. Others work full-time running the bakery, designing specialized tools, or providing medical care, earning supplemental Credits to purchase luxury rations, custom furnishings, or larger quarters. This principle is continuous: any positive net surplus supports some dividend. You do not have to wait for total automation to begin uncoupling human survival from compulsory toil.",
      "This dividend doesn't abolish work—it makes it optional. In the real world, labor doesn't divide neatly into everyone working four-hour shifts. Some colonists choose not to work at all, living comfortably on their baseline dividend while raising children, writing, or studying. Others choose to work full-time running the bakery, managing the nursery, or designing specialized tools, earning extra Credits to buy luxury rations, custom furnishings, or larger quarters. Work shifts from a coerced requirement for survival into a personal choice.",
      "Instead of an artificial mandate where everyone works shorter hours, the colony looks a lot like real life: some people choose full-time careers because they love building or teaching, while others work no formal jobs whatsoever and live purely on the dividend. Those who take on shifts earn extra Credits on top of their stipend, letting them afford fancy meals or craft goods, while those who don't work still enjoy secure food and shelter."
    ];
  }
  // Section 5: Part Four - Full Automation
  static p_auto_1() {
    return [
      "Push the thought experiment one step further. Say the next shipment brings enough robots to take over the last of the necessary work — the toolmaking, the cooking, even most of the medicine. What happens now?"
    ];
  }

  static p_auto_2() {
      return [
        "The pattern should now be unmistakable. The Credit dividend simply expands to cover the colony's entire material baseline, just like the original twelve colonists enjoyed total abundance once machines did all the chores. The only distinction is scale: a hundred people coordinate an automated economy through Credits and ledgers, whereas twelve people could rely on direct face-to-face trust. Money was only ever a bridge for communities too large to run on memory. When machines handle the work, the rule is simple: distribute the surplus.",
        "With full automation, the ledger fulfills its true purpose. The monthly Credit dividend easily covers all food, clothing, housing, and comforts. The accounting layer—Credits, ledgers, distribution—was merely a tool invented when populations outgrew Dunbar's number and needed a way to measure scarce sweat. Once machines supply all the sweat, money stops being a rationing device for survival and becomes a simple method for sharing abundance.",
        "What worked for the twelve now works for the hundred. The universal dividend of Credits now purchases whatever anyone needs from automated warehouses. The Credit was never magical; it was simply a bookkeeping device for organizing labor among strangers. Once the labor is performed entirely by machines, the ledger's sole function is to hand out the bounty."
      ];
    }
  static fig_auto() {
    return [
      "Fig. 4: Robots keep the colony running; people spend their days on what they choose."
    ];
  }

  static p_auto_3() {
    return [
      "In this world, nobody really has to work. People simply do whatever they want with their time. That's not to say that people can't still offer specific goods or custom creations for money if they choose to, but in general, if you want to be a musician and play for an audience, you can just play any of the cafés or venues without worrying about whether you get paid. Getting paid isn't the point anymore. You're playing because you enjoy it, you're sharing it with people who appreciate it, and that's how it should be.",
      "Jobs as a ticket for survival cease to exist entirely. Work becomes voluntary vocation. If someone wants to make music, they can simply play in any public space, venue, or café without the anxious calculation of whether it pays the rent. You create because you love creating, not because you need to satisfy a ledger to stay alive."
    ];
  }

  static quote_abundance() {
    return [
      "The arrival of machines should never make anyone's life worse. When machines produce more, every individual's baseline should rise, never fall.",
      "Automation should never leave a single person worse off than before. More goods made with less human toil should elevate individual lives, not diminish them.",
      "A technology that multiplies real wealth has no business making any individual's life harder. If machines do the work, everyone's life should be better or at least equal."
    ];
  }

  static p_conc_1() {
    return [
      "Run the thought experiment back — from twelve colonists to a hundred, and from a hundred who must all work to a hundred whose robots do everything — and one principle holds firm: the arrival of machines never has to make a single individual's life worse. Machines do not create scarcity; they multiply real physical output. If an individual's quality of life falls simply because their old tasks were automated, that isn't an unavoidable consequence of technology—it is an artificial failure to update how the bounty is distributed. When physical production multiplies, everyone's standard of living can be better or at least equal, never worse.",
      "Trace the progression from start to finish: automation never has to leave anyone worse off. The machine does not manufacture hardship; it multiplies physical abundance. There is no legitimate reason for an individual to face poverty simply because mechanical hands took over their shifts while the community's silos overflow. In an automated society, no citizen's standard of living should decline—their baseline security should be guaranteed, with every path open to thrive.",
      "Across both settlements, the lesson is identical: the arrival of automated labor should never leave any person worse off than before. Machines do not destroy wealth; they generate an outright surplus. A system that allows mechanical productivity to cause personal ruin is a failure of bookkeeping and distribution, not an economic reality. When physical production surges, every individual's quality of life should rise alongside it."
    ];
  }

  static p_conc_2() {
    return [
      "Poverty in an automated world isn't an engineering failure — production is at an all-time high. It is a distribution failure: refusing to update the ledger to reflect the mountain of goods sitting in the depot, or allowing the surplus to be hoarded while former workers go without. The colonists who solved this didn't tell the machines to slow down. They recognized that mechanical labor belongs to the whole community, ensuring that nobody's life is degraded when machines take over their chores.",
      "Deprivation amid automated machinery is never a shortage of stuff; it is an outdated rulebook. When automated factories and farms run around the clock, abundance is already a physical fact. Letting individuals suffer because their labor is no longer required is purely an institutional defect. The pioneers solved this by ensuring the community as a whole reaped the fruits of mechanical labor, guaranteeing that no one's standard of living fell when the machines took over.",
      "A society where citizens struggle to survive in front of automated granaries suffers from an accounting delusion, not a material deficit. You do not need to invent busywork to justify feeding and housing people when machines are already doing the heavy lifting. You simply update the distribution system so mechanical progress makes every individual's life better, never worse."
    ];
  }

  static p_conc_scope() {
    return [
      "Strip away ideological labels—whether you call this a universal basic income, a citizen dividend, or a negative income tax—and the core argument rests on three straightforward premises:\n\n1. Autonomous machines can produce real, physical goods and services.\n2. The net output of those machines (after accounting for energy, maintenance, and capital reinvestment) can comfortably exceed the basic biological needs of the population.\n3. An economic system can issue accounting tokens representing claims on that net surplus.\n\nFor the conclusion to fail, one of those three premises has to break. If machines produce an abundant surplus of necessities, then deprivation among the unemployed is not an unavoidable physical reality; it is a political choice in how we configure the ledger. Conceding this does not mean every hard problem is solved: real-world tax architecture, transitional frictions, and the allocation of genuinely scarce positional goods (like beachfront land or historic city centers) remain thorny questions. We will tackle those mechanisms in the chapters ahead. But the starting point is solid: when machines do the producing, compulsory toil can no longer be defended as a condition for human survival.",
      "Whether framed as UBI, a citizen dividend, or a negative income tax, the core proposition comes down to three testable realities:\n\n1. Automated systems can produce tangible goods and services.\n2. The net output of automation can comfortably exceed what the population requires to live with dignity.\n3. A society can distribute purchasing tokens that represent direct claims on that surplus.\n\nIf those three hold true, no individual's standard of living needs to decline when machines replace their labor. Deprivation amid automated abundance is not an economic law; it is a policy defect. We do not need to solve the allocation of luxury penthouses before ensuring no child goes hungry while automated combines reap the fields. The physical baseline is clear: no human should be forced to justify their right to exist with compulsory sweat when machines are already doing the heavy lifting.",
      "Whether you call it Universal Basic Income, a Robot Dividend, or a negative income tax, critics always ask if the math holds up. It hinges on three basic facts:\n\n1. Machines do real physical work and generate real physical output.\n2. That automated output can surpass the baseline survival needs of everyone in the community.\n3. The monetary system can distribute tokens so citizens can access that surplus.\n\nWhen all three are present, there is no mathematical reason for any individual's living standard to decline when machines take their job. A society that permits its citizens to suffer while robots fill the granaries suffers from an intellectual delusion, not a shortage of wealth."
    ];
  }
  static manifest() {
      return [
        {
          section: "overview",
          partLabel: "Orientation",
          title: "The Roadmap: Beyond Compulsory Labor",
          blocks: [
            { id: "p_overview_thesis", type: "p" },
            { id: "p_overview_roadmap", type: "p" }
          ]
        },
        {
          section: "scarcity",
          title: "The scarcity illusion",
          blocks: [
            { id: "p_scarcity_1", type: "p" },
            { id: "p_scarcity_2", type: "p" },
            { id: "p_scarcity_3", type: "p" },
            { id: "p_scarcity_4", type: "p" }
          ]
        },
        {
          section: "dozen",
          partLabel: "Part One",
          title: "The Dozen: pure abundance",
          blocks: [
            { id: "p_dozen_1", type: "p" },
            { id: "p_dozen_2", type: "p" },
            {
              id: "img_dozen_pair",
              type: "image-group",
              layout: "pair",
              images: [
                { file: "dinner.jpeg" },
                { file: "robotsarrive.jpeg" }
              ]
            },
            { id: "p_dozen_3", type: "p" },
            { id: "p_dozen_4", type: "p" },
            { id: "p_dozen_5", type: "p" },
            { id: "p_dozen_6", type: "p" }
          ]
        },
        {
          section: "hundred",
          partLabel: "Part Two",
          title: "The Hundred: the Credit standard",
          blocks: [
            { id: "p_hundred_1", type: "p" },
            { id: "p_hundred_2", type: "p" },
            { id: "p_hundred_3", type: "p" },
            {
              id: "img_hundred_pair",
              type: "image-group",
              layout: "pair",
              images: [
                { file: "sawmill.jpeg" },
                { file: "market.jpeg" }
              ]
            },
            { id: "p_hundred_4", type: "p" }
          ]
        },
        {
          section: "trans",
          partLabel: "Part Three",
          title: "The half-robot shipment: the transition to a dividend",
          blocks: [
            { id: "p_trans_1", type: "p" },
            { id: "p_trans_2", type: "p" },
            {
              id: "img_trans_pair",
              type: "image-group",
              layout: "pair",
              images: [
                { file: "transition.jpeg" },
                { file: "robotandcarpenter.jpeg" }
              ]
            },
            { id: "p_trans_3", type: "p" },
            { id: "p_trans_4", type: "p" },
            { id: "p_trans_5", type: "p" }
          ]
        },
        {
          section: "auto",
          partLabel: "Part Four",
          title: "Full automation: the free colony",
          blocks: [
            { id: "p_auto_1", type: "p" },
            { id: "p_auto_2", type: "p" },
            { id: "p_auto_3", type: "p" },
            { id: "quote_abundance", type: "quote" },
            {
              id: "img_bottom_four",
              type: "image-group",
              layout: "grid-4",
              images: [
                { file: "musicandart.jpeg" },
                { file: "vehicle.jpeg" },
                { file: "treehouses.jpeg" },
                { file: "whimsicalhouse.jpeg" }
              ]
            }
          ]
        },
        {
          section: "conclusion",
          partLabel: "Conclusion",
          title: "Updating the ledger",
          blocks: [
            { id: "p_conc_1", type: "p" },
            { id: "p_conc_2", type: "p" },
            { id: "p_conc_perpetual", type: "p" },
            { id: "p_conc_scope", type: "p" }
          ]
        }
      ];
    }
  static p_conc_perpetual() {
      return [
        "To minds conditioned by traditional economics, an unconditional dividend often sounds suspiciously like a perpetual motion machine—an impossible attempt to get something for nothing. But consider how we reason about perpetual motion machines: you do not need to inspect every gear, spring, or pulley to know that a machine claiming to run forever without an external energy source cannot work. The physics of closed systems tells you that immediately. An automated economy is the exact inverse: you can conclude that it *can* work without getting bogged down in messy mechanics, because it is not a closed loop of human effort. Tireless external machines have entered the equation, producing an outright physical surplus. The dividend does not conjure wealth from nowhere; it simply distributes the harvest that machines are already producing.",
        "To people trained in classical scarcity, an unconditional dividend sounds like an attempt to build a perpetual motion engine. But that analogy gets the conclusion backwards. We know a perpetual motion machine is impossible without needing to trace every cog, because you cannot extract energy from a system with no inputs. With an automated economy, you can just as easily conclude that it *can* work without tracking every financial gear: the system has massive new mechanical producers generating more output than the community consumes. The dividend is simply the receipt for that surplus.",
        "At first glance, receiving goods without compulsory sweat sounds like getting something from nothing. But think of the perpetual motion analogy: you can evaluate the whole system simply by looking at inputs versus outputs. A perpetual motion machine fails because it has no external input. An automated economy succeeds because you have introduced tireless mechanical workers that pump physical abundance into the settlement. You do not need to invent busywork to justify distributing what the machines have already built."
      ];
    }

  static p_overview_thesis() {
    return [
      "When machines can produce more of everything with far less human effort, physical wealth multiplies. Why do we instinctively assume society will fall apart? The standard reaction to automation is almost pure panic: imagining that if robots take our jobs, we must starve in front of automated granaries while tech billionaires retreat into fortified compounds. I think this fear is an intellectual holdover from thousands of years of biological scarcity. If technology makes goods abundant, poverty ceases to be an inevitable reality and becomes a failure of distribution. Money has never been food or shelter; it is an accounting token we invented to ration scarce human sweat. When mechanical hands take over the toil, compulsory labor no longer needs to be the price of staying alive.",
      "The central challenge of the automated age is not whether machines can do the work, but whether our economic rulebook can adapt. For millennia, human survival demanded sweat: no labor meant no harvest, and no harvest meant hunger. Automation breaks that link. Machines produce a physical surplus. This series explores why the arrival of automated labor does not have to leave anyone worse off, and how a modern society can update its distribution rules so machine progress benefits everyone."
    ];
  }

  static p_overview_roadmap() {
    return [
      "To understand how modern economies can survive full automation, we first need to turn down the noise. If you want to understand how a complex engine works, you don't start by staring at a jet turbine; you start with a two-stroke cylinder. We strip the economic operating system down to bare metal on a simplified frontier settlement—using it as an analytical testbed to watch labor, money, and automated machinery interact in plain sight—before scaling those lessons to real-world policy on Earth:\n\n1. **The Robot Dividend:** We watch an isolated settlement transition from manual toil to partial automation, demonstrating how an unconditional Credit dividend naturally decouples human survival from compulsory employment.\n2. **The Colony of 100,000:** We scale the model to city size, introducing ranked-choice consensus and an open two-parameter tax curve ($T$ and $P$) with an interactive simulator showing how corporate automation surplus automatically converts into a universal dividend floor.\n3. **Transitioning on Planet Earth:** We bring the model home to real-world democracies, showing how a dual-pillar tax system (border-adjusted consumption taxes, excess-profit corporate surtaxes, and land value taxation) provides a smooth, self-balancing glide path without inflation or asset shocks.\n4. **The Anatomy of a Doomer Loop:** We dismantle the fatalistic belief that machines must lead to mass starvation or bunker oligarchs, using cold game theory to prove why capital owners require solvent domestic consumers.\n5. **The Three Visions:** We stress-test the Robot Dividend against competing post-labor architectures—David Shapiro's Sovereign Wealth Funds and Emad Mostaque's compute vouchers—showing why physical claim checks outperform financialized equity.\n6. **The Adversarial Gauntlet:** We confront the toughest counterarguments from orthodox economists, covering transitional friction, demand-pull inflation, positional land scarcity, geopolitical rivalry with China, and human purpose in an automated age.",
      "To show how a post-labor society functions in practice, this series progresses through six distinct stages:\n\n1. **The Robot Dividend:** Grounding the core concept in physical reality using a clean-slate colony, showing how money represents claim checks on real goods and how automated surpluses fund an unconditional dividend floor.\n2. **The Colony of 100,000:** Scaling up to city scale with an interactive tax simulator, demonstrating how an algorithmic negative income tax curve automatically captures machine output.\n3. **Transitioning on Planet Earth:** Applying the model to modern economies with a dual-pillar fiscal design that avoids capital flight, protects retirement assets, and eliminates inflation.\n4. **The Anatomy of a Doomer Loop:** Walking through an authentic online debate to show how scarcity anxiety escalates into apocalyptic fantasies—and the cold game theory that refutes them.\n5. **The Three Visions:** Evaluating the leading post-scarcity economic proposals (equity endowments, compute vouchers, and physical dividends) against thermodynamics and human agency.\n6. **The Adversarial Gauntlet:** Stress-testing the thesis against orthodox counterarguments, from Ricardian land rents to geopolitical rivalry and the search for human meaning."
    ];
  }
}

globalThis.ArticleContent = ArticleContent;
if (typeof module !== "undefined" && module.exports) module.exports = ArticleContent;