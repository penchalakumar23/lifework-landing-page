import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";
export default function Our_Team() {
  const profiles = [
    {
      name: "Jay Runner",
      dept: "CEO",
      position: "Founder & Chief Visionary",
      avatar: "/Avatar/Jay.png",
    },

    {
      name: "Eren Robert",
      dept: "CPO",
      position: "Chief Purpose Officer",
      avatar: "/Avatar/Eren.png",
    },
    {
      name: "Benjamin Beasley",
      dept: "CRO",
      position: "Chief Revenue Officer",
      avatar: "/Avatar/Ben.png",
    },

    // {
    //   name: "Benjamin Beasley",
    //   dept: "CRO",
    //   position: "Chief Revenue Officer",
    //   avatar: "/Avatar/Ben.png",
    // },

    {
      name: "Nathan Erie",
      dept: "CFO",
      position: "Chief Financial Officer",
      avatar: "/Avatar/Nathan.png",
    },

    {
      name: "Becky Moschel",
      dept: "PMO and CoS",
      position: "Chief of Staff",
      avatar: "/Avatar/Becky.png",
    },

    {
      name: "Steve Nasr",
      dept: "CISO",
      position: "Security and Privacy",
      avatar: "/Avatar/Steve_N.png",
    },

    {
      name: "Kyu Kim",
      dept: "Chief Partnership Officer",
      position: " Operations Leader",
      avatar: "/Avatar/Kyu.png",
    },

    {
      name: "Steve VanWieren",
      dept: "CDO",
      position: " Chief Data Officer",
      avatar: "/Avatar/Steve_v.png",
    },
    {
      name: "Rahmah Wims",
      dept: "HR Leader",
      position: " Senior HR Generalist",
      avatar: "/Avatar/Rahmah.png",
    },
    {
      name: "George LaMadrid",
      position: "DevOps Lead",
      dept: " Platform Developmentt",
      avatar: "",
    },
    {
      name: "[Open]",
      position: "Chief Technology Officer",
      dept: " CTO",
      avatar: "",
    },
    {
      name: "Scott Brothers",
      position: "Chief Product Owner",
      dept: " SVP- Product",
      avatar: "/Avatar/Scott.png",
    },
    {
      name: "Christy O’Neill",
      position: "Senior Controller",
      dept: " Lead Accountant",
      avatar: "/Avatar/Christy.png",
    },

    {
      name: "David Hynds",
      position: "UI/UX Advisor",
      dept: " Founding Advisor",
      avatar: "/Avatar/David.png",
    },
    {
      name: "Thomas Taylor",
      position: "Science Advisor",
      dept: "Founding Advisort",
      avatar: "/Avatar/Scott.png",
    },
    {
      name: "Eddie Zare",
      position: "Senior Product Owner",
      dept: "Platform Development",
      avatar: "",
    },

    {
      name: "Aditya Raj S.",
      position: "Senior Technologist",
      dept: "Backend Development",
      avatar: "/Avatar/Aditya.png",
    },
    {
      name: "Tino C.",
      position: "Compliance Leader",
      dept: " AI/ML and Privacy",
      avatar: "/Avatar/Tino.png",
    },
    {
      name: "Zhi Jun Liang ",
      position: "Apprentice",
      dept: " UI/UX & Frontend",
      avatar: "/Avatar/Zhi.png",
    },
    {
      name: "Yaajyansh B.",
      position: "Intern",
      dept: " Data Platform Integration",
      avatar: "/Avatar/Yaajyansh.png",
    },
    {
      name: "Remi E.",
      position: "Intern",
      dept: " Frontend Development",
      avatar: "",
    },
    {
      name: "Trey R,",
      position: "Intern",
      dept: " Information Systems",
      avatar: "/Avatar/Trey.png",
    },
    {
      name: "Joaquin F.",
      position: "Intern",
      dept: " Integration Development",
      avatar: "/Avatar/Joaquin.png",
    },
    {
      name: "Puarth",
      dept: "Legal Research",
      position: " Intern",
      avatar: "/Avatar/Puarth.png",
    },
  ];

  return (
    <div className="border-b-2 mb-12 pb-6 md:px-28">
      <h3 className="mt-12 mb-3 font-mono font-extrabold text-2xl text-center">Meet our Team!</h3>

      <p className="text-justify px-4 mb-4">
        Our growing team includes professionals from all industries and
        backgrounds. We all came together to help solve a growing problem before
        it gets out of control.
      </p>

      <div className="grid grid-cols-2 place-content-center gap-6 px-4"> 
        {profiles.map(({ name, dept, position, avatar }) => (
          <div className=" text-nowrap text-[0.8em] flex justify-center py-3 items-center rounded-md flex-col shadow">
            {!avatar ? (
              <FaUser color="#003a56" size={80} className="rounded-full" />
            ) : (
              <Image src={avatar} width={100} height={100} alt="avatar" className="h-auto w-auto" />
            )}
            <h4 className="font-bold font-mono pt-3">{name}</h4>
            <p className="py-2">{dept}</p>
            <p>{position}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
