class ArticleContent {
  static getMeta() {
    return {
      kicker: "A thought experiment on work, money, and machines",
      title: "The Robot Dividend",
      subtitle: "What actually happens to a society when machines can finally do all the work?"
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
      "The panic is not really about technology; it is a profound confusion between money and wealth. Money has never been food, housing, or healthcare—it is merely an accounting token engineered for a world where getting anything done demanded human sweat. For ten thousand years of recorded history, 'no job' and 'no production' were the exact same physical reality: if people didn't break their backs in the fields, crops did not grow and the tribe starved. That ten-millennium trauma forged an ironclad reflex in the human nervous system: labor equals income equals survival. But automation snaps that ancient equation clean in half. You can now have zero human sweat alongside record physical production. When people ask, 'If robots take our jobs, how will we buy food?' they are asking a question that assumes human sweat is still required to bake the bread. But if the machines are already baking it, employment has ceased to be the engine of our sustenance—it has merely remained our obsolete gatekeeper for eating it.",
      "The anxiety isn't about machines; it is an ancient mix-up between the ticket and the harvest. Money has never been a meal, a roof, or medical care. It is an accounting convention we invented to ration scarcity in a world where physical survival demanded human muscle and cognitive strain. For centuries, our operating formula has read: sweat → wages → survival. The instant automation severs labor from the chain, our instincts scream that the entire sky is falling. But machines don't destroy goods; they produce them. When automated granaries overflow, starvation is no longer a law of nature; it is an indictment of our ledger.",
      "The confusion stems from conflating the claim check with the physical reality. Money is not wealth; wealth is the bread on the table, the warm shelter overhead, and the kilowatt-hours in the wire. Because human history has always operated under the brutal arithmetic of physical scarcity, we conditioned ourselves to believe that suffering was the prerequisite for life. When mechanical hands take over the toil, we do not face a crisis of production—we face a crisis of imagination."
    ];
  }
  static p_scarcity_4() {
    return [
      "To see why that instinct is wrong, it helps to strip away tax codes, central banks, stock markets, and every other piece of financial plumbing bolted onto modern economies, and instead watch the whole story unfold from scratch — one relationship, then one ledger, at a time — on a small, isolated colony far from any of it."
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
      "Of course not—because the real breakthrough of the machines isn't just that they produce more stuff; it's that the colonists no longer have to work. For the first time in human history, survival is completely decoupled from sweat. Yes, the machines mill sturdier lumber, cultivate larger fields, and construct better homes at machine speed. But the profound transformation is human emancipation: the twelve pioneers no longer have to burn their waking hours toiling simply to earn the right to exist. Their time is entirely their own. They can read, explore, study, craft, or spend endless sunny afternoons together doing whatever they choose. Compulsory labor vanishes overnight, leaving behind the rarest commodity in human history: absolute sovereignty over one's own life.",
      "Not for a second. While having larger homes and plentiful food is wonderful, the true miracle of the machines is far more profound: people no longer have to work. Compulsory toil evaporates. Because autonomous utility units plow the soil, fell the timber, maintain the water lines, and prepare the meals, the settlers are permanently freed from the biological tax of survival. The defining gift of automation isn't just a bigger mountain of goods—it is the return of human time.",
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
      "This is the core insight: work was never the ultimate goal of human existence; it was merely the price of admission to stay alive. When machines pay that price for us, we don't lose our livelihood—we gain our lives. The arrival of automated labor means nobody has to work anymore unless they genuinely choose to.",
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
      "Notice why this currency standard works—and why it quietly dissolves our oldest monetary superstitions. Unlike gold, whose value rests primarily on ancient convention, milled lumber has immediate, indisputable physical utility: you can always use a standard 2×4 to frame a bedroom, brace a roof, or craft furniture. To see why this distinction matters, consider a simple thought experiment: if an asteroid made of solid gold crashed into Earth tomorrow morning and every human being received a wheelbarrow full of pure bullion, would humanity be a single crumb richer? Not by a single grain of wheat. You cannot eat gold, build sturdy shelter out of soft metal, or cure an infection with it; prices would simply skyrocket overnight to soak up the flood of metal. Wealth is never the token—wealth is the physical goods and services the token can buy. Contrast this with modern cryptocurrency like Bitcoin, where civilization burns massive rivers of real electricity to manufacture artificial digital scarcity. Wasting real kilowatt-hours to simulate scarcity in a computer is an economic pathology. A currency does not need to be artificially scarce; it needs to be an honest, unforgeable claim check on real, physical abundance.",
      "The Credit is anchored in tangible, thermodynamic utility. Unlike gold—which holds value largely through collective habit—a standard 2×4 board possesses undeniable material worth: it directly frames shelter, fences, and tools. Anyone holding a Credit holds a guarantee for something genuinely useful in the settlement. If everyone in the colony were suddenly handed a ton of gold, nobody would have more food or warmer beds—prices would simply adjust. But because the Credit represents an actual board produced by the mill, money here is not wealth itself; it is an honest claim check on physical output. In an unautomated colony, this keeps the ledger honest: every board demands human sweat, so earning Credits requires contributing labor.",
      "Choosing milled lumber anchors the economy in genuine physical reality. A 2×4 isn't like gold or Bitcoin, whose worth relies on shared myth or the deliberate waste of electrical power; it is something you can immediately use to keep the rain off your family. The Credit is a promise backed by physical utility. Before machines arrive, that standard enforces reality: without labor, nothing gets built, so access to the colony's bounty must be earned with work."
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
      "Under the old rules, this looks like an immediate economic catastrophe. If robots take over half the work, half the workforce loses their shifts—and without shifts, they stop earning Credits. But the food in the depot and the timber in the yard didn't vanish; they multiplied. Net of the power, maintenance, and materials required to keep the machines running, the colony's total physical output has surged. Crucially, notice how relative prices adjust: because timber and grain are now harvested at machine speed, their cost in Credits plummets, immediately lowering the baseline expense of staying alive. The underlying arithmetic is straightforward: if a hundred people require a hundred bushels of grain, and autonomous combines harvest a hundred and fifty, the existence of unemployed workers cannot explain a food shortage. A grocery shelf does not care whether wheat was reaped by a human hand or a robotic arm; it only cares whether someone holds an accounting token to take it home. Letting people go hungry while silos overflow is not an immutable law of economics; it is an obsolete failure of bookkeeping.",
      "Look at what happens if the colony clings to its old distribution rules: half the workforce is no longer needed at the mill or the farm, so half the workforce stops earning Credits. But the food in the depot and the timber in the yard didn't vanish—they multiplied. Even if automation arrives unevenly—flooding the community with staple crops and lumber while custom carpentry still requires human hands—the price of those automated staples drops toward zero. The physical arithmetic is dead simple: if a hundred people need a hundred bushels of grain, and autonomous combines harvest a hundred and fifty, the existence of unemployed citizens cannot explain a food shortage. A grocery shelf does not care whether wheat was reaped by a human arm or a hydraulic actuator; it only cares whether someone has a token to take it home. Letting people go hungry while silos overflow simply because machines did the chores is not an economic law; it is a failure of bookkeeping.",
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
        "Crucially, this dividend does not abolish markets or prices; it merely establishes a universal starting floor. Credits still circulate freely, prices still balance supply and demand, and anyone who wants more than the baseline can go earn it. Work does not divide artificially into everyone clocking four-hour shifts: some colonists choose not to work formal jobs at all, happily living on their baseline dividend while raising families, studying, or tinkering. Others choose to work full-time running the bakery, designing specialized tools, or providing medical care, earning generous supplemental Credits to purchase luxury rations, custom furnishings, or larger quarters. Furthermore, this principle is continuous: any positive net surplus supports some dividend. You do not have to wait for total automation to begin uncoupling human survival from compulsory toil.",
        "Crucially, this dividend doesn't abolish work—it makes it optional. In the real world, labor doesn't divide neatly into everyone working four-hour shifts. Some colonists choose not to work at all, living comfortably on their baseline dividend while raising children, writing, or studying. Others choose to work full-time running the bakery, managing the nursery, or designing specialized tools, earning extra Credits to buy luxury rations, custom furnishings, or larger quarters. Work shifts from a coerced requirement for survival into a personal choice.",
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
      "Strip away the ideological labels—whether you call this UBI, a citizen dividend, or an algorithmic negative income tax—and the core argument rests on three straightforward, checkable premises:\n\n1. Autonomous machines can produce real, physical goods and services.\n2. The net output of those machines (after accounting for their energy, maintenance, and capital reinvestment) can comfortably exceed the baseline biological needs of the population.\n3. An economic system can issue accounting tokens representing claims on that net surplus.\n\nFor the conclusion to fail, one of those three premises must break. If machines genuinely produce an abundant net surplus of necessities, then deprivation among the unemployed is not an unavoidable mathematical reality; it is an active political choice in how we configure the ledger. Conceding this does not mean every complex problem is solved: real-world ownership structures, tax architecture, transitional frictions, and the allocation of genuinely scarce positional goods (like beachfront land or unique historic artifacts) remain difficult political questions. We will resolve those institutional mechanisms across the subsequent chapters. But the foundational baseline is unassailable: when machines do the producing, compulsory human toil can no longer be defended as a prerequisite for human survival.",
      "Whether framed as UBI, a citizen dividend, or a negative income tax, the core proposition comes down to three testable realities:\n\n1. Automated systems can produce tangible goods and services.\n2. The net output of automation can comfortably exceed what the population requires to live with dignity.\n3. A society can distribute purchasing tokens that represent direct claims on that surplus.\n\nIf those three hold true, no individual's standard of living needs to decline when machines replace their labor. Deprivation amid automated abundance is not an economic law; it is a policy defect. We do not need to solve the allocation of luxury penthouses before ensuring no child goes hungry while automated combines reap the fields. The physical baseline is clear: no human should be forced to justify their right to exist with compulsory sweat when machines are already doing the heavy lifting.",
      "Whether you call it Universal Basic Income, a Robot Dividend, or a negative income tax, critics always ask if the math holds up. It hinges on three basic facts:\n\n1. Machines do real physical work and generate real physical output.\n2. That automated output can surpass the baseline survival needs of everyone in the community.\n3. The monetary system can distribute tokens so citizens can access that surplus.\n\nWhen all three are present, there is no mathematical reason for any individual's living standard to decline when machines take their job. A society that permits its citizens to suffer while robots fill the granaries suffers from an intellectual delusion, not a shortage of wealth."
    ];
  }
  static manifest() {
    return [
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
      "To minds conditioned by traditional economics, an unconditional dividend often sounds suspiciously like a perpetual motion machine—an impossible attempt to conjure wealth from thin air, getting something for nothing. But that objection confuses being free of human sweat with being free of physical inputs. A perpetual motion machine is impossible because in a closed thermodynamic system you cannot extract more energy than you put in. An automated economy, however, is not a closed human loop: you have introduced a massive, tireless physical producer into the equation. Powered by sunlight, mineral fuels, and nuclear energy, autonomous harvesters, robotic mills, and AI networks do real physical work. Net of the energy, maintenance, and capital required to sustain the machines, they pour an outright surplus of physical goods into the colony every single day. The dividend is simply the accounting claim check on that harvest. It is not a free lunch; the machine paid for it in physical energy.",
      "To people trained in classical scarcity, an unconditional dividend sounds like a monetary trick—an attempt to generate free energy from nowhere. But this is the exact opposite of reality. A perpetual motion machine fails because physics forbids extracting work from an empty system. An automated economy is not an empty system. The robotic fleet and generative networks represent an enormous, continuous influx of external physical power and productive capacity. You are not conjuring wealth from thin air; you are harvesting the physical bounty that autonomous machines pump into civilization around the clock.",
      "At first glance, receiving goods without requiring human sweat sounds like trying to build an engine that runs forever on nothing. But the physics here is ironclad: this is not a closed loop. The robots, autonomous tractors, and generative logistics systems are actively doing the heavy lifting. They harvest the grain, mill the timber, and maintain the infrastructure. The reason the math works is that you have added a tireless new physical producer to the family of humanity."
    ];
  }
}

globalThis.ArticleContent = ArticleContent;
if (typeof module !== "undefined" && module.exports) module.exports = ArticleContent;