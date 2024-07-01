"use client";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MarketingTab() {
  const router = usePathname();
  const [activeButton, setActiveButton] = useState<number | null>(null);

  console.log("this is the usePathname", router, activeButton);
  useEffect(() => {
    if (router === "/marketing/new-opportunites") {
      setActiveButton(0);
    } else if (router === "/marketing/paid-campaigns") {
      setActiveButton(1);
    } else if (router === "/marketing/organic-campaigns") {
      setActiveButton(2);
    } else if (router === "/marketing/follow-up-campaigns") {
      setActiveButton(3);
    }
  }, [router]);

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
          href={"/marketing/new-opportunites"}
          className={` p-2 border rounded-l-full ${
            activeButton === 0 ? "bg-[#40F440]" : "bg-white"
          }`}
          onClick={() => handleButtonClick(0)}>
          New Opportunities
        </Link>
        <Link
          href={"/marketing/paid-campaigns"}
          className={` p-2 border ${
            activeButton === 1 ? "bg-[#40F440]" : "bg-white"
          }`}
          onClick={() => handleButtonClick(1)}>
          Paid Campaigns
        </Link>
        <Link
          href={"/marketing/organic-campaigns"}
          className={` p-2 border ${
            activeButton === 2 ? "bg-[#40F440]" : "bg-white"
          }`}
          onClick={() => handleButtonClick(2)}>
          Organic Campaigns
        </Link>
        <Link
          href={"/marketing/follow-up-campaigns"}
          className={` p-2 rounded-r-full border ${
            activeButton === 3 ? "bg-[#40F440]" : "bg-white"
          }`}
          onClick={() => handleButtonClick(3)}>
          Follow up Campaigns
        </Link>
      </div>
    </>
  );
}
