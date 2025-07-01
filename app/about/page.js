"use client";

import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaCertificate,
  FaProjectDiagram,
  FaLaptopCode,
  FaSchool,
  FaSyncAlt,
} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";

const about = () => {
  const data = [
    {
      logo: "/a1.svg",
      name: "IELTS Trainer Masterclass",
      desc: "British Council, 2022",
    },
    {
      logo: "/a2.svg",
      name: "Assessor Certificate",
      desc: "OCR, UK, 2005",
    },
    {
      logo: "/a3.svg",
      name: "Certificate in Delivering Learning",
      desc: "City & Guilds, UK, 2006",
    },
    {
      logo: "/a4.svg",
      name: "Global Career Counsellor",
      desc: "Univariety, 2019",
    },
  ];

  const achievements = [
    {
      title:
        "Helped shape minds for over 22 years across higher education, with significant experience teaching in the United Kingdom and India.",
      icon: FaChalkboardTeacher,
    },
    {
      title:
        "Not just a teacher, but a gold medalist in B.Com and a topper in all MBA semesters – proof that I live and breathe learning!",
      icon: FaUserGraduate,
    },
    {
      title:
        "British Council certified IELTS trainer for four years, mastering the art of strategic band score achievement.",
      icon: FaCertificate,
    },
    {
      title:
        "Successfully mentored students and guided them in dissertations, projects, and portfolio development.",
      icon: FaProjectDiagram,
    },
    {
      title:
        "Pioneered online learning strategies, assessments, and personalized feedback to nail IELTS requirements.",
      icon: FaLaptopCode,
    },
    {
      title:
        "Successfully launched and operated a Kumon center in the UK, nurturing foundational English and Math skills.",
      icon: FaSchool,
    },
    {
      title:
        "A true believer in continuous improvement, consistently integrating student feedback to refine teaching methods.",
      icon: FaSyncAlt,
    },
  ];

  return (
    <>
      <div className="parent bg  py-[100px] min-h-[600px] about-page-section1">
        <div className=" about-page-section1-container container flex items-center tc gap-2  ">
          <div className="left flex flex-col gap-3 items-start justify-center ">
            <div className="si" data-aos="fade-up" data-aos-delay={50}>
              meet your tutor
            </div>
            <h2 className="h2 heading" data-aos="fade-up" data-aos-delay={200}>
              Meet Anamika Pachauri
            </h2>

            <p
              className="text-left  text-xl sf my-4"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Have you ever stopped to consider what truly lights up a mind?
              What sparks that deep, lasting understanding?
            </p>

            <p className=" text-left" data-aos="fade-up" data-aos-delay={600}>
              I’m Anamika, and for over two decades, I’ve had the profound
              privilege of shaping minds across both the UK and India. My real
              passion? It’s igniting that spark of understanding in others! I’m
              a proud gold medalist from my B.Com and topped my MBA semesters,
              proving that learning isn’t just my profession, it’s my absolute
              obsession. I specialise in making subjects like Finance and
              Economics genuinely click for higher education students. Beyond
              teaching, I’ve also had the privilege of mentoring students,
              guiding them through dissertations and projects, and developing
              portfolios. As a British Council-certified IELTS trainer, I love
              helping people unlock their global potential. Whether it’s online
              or in person, my mission is to make learning an engaging and
              impactful adventure.
            </p>

            <Link
              href="/about"
              className="btn mt-4"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              Know More About Us
            </Link>
          </div>
          <div className="right fc" data-aos="fade-up" data-aos-delay={0}>
            <Image
              src="/dp.webp"
              width={500}
              height={500}
              alt="about"
              className="rounded-full rounded-tr-none "
            />
          </div>
        </div>
      </div>

      <div className="parent mt-[-50px]" data-aos="fade-up" data-aos-delay={200}>
        <div className="container ">
          <div className="awwards flex bg-white w-full py-4 px-2 shadow-2xl gap-4 rounded-2xl flex-wrap">
            {data.map((item, index) => (
              <div className="flex items-center gap-4 px-2 awards" key={index}>
                <Image src={item.logo} alt={item.name} height={80} width={80} />
                <div className="flex flex-col ">
                  <h3 className="heading">{item.name}</h3>
                  <p className="text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="parent about-page-swiper">
        <div className="container py-[100px]">

          <h2 className="h2 heading mt-[70px]" data-aos="fade-up" data-aos-delay={200}>
            Achievements
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

            {achievements.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slide" data-aos="fade-up" data-aos-delay={index * 100} >
                  <div className="icon">
                    <item.icon />
                  </div>
                  <p className="text-center">{item.title}</p>


                </div>
              </SwiperSlide>
            ))}
          </Swiper>
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

export default about;
