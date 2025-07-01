"use client";
import Header from "@/components/Header";
import "./globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";





export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);






  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Agbalumo&family=Alegreya+Sans:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,300;1,400;1,500;1,700;1,800;1,900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
