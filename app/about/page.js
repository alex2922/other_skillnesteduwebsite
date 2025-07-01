import Image from "next/image";
import Link from "next/link";
import React from "react";

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
              src="/course.jpg"
              width={500}
              height={500}
              alt="about"
              className="rounded-full rounded-tr-none "
            />
          </div>
        </div>
      </div>

      <div className="parent mt-[-50px]">
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


      <div className="parent">
        <div className="container">

        </div>
      </div>
    </>
  );
};

export default about;
