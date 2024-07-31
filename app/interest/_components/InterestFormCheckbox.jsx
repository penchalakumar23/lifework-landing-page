import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import React from "react";

function InterestFormCheckbox() {
  return (
    <div className="md:grid  md:grid-cols-2 md:gap-20 w-full">
      <div className="flex flex-col items-center shadow my-4 pb-4 px-2 rounded justify-center space-x-2 gap-4 w-full">
        <h3 className="font-black font-montserrat mt-6">Individual</h3>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="joining" />
          <Label
            htmlFor="joining"
            className=" text-sm font-medium leading-none text-right peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Joining LifeWork as a member/user
          </Label>
        </div>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="promoting" />
          <Label
            htmlFor="promoting"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Promoting us (learn more to earn more)
          </Label>
        </div>{" "}
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="help" />
          <Label
            htmlFor="help"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Other ways you want to help (we'll follow up)
          </Label>
        </div>
      </div>

      <div className="flex flex-col items-center shadow my-4 pb-4 px-2 rounded justify-center space-x-2 gap-4 w-full">
        <h3 className="font-black font-montserrat mt-6">
          Early Access (help us grow)
        </h3>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="alpha" />
          <Label
            htmlFor="alpha"
            className=" text-sm font-medium leading-none text-right peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Alpha
          </Label>
        </div>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="early-adopter" />
          <Label
            htmlFor="early-adopter"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Early Adopter (beta)
          </Label>
        </div>{" "}
      </div>

      <div className="flex flex-col items-center shadow my-4 pb-4 px-2 rounded justify-center space-x-2 gap-4 w-full">
        <h3 className="font-black font-montserrat mt-6">Business Interest</h3>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="partner" />
          <Label
            htmlFor="partner"
            className=" text-sm font-medium leading-none text-right peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Partner
          </Label>
        </div>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="customer" />
          <Label
            htmlFor="customer"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Customer
          </Label>
        </div>{" "}
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="other" />
          <Label
            htmlFor="other"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Other
          </Label>
        </div>
      </div>

      <div className="flex flex-col items-center shadow my-4 pb-4 px-2 rounded justify-center space-x-2 gap-4 w-full">
        <h3 className="font-black font-montserrat mt-6">Join the team?</h3>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="full-time" />
          <Label
            htmlFor="full-time"
            className=" text-sm font-medium leading-none text-right peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Full Time
          </Label>
        </div>
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="intern" />
          <Label
            htmlFor="intern"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Intern/ Apprentice

          </Label>
        </div>{" "}
        <div className=" flex  gap-2 items-center ju w-full">
          <Checkbox id="contract" />
          <Label
            htmlFor="contract"
            className=" text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            {" "}
            Contract
          </Label>
        </div>
      </div>

      <Button className='md:col-span-2 w-full mb-12 mt-6 bg-[#003a56] hover:bg-[#003a30]'>Submit</Button>
    </div>
  );
}

export default InterestFormCheckbox;
