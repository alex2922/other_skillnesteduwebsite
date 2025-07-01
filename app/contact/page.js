

import Link from 'next/link';


const page = () => {
 

  return (
    <div className="parent bg min-h-screen py-[100px]">
      <div className="container flex flex-col gap-4 items-center justify-center">
        <h2 className="h2 heading mb-6 tc" data-aos="fade-up" data-aos-delay="0">
          Reach Out to <span>SkillNestEdu</span>
        </h2>

        <p className="tc w-max-[400px]" data-aos="fade-up" data-aos-delay="100">
          Have a question about our courses, faculty, or learning model? We’re just a message away.
          Our team is happy to support you on your educational journey.
        </p>

        <div
          className="w-[100%] mt-4 max-w-[500px] mx-auto bg-black/4 border border-white/80 p-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form action="#" className="flex flex-col gap-4">
            <input type="text" placeholder="Your Name" data-aos="fade-up" data-aos-delay="300" />
            <input type="email" placeholder="Your Email" data-aos="fade-up" data-aos-delay="400" />
            <input type="text" placeholder="Subject" data-aos="fade-up" data-aos-delay="500" />
            <textarea placeholder="Your Message" data-aos="fade-up" data-aos-delay="600"></textarea>
            <button type="submit" className="btn" data-aos="fade-up" data-aos-delay="700">
              Send Message
            </button>
          </form>
        </div>

        <div className="flex flex-col gap-4" data-aos="fade-up" data-aos-delay="800">
          <p className="tc">Or, you can email us at</p>
          <Link
            className="w-fit btn"
            href="mailto:eduskillnest@gmail.com"
            target="_blank"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            eduskillnest@gmail.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
