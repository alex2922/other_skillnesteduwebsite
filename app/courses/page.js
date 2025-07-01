import Link from "next/link";
import React from "react";
import Image from "next/image";

const Courses = () => {

  const Data = [
    {
      name: "IB Economics (SL/HL)",
      link: "/courses/test",
      description:
        "Master key economic concepts across micro and macro with real-world applications using the IB framework.",
      image: "/images/courses/ib-economics.jpg",
    },
    {
      name: "CBSE Economics (Class 11/12)",
        link: "/courses/test",
      description:
        "From basic economic problems to national income and trade—CBSE Economics simplified for boards.",
      image: "/images/courses/cbse-economics.jpg",
    },
    {
      name: "IB Business Management (SL/HL)",
         link: "/courses/test",
      description:
        "A strategic approach to business concepts—marketing, operations, HR, finance, and ethics for future leaders.",
      image: "/images/courses/ib-business.jpg",
    },
    {
      name: "CBSE Business Studies (Class 11/12)",
       link: "/courses/test",
      description:
        "Build a strong foundation in business principles—from organization types to marketing, finance, and HR.",
      image: "/images/courses/cbse-business.jpg",
    },
    {
      name: "B.Com & BAF First Year",
          link: "/courses/test",
      description:
        "Start your commerce journey with core concepts in accounting, costing, economics, and communication.",
      image: "/images/courses/fy-finance.jpg",
    },
    {
      name: "B.Com & BAF Second Year",
          link: "/courses/test",
      description:
        "Advance to financial management, ratio analysis, working capital and fintech innovations in India.",
      image: "/images/courses/sy-finance.jpg",
    },
    {
      name: "B.Com & BFM Final Year",
      link: "/courses/test",
      description:
        "Master investment analysis, capital budgeting, derivatives, and portfolio management for real-world finance.",
      image: "/images/courses/ty-finance.jpg",
    },
  ];



  return (
    <>
      <div className="parent bg allcources ">
        <div className="container flex-col flex items-center justify-center gap-2 min-h-[100dvh]">
          <h2 className="h1 heading mt-[80px]" data-aos="fade-up" data-aos-delay={100}> Our Courses</h2>

          <div className="flex items-center justify-center  mt-8 flex-wrap gap-8">
            {Data.map((item, index) => {
              return (
                <div className="card" key={index} data-aos="fade-up" data-aos-delay={(index + 2) * 10}>
                 <div className="flex flex-col gap-4">
                   <Image className="rounded-md w-[100%]" src="/course.jpg" width={300} height={200} alt="logo" />

                  <h3 className="heading text-xl text-left w-full">{item.name}</h3>
                  <p className="text-sm opacity-80">
                    {item.description.slice(0,130)}..
                  </p>
                 </div>

                  <div className="flex gap-4">
                    <Link href={item.link}  className="btn">
                      Know More
                    </Link>
                    <Link href={item.link}  className="btn2">
                      Know More
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
