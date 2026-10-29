class EarthContent {
  static getMeta() {
    return {
      kicker: "Applying the Lessons to Our World",
      title: "3. Transitioning on Planet Earth",
      subtitle: "How breaking out of the manufactured two-party trance unlocks the economics of abundance."
    };
  }

  static p_earth_intro_1() {
    return [
      "The frontier colonies had an enormous advantage: an empty continent and a clean slate. They had no 80,000-page tax codes written by lobbyists, no trillions in debt, and no cable news networks turning economic questions into tribal fights. Here on Earth, we have eight billion people, legacy institutions, and an economy built around the assumption that everyone has to work to eat."
    ];
  }

  static p_earth_intro_2() {
    return [
      "Today, modern governments fund public services mainly by taxing payrolls. As AI and robotics accelerate, this creates a real trap: the tax base shrinks at the exact moment people need income support to survive. But fixing this doesn't require an overnight leap into the unknown. A transition can phase in gradually, tied to how much labor has been displaced. In the early stages, collection starts small, delivering an initial dividend of $300 to $500 a month to cushion workers without rattling financial markets. Meanwhile, because companies save money by replacing expensive overhead with cheap compute, their widening margins protect corporate earnings and 401(k) accounts. As physical robotics and automated housing scale up, the dividend expands alongside real supply."
    ];
  }

  static sidebar_binary_trap() {
    return [
      "Bypassing the Culture War: The biggest obstacle on Earth isn't engineering; it's political fatalism. People often dismiss the Robot Dividend by assuming it requires an impossible package deal: overthrowing the two-party system, rewriting the Constitution, and handing citizens voting sliders overnight. It doesn't. An ordinary legislature can pass the baseline dividend tomorrow through a standard budget bill. It uses familiar statutory tools: an automatic negative income tax funded by consumption taxes, corporate cash-flow levies, and land value assessments, running on an automatic trigger just like Social Security cost-of-living adjustments. The obstacle isn't the legislative plumbing; it's the knee-jerk partisan reflex that treats economic engineering as a tribal blood sport."
    ];
  }

  static p_earth_china() {
    return [
      "International competition is going to force this conversation sooner than people think. A command economy like China doesn't have to spend years negotiating with lobbyists or filibustering bills. If Beijing decides to deploy tens of millions of humanoid robots, retool manufacturing, and distribute essentials by decree, it can move very quickly. The risk for the democratic West isn't that authoritarian regimes will fail; it's that they will operationalize automated abundance while free societies remain stuck defending obsolete payroll taxes."
    ];
  }

  static p_earth_interview_1() {
    return [
      "The clash between traditional economic dogma and first-principles reality came through clearly in a recent interview between Elon Musk and Zanny Minton Beddoes, the Editor-in-Chief of The Economist. Musk put the point bluntly: 'What do you want money for? You want money for goods and services. If robots and AI are providing more goods and services than any human could possibly consume, what do you need money for?'"
    ];
  }

  static p_earth_interview_2() {
    return [
      "What troubled the interviewer wasn't the physical math—she conceded the production numbers could add up. What worried her was the politics: how we get through the fear and polarization without society tearing itself apart first. That fear is the real bottleneck. The danger isn't that the machines won't make enough bread. It's that people will panic and block it from being handed out."
    ];
  }

  static quote_earth_ledger() {
    return [
      "When machines produce the surplus, letting people go hungry because they don't have a job isn't realism—it's letting an obsolete accounting rule override physical reality."
    ];
  }

  static p_earth_model_1() {
      return [
        "How do we pay for this on Earth without companies fleeing offshore? We tax things that can't move. First, a standard border-adjusted consumption tax (VAT) paired with an excess-profit surtax on corporate cash flows, while granting 100% immediate expensing for capital investments. Second, a Land Value Tax on unimproved urban locations, alongside royalties on raw energy throughput and mineral extraction. Because a VAT is assessed on domestic consumption, its border adjustments are internationally recognized under trade law, closing offshore tax-haven loopholes. By allowing businesses to immediately write off investments in robotics, clean energy, and physical infrastructure, the effective tax on building productive machines is zero percent—tax is collected only when profits are extracted for consumption."
      ];
    }

  static p_earth_model_2() {
      return [
        "The simulator handles the gap between software and hardware by splitting the dividend into two parts: free services and cash. Digital services—like automated medical screening, AI tutoring, and legal help—can scale almost immediately because software costs next to nothing to replicate, lowering household living costs without bidding up physical goods. Meanwhile, cash transfers expand in step with real physical output: housing completions, food tonnage, and electricity generation. If cash transfers start pushing staple inflation above a target band, an automatic pause kicks in so demand doesn't outrun real supply. Surplus funds during the early software phase can go into milestone prizes—modeled on NASA's commercial space bounties—paying private builders to deploy modular housing factories and expand clean energy grids."
      ];
    }

  static p_earth_conservative() {
      return [
        "If you believe in free markets and private property, a robot dividend is actually your best defense against government overreach. Consider what happens without one: it's not a low-tax free-market paradise; it's a heavy-handed surveillance state where business owners live in fear of civil unrest. If consumers lose their purchasing power, businesses starve—firms either collapse from a lack of customers or become state-dependent monopolies begging for subsidies. Allowing 100% immediate expensing of capital equipment means enterprise is rewarded for building physical machines, while investors gain what they value most: a stable, legitimate society where the public has a personal stake in commercial success."
      ];
    }

  static p_earth_progressive() {
      return [
        "For progressives, the dividend achieves what the labor movement always wanted: ending involuntary poverty. For centuries, workers had to sell their time and health under the threat of destitution. When machines shoulder the burden of production and the surplus is distributed as a right, work transforms from compulsory survival into voluntary vocation. You don't liberate workers by forcing them to compete with machines that never sleep; you liberate workers by giving them their share of what the machines produce."
      ];
    }
  static p_earth_conclusion_1() {
    return [
      "The main barrier isn't physical or mathematical. The machines can already harvest grain, generate power, and write code. The main obstacle is psychological: people struggle to believe that it can work. Conditioned by generations of scarcity, we assume that any promise of unconditional survival must be a scam. But this model doesn't rely on universal goodwill; it aligns the self-interest of every major player. Capital owners need solvent customers to keep factories profitable; workers need income to survive; and governments need stability to maintain order. Once that alignment becomes clear, the sense of impossibility fades."
    ];
  }

  static p_earth_conclusion_2() {
    return [
      "The fundamental choice before us isn't between capitalism and socialism, or between political parties. It's between accounting reality and accounting inertia. If we insist that survival must be earned through compulsory toil even while machines produce record surpluses, we'll engineer poverty in the middle of plenty. If we update our distribution rules to match physical reality, we can build a society that is both materially secure and genuinely free."
    ];
  }

  static manifest() {
    return [
      {
        section: "earth_legacy",
        partLabel: "Part One",
        title: "Bringing It Home to Earth",
        blocks: [
          { id: "p_earth_intro_1", type: "p" },
          { id: "p_earth_intro_2", type: "p" },
          {
            id: "sidebar_binary_trap",
            type: "sidebar",
            kicker: "Cognitive Freedom",
            title: "Breaking Out of the Two-Party Trance"
          },
          { id: "p_earth_china", type: "p" }
        ]
      },
      {
        section: "earth_interview",
        partLabel: "Part Two",
        title: "The Debate in Plain English",
        blocks: [
          { id: "p_earth_interview_1", type: "p" },
          { id: "p_earth_interview_2", type: "p" },
          { id: "quote_earth_ledger", type: "quote" }
        ]
      },
      {
        section: "earth_model",
        partLabel: "Part Three",
        title: "How We'd Actually Fund It",
        blocks: [
          { id: "p_earth_model_1", type: "p" },
          {
            id: "comp_earth_tax_chart",
            type: "component",
            component: "TaxChartComponent",
            title: "Terrestrial Tax Curve & Universal Dividend Simulator"
          },
          { id: "p_earth_model_2", type: "p" }
        ]
      },
      {
        section: "earth_consensus",
        partLabel: "Part Four",
        title: "Why Both Sides Benefit",
        blocks: [
          { id: "p_earth_conservative", type: "p" },
          { id: "p_earth_progressive", type: "p" }
        ]
      },
      {
        section: "earth_conclusion",
        partLabel: "Part Five",
        title: "The Path Forward",
        blocks: [
          { id: "p_earth_conclusion_1", type: "p" },
          { id: "p_earth_conclusion_2", type: "p" }
        ]
      }
    ];
  }
}

globalThis.EarthContent = EarthContent;
if (typeof module !== "undefined" && module.exports) module.exports = EarthContent;