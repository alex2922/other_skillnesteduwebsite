"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";

const Header = () => {
  const navData = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Courses", link: "/courses" },
    { name: "Pricing", link: "/pricing" },

    { name: "Contact Us", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="parent header" data-aos="fade-down">
        <div className="container flex items-center justify-between">
          <div className="flex items-center gap-2" data-aos="fade-down">
            <Image src="/logo.svg" width={50} height={50} alt="logo" />
            <p className="text-xl font-bold">SkillNestEdu</p>
          </div>

          <div className="sm:flex items-center gap-4 links hidden">
            {navData.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  key={index}
                  data-aos="fade-down"
                  data-aos-delay={index * 100}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <span onClick={() => setOpen(!open)} className="sm:hidden text-2xl">
            <RiMenu3Line />{" "}
          </span>
        </div>
      </div>

      <div
        className={`mobileNav fixed h-full w-full bg-white z-[200] fc flex-col gap-8 top-0  ${
          open ? "left-[0%]" : "left-[100%]"
        } `}
      >
        <div
          className="absolute top-4 right-4 text-4xl"
          onClick={() => setOpen(false)}
        >
          <MdClose />
        </div>

        {open && (
          <>
            {navData.map((item, index) => {
              return (
                <Link
                  href={item.link}
                  className="text-4xl"
                  key={index}
                  onClick={() => setOpen(false)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  {item.name}
                </Link>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Header;
