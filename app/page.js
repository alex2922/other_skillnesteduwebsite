import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="parent bg py-[100px] h-[600px]">
        <div className="container fc flex-col tc gap-4">
          <h1 className="heading h1" data-aos="fade-up">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
            <span>Nulla, dolorum!</span>
          </h1>

          <p data-aos="fade-up" data-aos-delay={100}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
            minus eveniet reiciendis fugit labore quam, accusamus modi magnam,
            quod debitis similique sapiente numquam eligendi iste ex voluptate
            est quae repudiandae.
          </p>

          <Link
            href="/about"
            className="btn"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            Explore Courses
          </Link>
        </div>
      </div>

      <div className="parent  py-[100px] min-h-[600px] about-section">
        <div className=" about-section-container container flex items-center tc gap-2  ">
          <div className="left flex flex-col gap-3 items-start justify-center ">
            <h2 className="h2 heading" data-aos="fade-up" data-aos-delay={50}>
              Meet Anamika Pachauri
            </h2>
            <div className="si" data-aos="fade-up" data-aos-delay={200}>
              Educator. Mentor. Visionary.
            </div>
            <p
              className=" text-left"
              data-aos="fade-up"
              data-aos-delay={400}
            >
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
              Know More About Us
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




      
    </>
  );
}
