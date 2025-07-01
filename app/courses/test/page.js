"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const courseModules = [
  {
    id: 1,
    title: "The Basic Economic Problem",
    desc: "Scarcity, choice, and opportunity cost — explained with fun examples, stories & real-life dilemmas.",
    outcomes: [
      "Define scarcity, choice, and opportunity cost",
      "Show trade-offs using a Production Possibility Curve (PPC)",
      "Apply basic economic questions to everyday decisions",
    ],
  },
  {
    id: 2,
    title: "Demand, Supply & Market Equilibrium",
    desc: "How markets actually work – from what sets ice cream prices to big global fuel trends.",
    outcomes: [
      "Draw and understand demand & supply graphs",
      "Identify reasons for shifts in demand and supply",
      "Find market equilibrium; analyze effects of too much/too little",
    ],
  },
  {
    id: 3,
    title: "Elasticity & Consumer Behaviour",
    desc: "What makes demand change a lot or a little – and why brands use this to their advantage.",
    outcomes: [
      "Calculate and interpret PED, PES, and YED",
      "Analyze how elasticity affects pricing, revenue, and taxes",
      "Apply elasticity concepts to real-world markets",
    ],
  },
  {
    id: 4,
    title: "Government Intervention & Market Failure",
    desc: "When markets don't work perfectly, governments step in. Learn about taxes, subsidies, and price limits.",
    outcomes: [
      "Explain market failures: public goods, externalities, monopolies",
      "Evaluate price ceilings, floors, and subsidy effects",
      "Analyze pros & cons of indirect taxes & regulations",
    ],
  },
  {
    id: 5,
    title: "National Income & Circular Flow",
    desc: "GDP, GNP, NNP explained simply – how countries measure their total wealth and activity.",
    outcomes: [
      "Describe ways to measure national income: income, spending, output",
      "Show circular flow of income with money coming in and out",
      "Discuss why GDP might not fully show well-being",
    ],
  },
  {
    id: 6,
    title: "Inflation, Unemployment & Economic Cycles",
    desc: "Why prices go up, why people lose jobs, and how economies go through ups and downs.",
    outcomes: [
      "Tell the difference between cost-push and demand-pull inflation",
      "Describe types and reasons for unemployment",
      "Explain phases of the business cycle and related policies",
    ],
  },
  {
    id: 7,
    title: "International Trade & Exchange Rates",
    desc: "How countries trade, protect their industries, and change currency values – impacts you.",
    outcomes: [
      "Define free trade, tariffs, quotas, and subsidies",
      "Explain floating vs. fixed exchange rate systems",
      "Evaluate how currency changes affect trade balance",
    ],
  },
  {
    id: 8,
    title: "Sustainable Development & Global Gaps",
    desc: "Understanding inequality, going green, and how economies develop sustainably.",
    outcomes: [
      "Differentiate economic growth vs. development",
      "Analyze ways to reduce poverty and global inequality",
      "Discuss the role of environmental sustainability in economic plans",
    ],
  },
];



const CourseDetails = () => {

   const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };



  return (
    <>

<div className="parent bg py-[100px] home ">
  <div className="container text-center" data-aos="fade-up" data-aos-delay={200}>
    <h2 className="h2 heading mb-6">Master the Foundations of Economics</h2>
    <p className="max-w-2xl mx-auto mb-8 text-lg">
      From opportunity cost to global trade, gain a deep understanding of real-world economics with an engaging, exam-focused curriculum. Perfect for CBSE, IB, and budding economic minds worldwide.
    </p>
    <Link href="/contact" className="btn">
      Enroll Now
    </Link>
  </div>
</div>
    




<div className="parent wbg py-[100px]">
      <div className="container">
        <h2 className="h2 heading text-center mb-10" data-aos="fade-up">
            Course Modules: What You'll Learn
          </h2>
          <p className="text-center max-w-2xl mx-auto mb-10 text-[var(--text)] text-sm" data-aos="fade-up">
            Our curriculum is designed to make Economics clear and engaging, covering all essential topics found in IB and CBSE.
          </p>


        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {courseModules.map((module, index) => (
            <div
              key={module.id}
              className="bg-[#f5efff] p-6 rounded-md shadow-md relative"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 min-w-8 min-h-8 rounded-full bg-[var(--accent2)] text-white font-bold flex items-center justify-center">
                  {module.id}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-sm text-[var(--text)] mb-3">{module.desc}</p>

                  <div
                    onClick={() => toggle(index)}
                    className="flex items-center justify-between gap-2 cursor-pointer select-none text-sm font-medium text-[var(--accent2)] bg-[#e3daff] px-4 py-2 rounded-md w-fit"
                  >
                    Learning Outcomes
                    <FaChevronDown
                      className={`transition-transform duration-300 ${
                        activeIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {activeIndex === index && (
                    <div className="mt-4 text-sm text-gray-600 leading-relaxed">
                      <ul className="list-disc ml-5 space-y-1">
                        <li>Understand core concepts with practical examples.</li>
                        <li>Apply theories to real-world economic issues.</li>
                        <li>Gain exam-ready insights with clarity and depth.</li>
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
















      <div className="parent bgdark py-[100px] home ">
        <div className="container text-center text-white" data-aos="fade-up" data-aos-delay={200}>
          <h2 className="h2 heading mb-6">Ready to Begin Your Learning Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg !text-white/70">
            Whether you're aiming for top band scores in IELTS or looking to master business and finance,
            I’m here to help you unlock your full potential. Let’s connect and make your goals a reality.
          </p>
          <Link href="/contact" className="btn bg-white text-black hover:bg-gray-200 transition-all">
            Enroll Now
          </Link>
        </div>
      </div>



    </>
  );
};

export default CourseDetails;
