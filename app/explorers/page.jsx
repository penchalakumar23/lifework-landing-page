import Partners_Advisor from "@/components/Partners_Advisor";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <main className="flex flex-col items-center justify-between ">
     <Link href={"/"}>
          <Image
            src={"/logo.png"}
            priority
            alt="logo"
            width={550}
            height={550}
            className="w-auto h-auto hover:cursor-pointer cursor-pointer"
          />
        </Link>
      
      <h1>Explorer Page.</h1>
    </main>
  );
}

export default page;
