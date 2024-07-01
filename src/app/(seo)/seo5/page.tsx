"use client";

import { Button } from "@/components/ui/button";

import { BorderLinearProgress } from "@/components/ProgressBars";
import "./style.css";
import Image from "next/image";
import Screen from "../../../assets/images/BottomScreen.png";
import BarGraph from "@/app/_components/bargraph-ui";
import { useState } from "react";
import LocalListings from "../seo6/page";
import Rankings from "@/components/seo/SeoBar";
import CheckIns from "../seo1/page";

export default function SeoMain() {
  const [activeTab, setActiveTab] = useState("localListings");
  return (
    <>
      <div className="pb-2 flex justify-center">
        <div className="flex flex-col w-full px-2">
          <div className="w-full flex flex-col gap-2">
            <div className="flex gap-2 md:pt-10 bg-[#F4F4F4] md:px-10 flex-col md:flex-row justify-between w-full">
              <div
                onClick={() => setActiveTab("localListings")}
                className="w-full cursor-pointer px-2">
                <div
                  className={` ${
                    activeTab === "localListings"
                      ? "text-[#631363]"
                      : "text-[#6D6D6D] "
                  }  md:text-xl text-2xl py-2 font-semibold`}>
                  Local Listings
                </div>
                <div
                  className={`rounded-xl border-2 py-10 px-4 flex bg-[#E0E0E0] ${
                    activeTab === "localListings"
                      ? "border-[#631363]"
                      : "border-transparent"
                  } justify-between  items-center gap-2`}>
                  <div className="w-fit">
                    <div className="flex items-center gap-2">
                      {" "}
                      <div className="bg-green-700 rounded-full border h-3 w-3"></div>
                      <div className="text-[#6D6D6D] font-semibold text-base md:text-base">
                        {" "}
                        Good
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <div className="bg-[#FFCA05] rounded-full border h-3 w-3"></div>
                      <div className="text-[#6D6D6D] font-semibold text-base md:text-base text-nowrap">
                        {" "}
                        Incorrect
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {" "}
                      <div className="bg-[#EC1C24] rounded-full border h-3 w-3"></div>
                      <div className="text-[#6D6D6D] font-semibold  md:text-base text-base text-nowrap">
                        Doesn&apos;t exist
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 relative  w-full">
                    <div className="border-l-2 w-20 h-24  z-20 bottom-[-0.75rem] top- absolute border-[#6D6D6D]">
                      {" "}
                    </div>
                    <div className="font-semibold text-base">
                      <BorderLinearProgress value={38} />
                    </div>
                    <div className="font-semibold text-base">
                      <BorderLinearProgress value={58} />
                    </div>
                    <div className="font-semibold text-base">
                      <BorderLinearProgress value={80} />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1 pr-2 w-fit">
                    <div className="font-semibold text-base">131</div>
                    <div className="font-semibold text-base">180</div>
                    <div className="font-semibold text-base">97</div>
                  </div>
                </div>
                <div className="flex justify-end md:hidden w-full font-bold text-[#631363] px-2">
                  <Button variant="ghost">More...</Button>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("rankings")}
                className="w-full py-2  px-1 cursor-pointer">
                <div
                  className={` ${
                    activeTab === "rankings"
                      ? "text-[#631363]"
                      : "text-[#6D6D6D] "
                  } md:text-xl text-2xl font-semibold py-1`}>
                  Rankings
                </div>
                <div>
                  <div
                    className={`flex justify-between border-2  rounded-xl ${
                      activeTab === "rankings"
                        ? "border-[#631363]"
                        : "border-transparent"
                    }  border bg-[#E0E0E0]`}>
                    <div className="gap-2 py-11 px-2">
                      <div className="text-[#6D6D6D] text-nowrap text-base font-semibold">
                        Selected Keyword
                      </div>
                      <Button
                        variant="outline"
                        className="bg-[#631363] text-white md:px-2 py-1 md:w-fit font-normal mt-2 md:ml-2 md:text-sm rounded-xl">
                        {" "}
                        Target Keyword
                      </Button>
                    </div>
                    <div className="w-[60%] bg-white rounded-xl"></div>
                  </div>
                </div>
                <div className="flex justify-end  md:hidden w-full font-bold text-[#631363] px-2">
                  <Button variant="ghost">More...</Button>
                </div>
              </div>
              <div
                onClick={() => setActiveTab("check")}
                className="w-full  px-2 cursor-pointer">
                <div
                  className={` ${
                    activeTab === "check" ? "text-[#631363]" : "text-[#6D6D6D] "
                  } text-nowrap  md:text-xl text-2xl mt-1  font-semibold py-1`}>
                  Check-ins & Review Requests
                </div>
                <div
                  className={`flex border-2  ${
                    activeTab === "check"
                      ? "border-[#631363]"
                      : "border-transparent"
                  }  border rounded-lg py-4 mt-1 px-2 bg-[#E0E0E0]`}>
                  <BarGraph />
                </div>
                <div className="flex justify-end  md:hidden w-full font-bold text-[#631363] px-2">
                  <Button variant="ghost">More...</Button>
                </div>  
              </div>
            </div>
          </div>
          <div>{activeTab === "localListings" && <LocalListings />}</div>
          <div>{activeTab === "rankings" && <Rankings />}</div>
          <div>{activeTab === "check" && <CheckIns />}</div>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        style={{ width: "100%", height: "auto" }}
        priority={true}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
