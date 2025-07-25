import Link from 'next/link'
import React from 'react'

import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (



    <div className="parent bg-black">
      <div className="container">
        <div className='text-center p-4  text-white  flex items-center justify-between'>

      <p className='!text-white'>© 2025 SkillNestEdu </p>

      <div className="flex gap-4">

        <Link href={"https://www.facebook.com/profile.php?id=61578193387318"} target='_blank' className='text-2xl' > <FaFacebook /> </Link>
        <Link href={"https://www.instagram.com/skillnestedu.official?igsh=N2tqaG1uNXkzMmlo&utm_source=qr"} target='_blank' className='text-[27px]' > <AiFillInstagram /> </Link>
        <Link href={"https://www.linkedin.com/company/skillnestedu1/ue"} target='_blank' className='text-2xl' > <FaLinkedin /> </Link>
        <Link href={"https://www.youtube.com/@skillnestedu"} target='_blank' className='text-2xl' > <FaYoutube /> </Link>


      </div>




    </div>
      </div>
    </div>



  )
}

export default Footer