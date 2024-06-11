"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MarketingTab() {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index: any) => {
    setActiveButton(index);
  };

  return (
    <>
      <div className="md:hidden w-full flex border-b-2 py-4 rounded-b-lg items-center justify-between bg-[#E0E0E0]">
        <div className="w-fit">
          <div className="pl-4">
            <Menu />
          </div>
        </div>
        <div className="text-2xl w-full pl-[28%] font-bold text-[#6D6D6D]">
          Marketing
        </div>
      </div>
      <div className="flex font-normal text-xs text-center gap-[2px] py-2 px-4 bg-[#F4F4F4]">
        <Link
          href={""}
          className={`bg-white p-2 border rounded-l-full ${
            activeButton === 0 ? "bg-[#40F440]" : ""
          }`}
          onClick={() => handleButtonClick(0)}>
          New Opportunities
        </Link>
        <Link
          href={""}
          className={`bg-white p-2 border ${
            activeButton === 1 ? "bg-[#40F440]" : ""
          }`}
          onClick={() => handleButtonClick(1)}>
          Paid Campaigns
        </Link>
        <Link
          href={""}
          className={`bg-white p-2 border ${
            activeButton === 2 ? "bg-[#40F440]" : ""
          }`}
          onClick={() => handleButtonClick(2)}>
          Organic Campaigns
        </Link>
        <Link
          href={""}
          className={`bg-white p-2 rounded-r-full border ${
            activeButton === 3 ? "bg-[#40F440]" : ""
          }`}
          onClick={() => handleButtonClick(3)}>
          Follow up Campaigns
        </Link>
      </div>
    </>
  );
}
