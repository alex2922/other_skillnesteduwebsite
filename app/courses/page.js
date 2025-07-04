import Link from "next/link";
import React from "react";
import Image from "next/image";

const Courses = () => {
  const courseCategories = [
    {
      title: "Global Curriculum: IB Programmes",
      description:
        "For international students aiming for top university placements",
      courses: [
        {
          name: "IB Economics HL/SL – Full 2-Year Programme",
          link: "/courses/ib-economics",
          image: "/images/courses/ib-economics.jpg",
          description:
            "Master IB Economics with in-depth 2-year coverage of micro, macro, and global economics.",
        },
        {
          name: "IB Business Management HL/SL – Full 2-Year Programme",
          link: "/courses/ib-business",
          image: "/images/courses/ib-business.jpg",
          description:
            "Explore core business strategies across HR, finance, ethics, and global enterprises.",
        },
        {
          name: "IA, EE & TOK Support Workshops",
          link: "/courses/ib-support",
          image: "/images/courses/ib-support.jpg",
          description:
            "Focused workshops to ace Internal Assessments, Extended Essay & Theory of Knowledge.",
        },
        {
          name: "IB 1-Year Booster Programme",
          link: "/courses/ib-booster",
          image: "/images/courses/ib-booster.jpg",
          description:
            "A fast-track program for students switching subjects or catching up on IB curriculum.",
        },
      ],
    },
    {
      title: "National Boards Excellence (India)",
      description: "Mastering Indian Board Exams with Conceptual Clarity",
      courses: [
        {
          name: "CBSE Class 11 & 12: Business Studies",
          link: "/courses/cbse-business",
          image: "/images/courses/cbse-business.jpg",
          description:
            "Comprehensive coverage of CBSE Business Studies with real-life case examples.",
        },
        {
          name: "CBSE Class 11 & 12: Economics",
          link: "/courses/cbse-economics",
          image: "/images/courses/cbse-economics.jpg",
          description:
            "Strong fundamentals in macro & microeconomics tailored to board exam success.",
        },
        {
          name: "ICSE Class 11 & 12: Business Studies",
          link: "/courses/icse-business",
          image: "/images/courses/icse-business.jpg",
          description:
            "Interactive and conceptual learning for ICSE board business studies.",
        },
        {
          name: "ICSE Class 11 & 12: Economics",
          link: "/courses/icse-economics",
          image: "/images/courses/icse-economics.jpg",
          description:
            "ICSE Economics clarified with structured examples and simplified breakdowns.",
        },
        {
          name: "CBSE/ICSE Board Exam Crash Courses (Nov–Feb)",
          link: "/courses/board-crash-course",
          image: "/images/courses/crash-course.jpg",
          description:
            "Board-focused revision batches for last-minute confidence and scoring edge.",
        },
      ],
    },
    {
      title: "University Prep & Career Edge",
      description:
        "Undergraduate-level mastery for future finance & management professionals",
      courses: [
        {
          name: "Financial Management – B.Com/BBA",
          link: "/courses/financial-management",
          image: "/images/courses/sy-finance.jpg",
          description:
            "Excel in FM, capital budgeting, ratio analysis and working capital strategies.",
        },
        {
          name: "Business Management – B.Com/BBA",
          link: "/courses/bba-management",
          image: "/images/courses/ty-finance.jpg",
          description:
            "Understand key management principles and their practical applications.",
        },
        {
          name: "Accounting Principles & Applications",
          link: "/courses/accounting",
          image: "/images/courses/fy-finance.jpg",
          description:
            "Develop a foundation in accounting with real-world transactions & ledgers.",
        },
        {
          name: "Business Economics – Undergraduate",
          link: "/courses/ug-economics",
          image: "/images/courses/ug-economics.jpg",
          description:
            "Micro and macroeconomic analysis adapted for undergraduate-level learners.",
        },
        {
          name: "Research & Project Support (Final Year UG)",
          link: "/courses/ug-projects",
          image: "/images/courses/research-support.jpg",
          description:
            "Guidance for final year thesis, research writing and presentations.",
        },
      ],
    },
    {
      title: "Global English Proficiency",
      description: "Fast-track international test prep for study/work abroad",
      courses: [
        {
          name: "IELTS Fast-Track Prep (Academic & General)",
          link: "/courses/ielts",
          image: "/images/courses/ielts.jpg",
          description:
            "Targeted training in listening, reading, writing & speaking for high band scores.",
        },
        {
          name: "PTE Exam Accelerator Course",
          link: "/courses/pte",
          image: "/images/courses/pte.jpg",
          description:
            "AI-evaluated test simulations & strategies to crack the PTE exam fast.",
        },
        {
          name: "SAT English (Reading + Writing)",
          link: "/courses/sat-english",
          image: "/images/courses/sat.jpg",
          description:
            "SAT verbal reasoning and grammar foundation for strong college readiness.",
        },
      ],
    },
  ];

  return (
    <>
      <div className="parent allcources ">
        <div className="container flex-col flex items-center justify-center gap-2 min-h-[100dvh]">
          <h2
            className="h1 heading text-[var(--accent2)]  my-[80px]"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {" "}
            Our Courses
          </h2>

          {courseCategories.map((item, index) => {
            return (
              <div
                className="section courceSection w-full mb-10"
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index + 2) * 100}
              >
                <h2 className="h2 heading mb-2">{item.title}</h2>
                <p className="mb-[16px]">{item.description}</p>
                <div className="w-full rounded-2xl h-[5px]  grad "></div>

                <div className="w-[100%] flex flex-wrap p-4 ">
                  <div className="flex items-center justify-center  mt-8 flex-wrap gap-8">
                    {item.courses.map((item, index) => {
                      return (
                        <div
                          className="card"
                          key={index}
                          data-aos="fade-up"
                          data-aos-delay={(index + 2) * 10}
                        >
                          <div className="flex flex-col gap-4">
                            <Image
                              className="rounded-md w-[100%]"
                              src="/course.jpg"
                              width={300}
                              height={200}
                              alt="logo"
                            />

                            <h3 className="heading text-xl text-left w-full">
                              {item.name}
                            </h3>
                            <p className="text-sm opacity-80">
                              {item.description.slice(0, 130)}..
                            </p>
                          </div>

                          <div className="flex gap-4 w-full">
                            <Link href="/pricing" className="btn w-full tc">
                              Enroll Now
                            </Link>
                            
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;
