"use client";
import React from "react";
import { IoIosCheckmarkCircle, IoIosCloseCircle } from "react-icons/io";
import { IoMdTime } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";

const Pricing = () => {
  const ibPrograms = [
    {
      name: "IB Module 1",
      duration: "11 months",
      price: "₹49,000",
      pointer: [
        "Foundation concepts",
        "Expert guidance",
        "Study resources",
        "Video lectures",
        "Study resources",
      ],
    },
    {
      name: "IB Module 2",
      duration: "12 months",
      price: "₹56,000",
      pointer: [
        "Foundation concepts",
        "Expert guidance",
        "Study resources",
        "Video lectures",
        "Study resources",
      ],
    },
    {
      name: "IB Full Course",
      duration: "2 years",
      price: "₹95,000",
      pointer: [
        "Foundation concepts",
        "Expert guidance",
        "Study resources",
        "Video lectures",
        "Study resources",
      ],
    },
  ];


  const courses = [
    {
      category: "IB",
      course: "IB1 (Year 1)",
      inclusions: ["Live", "Recorded", "IA/EE Support", "Mocks"],
      price: "₹49,000",
      duration: "11 months",
    },
    {
      category: "IB",
      course: "IB2 (Year 2)",
      inclusions: ["Live", "Recorded", "IA/EE Support", "Mocks"],
      price: "₹56,000",
      duration: "12 months",
    },
    {
      category: "IB",
      course: "Full IB Pack (IB1 + IB2)",
      inclusions: ["Live", "Recorded", "IA/EE Support", "Parent Reports"],
      price: "₹95,000",
      duration: "24 months",
    },
    {
      category: "CBSE",
      course: "Class 11 Economics/BS",
      inclusions: ["Recorded", "Tests", "Mentor Support", "Doubt Sessions"],
      price: "₹18,000",
      duration: "10 months",
    },
    {
      category: "CBSE",
      course: "Class 12 Economics/BS",
      inclusions: ["Recorded", "Mocks", "Exam Prep", "Doubt Sessions"],
      price: "₹20,000",
      duration: "10 months",
    },
    {
      category: "ICSE",
      course: "Class 11 Economics/BS",
      inclusions: ["Recorded", "Concept Videos", "Support", "Tests"],
      price: "₹18,000",
      duration: "10 months",
    },
    {
      category: "ICSE",
      course: "Class 12 Economics/BS",
      inclusions: ["Recorded", "Exam Practice", "Mocks", "Doubt Sessions"],
      price: "₹20,000",
      duration: "10 months",
    },
    {
      category: "IELTS/PTE",
      course: "Fast Track (4 Weeks)",
      inclusions: ["Live", "Practice Tests", "Grammar Pack", "Speaking Sessions"],
      price: "₹8,000",
      duration: "1 month",
    },
    {
      category: "IELTS/PTE",
      course: "Full Prep (8 Weeks)",
      inclusions: ["Live", "Doubts", "Speaking Review", "Writing Review"],
      price: "₹12,000",
      duration: "2 months",
    },
    {
      category: "BBA/B.Com/BFA",
      course: "Semester-wise Subject Pack",
      inclusions: ["Recorded", "Practice", "Assignments", "Doubt Support"],
      price: "₹9,000",
      duration: "5 months",
    },
    {
      category: "BBA/B.Com/BFA",
      course: "Full Year (2 Semesters)",
      inclusions: ["Recorded", "Mentoring", "Numericals", "Doubt Support"],
      price: "₹16,000",
      duration: "10 months",
    },
    {
      category: "BBA/B.Com/BFA",
      course: "3-Year Combo Pack",
      inclusions: ["Full Recorded", "Mentor Access", "Test Series", "Revision Modules"],
      price: "₹39,000",
      duration: "30 months",
    },
  ];
  


  const tableData = [
    {
      provider: "Self-Learning PDFs",
      "Live or Recorded Classes": false,
      "Mentor Support": false,
      "Practice Tests": false,
      "Mock Reviews": false,
      "Parent Feedback": false,
      "Progress Tracking": false,
      "Test Series": false,
      "Personalized Help": false,
    },
    {
      provider: "App-Based Course",
      "Live or Recorded Classes": true,
      "Mentor Support": false,
      "Practice Tests": true,
      "Mock Reviews": false,
      "Parent Feedback": false,
      "Progress Tracking": false,
      "Test Series": false,
      "Personalized Help": false,
    },
    {
      provider: "Typical Tuition",
      "Live or Recorded Classes": true,
      "Mentor Support": false,
      "Practice Tests": true,
      "Mock Reviews": false,
      "Parent Feedback": false,
      "Progress Tracking": false,
      "Test Series": true,
      "Personalized Help": false,
    },
    {
      provider: "SkillNestEdu",
      "Live or Recorded Classes": true,
      "Mentor Support": true,
      "Practice Tests": true,
      "Mock Reviews": true,
      "Parent Feedback": true,
      "Progress Tracking": true,
      "Test Series": true,
      "Personalized Help": true,
    },
  ];

  const features = [
    "Live or Recorded Classes",
    "Mentor Support",
    "Practice Tests",
    "Mock Reviews",
    "Parent Feedback",
    "Progress Tracking",
    "Test Series",
    "Personalized Help",
  ];

  return (
    <>
      <div className="parent py-[50px] pt-[100px] bg page">
        <div className="container flex flex-col gap-4 items-center justify-center">
          <h2 className="heading h2 tc" data-aos="fade-up" data-aos-delay={0}>
            IB Programs — <span>Designed for Global Excellence</span>
          </h2>
          <p className="tc mb-8" data-aos="fade-up" data-aos-delay={100}>
            Achieve more with structured support, top-tier mentoring, and
            IB-specific resources.
          </p>

          <div className="flex flex-wrap gap-4 items-center justify-center">
            {ibPrograms.map((item, index) => {
              return (
                <div
                  className="flex flex-col min-w-[300px] md:w-[320px] gap-2 items-start border p-4  border-[var(--accent2)]/30 shadow-2xl rounded-xl bg-white w-full "
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={(index + 2) * 100}
                >
                  <h3 className="heading h2 text-left w-full ">{item.name}</h3>
                  <p className="flex items-center gap-1 my-[-10px] ">
                    {" "}
                    <span className="fc">
                      <IoMdTime />
                    </span>{" "}
                    {item.duration}
                  </p>
                  <h3 className="heading h2 text-[var(--accent2)]">
                    {item.price}
                  </h3>

                  <div className="flex flex-col gap-2 my-8">
                    {item.pointer.map((pointer, index) => {
                      return (
                        <p key={index} className="flex items-center gap-2">
                          {" "}
                          <span className="fc text-[var(--accent1)]">
                            <IoIosCheckmarkCircle />
                          </span>{" "}
                          {pointer}
                        </p>
                      );
                    })}
                  </div>

                  <button className="btn w-full">Enquire Now</button>
                </div>
              );
            })}
          </div>

          <div
            className=" flex flex-col gap-2 w-full max-w-[990px] mx-auto bg-white/70  border border-[var(--accent2)] p-4 shadow-2xl rounded-xl"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <p className="flex items-center gap-2">
              <span className="fc text-[var(--accent1)]">
                <IoIosCheckmarkCircle />
              </span>{" "}
              EMI Available
            </p>
            <p className="flex items-center gap-2">
              <span className="fc text-[var(--accent1)]">
                <IoIosCheckmarkCircle />
              </span>
              Batch starts:1st August 2025
            </p>
            <p className="flex items-center gap-2">
              <span className="fc text-[var(--accent1)]">
                <IoIosCheckmarkCircle />
              </span>
              Bonuses till July 10 : IA/EE review, mock support, parent reports
            </p>
          </div>
        </div>
      </div>

      <div className="parent py-[50px] bg-black/0 page">
        <div className="container">
          <h2 className="heading h2 tc" data-aos="fade-up" data-aos-delay={0}>
          Tailored <span>Learning</span>, Transparent <span>Pricing</span>
          </h2>
          <p className="tc mb-8" data-aos="fade-up" data-aos-delay={100}>
          Choose your academic journey — we’ve got the right course and plan for you.
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
            // centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
          >
            {courses.map((item, index) => (
              <SwiperSlide key={index} className="h-full pb-[20px]">
                <div className="card w-full h-full max-w-[400px] mx-auto bg-white rounded-xl p-4 shadow-lg border border-[var(--accent2)]/30 flex flex-col justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-left text-extrabold  bg-[var(--accent2)]/10 px-4 py-1 border border-[var(--accent2)] rounded-2xl w-fit !text-[var(--accent2)]">
                        {item.category}
                      </p>

                      <p className="text-xs text-left text-extrabold  bg-[var(--accent1)]/10 px-3 py-1 border border-[var(--accent1)] rounded-2xl w-fit !text-[var(--accent1)] flex items-center gap-1 capitalize">
                        <IoMdTime className="text-[var(--accent1)]" />
                        {item.duration}
                      </p>
                    </div>

                    <h3 className="heading text-[28px] text-left">{item.course}</h3>

                    <h3 className="heading h2 text-left text-[var(--accent1)]">
                      {item.price}
                    </h3>

                    <div className="flex flex-col gap-2 my-8">
                      {item.inclusions.map((point, idx) => (
                        <p
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <IoIosCheckmarkCircle className="text-[var(--accent2)]" />
                          {point}
                        </p>
                      ))}
                    </div>
                  </div>

                  <button className="btn w-full mt-6">Enquire Now</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="parent py-[100px]   bg-black/2">
        <div className="container">
          <h2 className="heading h2 tc" data-aos="fade-up" data-aos-delay={0}>
            Why <span>Choose SkillNestEdu</span>{" "}
          </h2>
          <p className="tc mb-8" data-aos="fade-up" data-aos-delay={100}>
            SkillnestEdu Value Comparision - All Course Categories
          </p>

          <div className="overflow-x-auto overflow-y-hidden">
            <table className="w-full border-collapse bg-white shadow-lg rounded-lg" data-aos="fade-up" data-aos-delay={200}  >
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left font-semibold text-gray-700">
                    Features
                  </th>
                  {tableData.map((item, index) => (
                    <th
                      key={index}
                      className={`border border-gray-300 p-3 text-center font-semibold ${
                        item.provider === "SkillNestEdu"
                          ? "bg-blue-50 text-blue-700"
                          : "text-gray-700"
                      }`}
                    >
                      {item.provider}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {features.map((feature, featureIndex) => (
                  <tr key={featureIndex} className="hover:bg-gray-50">
                    <td className="border border-gray-300 p-3 font-medium text-gray-700">
                      {feature}
                    </td>
                    {tableData.map((item, itemIndex) => (
                      <td
                        key={itemIndex}
                        className={`border border-gray-300 p-3 text-center ${
                          item.provider === "SkillNestEdu" ? "bg-blue-50" : ""
                        }`}
                      >
                        {item[feature] ? (
                          <IoIosCheckmarkCircle className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <IoIosCloseCircle className="w-5 h-5 text-red-600 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="parent bgdark py-[100px]">
        <div className="container text-center text-white" data-aos="fade-up" data-aos-delay={200}>
          <h2 className="h2 heading mb-6">Ready to Begin Your Learning Journey?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg !text-white/70">
            Whether you&apos;re aiming for top band scores in IELTS or looking to master business and finance,
            I&apos;m here to help you unlock your full potential. Let&apos;s connect and make your goals a reality.
          </p>
          <Link href="/contact" className="btn bg-white text-black hover:bg-gray-200 transition-all">
            Get in Touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Pricing;
