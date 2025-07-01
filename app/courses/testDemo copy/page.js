"use client";
import React from "react";
import { FaClock, FaChalkboardTeacher, FaCertificate, FaUsers } from "react-icons/fa";
import Link from "next/link";

const CourseDetails = () => {
  return (
    <div className="course-details-page">

      {/* 1. Hero Banner */}
      <section className="bg-gradient-to-r from-purple-200 via-pink-100 to-blue-100 py-20 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Course 1: Master the Basics of Economics</h1>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          Learn core economic principles through fun real-life examples and engaging stories. Perfect for CBSE, IB & curious minds!
        </p>
        <Link href="/contact" className="btn-primary">Enroll Now</Link>
      </section>

      {/* 2. Modules */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-8">📘 What You’ll Learn</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "The Basic Economic Problem",
              desc: "Scarcity, choice, and opportunity cost — explained with real-life dilemmas.",
              outcomes: [
                "Define scarcity, choice, and opportunity cost",
                "Use PPC to show trade-offs",
                "Apply economic thinking to daily life"
              ]
            },
            {
              title: "Demand, Supply & Market Equilibrium",
              desc: "Understand how prices are set — from ice cream to oil.",
              outcomes: [
                "Draw and interpret demand/supply graphs",
                "Analyze shifts in market forces",
                "Understand surplus and shortage"
              ]
            },
          ].map((mod, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{mod.title}</h3>
              <p className="mb-2 text-gray-600">{mod.desc}</p>
              <ul className="list-disc list-inside text-sm text-gray-800">
                {mod.outcomes.map((o, idx) => <li key={idx}>{o}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Teaching Style */}
      <section className="bg-[#f9f9f9] py-16 px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-4">🌀 How You'll Learn</h2>
          <p className="text-lg text-gray-700">
            We teach using Kolb’s Experiential Learning Cycle — helping you go beyond memorization into actual mastery. Expect active tasks, real-world cases, reflection prompts, and frequent feedback.
          </p>
        </div>
      </section>

      {/* 4. Course Highlights */}
      <section className="py-16 px-6 container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">🚀 Course Highlights</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { icon: FaClock, label: "3–6 weeks", desc: "Duration" },
            { icon: FaChalkboardTeacher, label: "Live + Recorded", desc: "Format" },
            { icon: FaUsers, label: "Weekly Q&A", desc: "Doubt Support" },
            { icon: FaCertificate, label: "Certificate", desc: "On Completion" },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <item.icon className="text-3xl mb-2 text-blue-600 mx-auto" />
              <h4 className="font-bold">{item.label}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="py-16 px-6 bg-[#f1f5f9]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">❓ Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-white p-4 rounded-md shadow cursor-pointer">
              <summary className="font-semibold">Is this suitable for beginners?</summary>
              <p className="mt-2 text-gray-700">Absolutely! No prior background in economics is required.</p>
            </details>
            <details className="bg-white p-4 rounded-md shadow cursor-pointer">
              <summary className="font-semibold">Are live classes recorded?</summary>
              <p className="mt-2 text-gray-700">Yes, all live sessions are uploaded within 24 hours.</p>
            </details>
          </div>
        </div>
      </section>

      {/* 6. Final CTA Hook */}
      <section className="py-16 text-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Skilled?</h2>
        <p className="text-lg mb-6 max-w-xl mx-auto">Take the first step toward mastering economics with SkillNestEdu. Start your journey today!</p>
        <Link href="/contact" className="btn-primary">Be a Founding Learner</Link>
      </section>
    </div>
  );
};

export default CourseDetails;
