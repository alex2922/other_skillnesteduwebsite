"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import Courses from "./courses/page";

export default function Home() {
  const Data = [
    {
      name: "IB Economics (SL/HL)",
      link: "/courses/ib-economics",
      description:
        "Master key economic concepts across micro and macro with real-world applications using the IB framework.",
      image: "/images/courses/ib-economics.jpg",
    },
    {
      name: "CBSE Economics (Class 11/12)",
      link: "/courses/cbse-economics",
      description:
        "From basic economic problems to national income and trade—CBSE Economics simplified for boards.",
      image: "/images/courses/cbse-economics.jpg",
    },
    {
      name: "IB Business Management (SL/HL)",
      link: "/courses/ib-business",
      description:
        "A strategic approach to business concepts—marketing, operations, HR, finance, and ethics for future leaders.",
      image: "/images/courses/ib-business.jpg",
    },
    {
      name: "CBSE Business Studies (Class 11/12)",
      link: "/courses/cbse-business",
      description:
        "Build a strong foundation in business principles—from organization types to marketing, finance, and HR.",
      image: "/images/courses/cbse-business.jpg",
    },
    {
      name: "B.Com & BAF First Year",
      link: "/courses/fy-finance",
      description:
        "Start your commerce journey with core concepts in accounting, costing, economics, and communication.",
      image: "/images/courses/fy-finance.jpg",
    },
    {
      name: "B.Com & BAF Second Year",
      link: "/courses/sy-finance",
      description:
        "Advance to financial management, ratio analysis, working capital and fintech innovations in India.",
      image: "/images/courses/sy-finance.jpg",
    },
    {
      name: "B.Com & BFM Final Year",
      link: "/courses/ty-finance",
      description:
        "Master investment analysis, capital budgeting, derivatives, and portfolio management for real-world finance.",
      image: "/images/courses/ty-finance.jpg",
    },
  ];

  const testimonials = [
    {
      name: "Aditi Verma",
      role: "B.Com Student",
      location: "Jabalpur",
      message:
        "I studied Finance under Anamika Ma’am during my B.Com, and her clarity and examples made complex topics feel simple. She built my foundation in Finance, and I still apply her lessons today. I’m excited to see her bring this same teaching quality to her upcoming platform, SkillNestEdu.",
    },
    {
      name: "Rahul Tiwari",
      role: "BBA Student",
      location: "Jabalpur",
      message:
        "Finance used to overwhelm me until I joined Ma’am’s classes. Her way of teaching was practical and encouraging—I scored 79%! I’m so glad more students will now benefit from her expertise once SkillNestEdu launches.",
    },
    {
      name: "Sneha Dubey",
      role: "B.Com Student",
      location: "Jabalpur",
      message:
        "Anamika Ma’am’s classes helped me truly understand financial statements and working capital. She made sure every doubt was cleared. I look forward to seeing her new venture, SkillNestEdu, impact students the same way it did me.",
    },
    {
      name: "Shibu Thomas",
      role: "B.Com Batchmate & Learner",
      location: "",
      message:
        "Even as a fellow student, Anamika had the gift of teaching. She helped me through Accounts with patience and clarity. It’s no surprise she’s building SkillNestEdu—I’ve seen her passion for teaching from the very beginning.",
    },
    {
      name: "Megha Sachdeva",
      role: "B.Com Student",
      location: "",
      message:
        "Anamika guided me through 1st-year Accounts when I was just starting out. She made every concept feel doable and boosted my confidence. Her upcoming platform SkillNestEdu will be a blessing for students who need that same support.",
    },
    {
      name: "Lizzy",
      role: "Kumon Student",
      location: "UK",
      message:
        "Miss Anamika made Maths and English feel fun and easy. I got into my private school thanks to her help! I’m so happy other kids will soon get the same guidance through SkillNestEdu.",
    },
    {
      name: "Varsha",
      role: "Parent",
      location: "Kumon, UK",
      message:
        "Anamika saw the brilliance in my son before anyone else did. Her guidance at Kumon helped him shine, and I know SkillNestEdu will reflect the same incredible insight and care she offers every learner.",
    },
    {
      name: "Deepika Khare",
      role: "Faculty, HOD",
      location: "JCCC",
      message:
        "As HOD at JCCC, Anamika Ma’am brought clarity, creativity, and vision to our department. Her student-first approach was inspiring. SkillNestEdu will be an extension of that excellence—it’s something to look forward to.",
    },
    {
      name: "Naveen Basu",
      role: "English Faculty",
      location: "RIMT College",
      message:
        "Anamika was not only a brilliant educator at RIMT but a dependable and collaborative colleague. Her upcoming initiative, SkillNestEdu, is bound to reflect her teaching excellence and dedication.",
    },
    {
      name: "Sheena Stanger",
      role: "Accounting Assessor",
      location: "Yorkshire Coast College, UK",
      message:
        "Anamika was a highly competent Accounting Assessor at Yorkshire Coast College. Her professionalism and learner-centric approach stood out. I’m confident SkillNestEdu will carry forward that same international standard of quality.",
    },
  ];

  return (
    <>
      <div className="parent bg py-[100px] h-[600px]">
        <div className="container fc flex-col tc gap-4">
          <h1 className="heading h1" data-aos="fade-up">
            From Board Exams to Global Passport —
            <span>Master Skills Like a Pro</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay={100}>
            Empowering students through facilitation, not lectures. Learn using
            our signature IMPACT method, built on 22+ years of international
            teaching excellence.
          </p>

          <Link
            href="/courses"
            className="btn"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Explore Courses
          </Link>
        </div>
      </div>

      <div className="parent  wbg py-[100px] min-h-[600px] about-section">
        <div className=" about-section-container container flex items-center tc gap-2  ">
          <div className="left flex flex-col gap-3 items-start justify-center ">
            <h2 className="h2 heading" data-aos="fade-up" data-aos-delay={50}>
              Meet <span>Anamika Pachauri</span>
            </h2>
            <div className="si" data-aos="fade-up" data-aos-delay={200}>
              Educator. Mentor. Visionary.
            </div>
            <p className=" text-left" data-aos="fade-up" data-aos-delay={400}>
              With two decades of experience teaching across India and the UK,
              Anamika is a gold medalist (B.Com), MBA topper, and British
              Council-certified IELTS trainer. She’s helped 5,000+ students find
              clarity and confidence in Finance, Economics, and Business — and
              now she’s bringing that magic to SkillNestEdu.
            </p>

            <Link
              href="/about"
              className="btn mt-4"
              data-aos="fade-up"
              data-aos-delay={600}
            >
              Know More
            </Link>
          </div>
          <div className="right fc" data-aos="fade-up" data-aos-delay={0}>
            <Image
              src="/dp.webp"
              width={300}
              height={300}
              alt="about"
              className="rounded-full  rounded-tr-none "
            />
          </div>
        </div>
      </div>

      <div className="parent bg h-[700px] course-home">
        <div className="container py-[100px] flex flex-col gap-8 items-center justify-center">
          <h2
            className="h2 heading mt-[70px]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Our <span>Courses</span>
          </h2>

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
            {Data.map((item, index) => (
              <SwiperSlide key={index}>
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

                  <div className="flex gap-4">
                    <Link href={item.link} className="btn">
                      Know More
                    </Link>
                    <Link href={item.link} className="btn2">
                      Know More
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Link
            href={"/courses"}
            className="btn"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Explore All Courses
          </Link>
        </div>
      </div>


<div className="parent">
  <div className="container">
    <h2
            className="h2 heading mt-[70px]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Why Choose <span>SkillNestEdu</span>
          </h2>
  </div>
</div>








      <div className="parent wbg py-[100px]">
        <div className="container flex flex-col gap-4 items-center justify-center">
          <h2
            className="h2 heading mt-[70px]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Tools and <span>Resources</span>
          </h2>

          <div className="flex gap-4 w-full flex-wrap md:flex-nowrap">
            <Link
              href={
                "https://chatgpt.com/g/g-6860fda44a80819189f9a4b39866d218-skillnest-student-buddy"
              }
              target="_blank"
              className="fc px-4 py-8 rounded-md bgg w-full "
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="tc !text-white">👪 Talk to Our IB Parent Guide</p>
            </Link>

            <div
              href={
                "https://chatgpt.com/g/g-6860ff37eec88191987ef0b15f0b29e1-skillnest-parent-guide"
              }
              target="_blank"
              className="fc px-4 py-8 rounded-md bgg  w-full "
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p className="tc !text-white">
                🧑‍🏫 Explore the SkillNest Faculty Companion
              </p>
            </div>

            <div
              href={
                "https://chatgpt.com/g/g-685fea7692b481919bd1797179b66613-skillnestgpt-teacher-edition"
              }
              target="_blank"
              className="fc px-4 py-8 rounded-md bgg   w-full "
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <p className="tc !text-white">
                💡 Chat with Our IB Student Study Buddy
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="parent bg py-[100px]">
        <div className="container flex flex-col gap-4 items-center justify-center">
          <h2
            className="h2 heading mt-[70px]"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <span>Real</span> Stories. <span>Real</span> Impact.
          </h2>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
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
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial flex flex-col gap-4 items-center justify-center bg-white p-4 shadow-xl rounded-2xl">
                  <p className="tc"> {item.message}</p>
                  <div className="flex flex-col items-center justify-center gap-1">
                    <h3 className="heading">{item.name}</h3>
                    <span className="text-xs opacity-80">
                      {item.role} {item.location && "-"} {item.location}{" "}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="parent bgdark py-[100px] home ">
        <div
          className="container text-center text-white"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          <h2 className="h2 heading mb-6">
            Next-gen learning starts now , don&apos;t miss the wave!
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-lg !text-white/70">
            SkillNestEdu isn&apos;t just another online course—it&apos;s a new
            era of learning built on insight, innovation, and intention. Be part
            of the future of smart, student-first education.
          </p>
          <Link
            href="/contact"
            className="btn bg-white text-black hover:bg-gray-200 transition-all"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </>
  );
}
