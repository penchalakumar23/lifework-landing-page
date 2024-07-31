import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

function InterestFormInput() {
  return (
    <form className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 my-5">
      <div className="grid w-full min-w-sm items-center gap-1.5">
        <Label htmlFor="firstname" className=' font-montserrat font-black'>First Name</Label>
        <Input className='placeholder:font-open_sans font-semibold' type="first-name" id="first-name" placeholder="First Name" />
      </div>
      <div className="grid w-full min-w-sm items-center gap-1.5">
        <Label htmlFor="lastname"  className=' font-montserrat font-black'>Last Name</Label>
        <Input className='placeholder:font-open_sans font-semibold' type="last-name" id="lastname" placeholder="Last Name" />
      </div>
      <div className="grid w-full min-w-sm items-center gap-1.5">
        <Label htmlFor="email"  className=' font-montserrat font-black'>Email</Label>
        <Input className='placeholder:font-open_sans font-semibold' type="email" id="email" placeholder="Email" />
      </div>
      <div className="grid w-full min-w-sm items-center gap-1.5">
        <Label htmlFor="phone" className=' font-montserrat font-black'>Mobile Phone</Label>
        <Input className='placeholder:font-open_sans font-semibold' type="phone" id="phone" placeholder="Mobile Phone" />
      </div>
    </form>
  );
}

export default InterestFormInput;
