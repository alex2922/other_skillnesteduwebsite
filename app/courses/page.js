import Link from "next/link";
import React from "react";
import Image from "next/image";

const Courses = () => {
  const Data = [
    {
      name: "Course1",
      link: "/courses/course1",
    },
    {
      name: "Course2",
      link: "/courses/course2",
    },
    {
      name: "Course3",
      link: "/courses/course3",
    },
  ];

  return (
    <>
      <div className="parent bg ">
        <div className="container flex-col flex items-center justify-center gap-2 min-h-[100dvh]">
          <h2 className="h1 heading" data-aos="fade-up" data-aos-delay={ 100}> Our Courses</h2>

          <div className="flex items-center  mt-8 flex-wrap gap-8">
            {Data.map((item, index) => {
              return (
                <div className="card" key={index} data-aos="fade-up" data-aos-delay={ ( index  + 2)* 100}>
                  <Image className="rounded-md w-[100%]" src="/course.jpg" width={300} height={200} alt="logo" />

                  <h3 className="heading text-2xl text-left w-full">{item.name}</h3>
                  <p className="text-sm opacity-80">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste laboriosam optio autem odio blanditiis, voluptatibus incidunt voluptate repudiandae atque culpa, nihil aliquam consequuntur quis tenetur, rerum accusamus excepturi distinctio porro?
                  </p>

                 <div className="flex gap-4">
                 <Link href={item.link} key={index} className="btn">
                    Know More
                  </Link>
                  <Link href={item.link} key={index} className="btn2">
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
