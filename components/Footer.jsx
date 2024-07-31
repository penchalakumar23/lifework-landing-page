import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  const links = [
    {
      category: "Features",
      items: [
        { name: "Career Path", path: "/career-path" },
        { name: "Digital You", path: "/digital-you" },
        { name: "Trait Review", path: "/trait-review" },
        { name: "Job Match", path: "/job-match" },
      ],
    },
    {
      category: "Company",
      items: [
        { name: "About Us", path: "/about-us" },
        { name: "Contact Us", path: "/contact-us" },
        { name: "Jobs", path: "/jobs" },
        { name: "Reviews", path: "/reviews" },
      ],
    },
    {
      category: "Legal",
      items: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Use", path: "/terms-of-use" },
        { name: "Cookie Policy", path: "/cookie-policy" },
      ],
    },
  ];

  return (
    <div className="md:flex md:justify-between items-center md:w-full md:px-12">
      <div className="flex justify-center items-center  flex-col">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            priority
            alt="logo"
            width={150}
            height={150}
            className="w-auto ml-2 h-auto cursor-pointer"
          />
        </Link>

        <div className=" flex space-x-6 justify-center  w-full my-3">
          <Link href={"https://www.instagram.com/lifework.live/"}>
            <Image
              src={"/Socials/IG.png"}
              priority
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto cursor-pointer"
            />
          </Link>
          <Link href={"https://www.linkedin.com/company/lifeworkdna"}>
            <Image
              src={"/Socials/Linkedin.png"}
              priority
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto cursor-pointer"
            />
          </Link>

          <Link href={" https://x.com/LifeWorkDNA"}>
            <Image
              src={"/Socials/X.png"}
              priority
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto cursor-pointer"
            />
          </Link>
        </div>
        <p className="text-center mb-4 font-open_sans">© 2024 LifeWork</p>
      </div>
      <div className="flex mb-4 text-sm text-center justify-between  mx-12 md:mx-0 md:w-2/3 mt-6">
        {links.map((category, index) => (
          <div key={index} className="flex flex-col px-3">
            <h4 className="font-bold text-xl font-montserrat">{category.category}</h4>
            {category.items.map((item, idx) => (
              <Link key={idx} href={item.path} className="cursor-pointer ">
                <p className="hover:underline text-[12px] text-nowrap font-open_sans ">{item.name}</p>
              </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
