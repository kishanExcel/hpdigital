import { Button } from "@/components/ui/button";

import { BorderLinearProgress } from "@/components/ProgressBars";
import "./style.css";

export default function Page() {
  return (
    <div className="mb-6 flex justify-center">
      <div className="flex w-full md:max-w-[1280px] px-2">
        <div className="w-full pt-2 pl-2 flex flex-col gap-2">
          <div className="text-[#6D6D6D] text-2xl py-2 font-semibold">
            Local Listings
          </div>
          <div className="rounded-xl flex bg-[#E0E0E0] items-center gap-2">
            <div className="p-4">
              <div className="flex items-center gap-2">
                {" "}
                <div className="bg-green-700 rounded-full border h-3 w-3"></div>
                <div className="text-[#6D6D6D] font-semibold text-lg">
                  {" "}
                  Good
                </div>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <div className="bg-[#FFCA05] rounded-full border h-3 w-3"></div>
                <div className="text-[#6D6D6D] font-semibold text-lg text-nowrap">
                  {" "}
                  Incorrect
                </div>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <div className="bg-[#EC1C24] rounded-full border h-3 w-3"></div>
                <div className="text-[#6D6D6D] font-semibold text-lg text-nowrap">
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
          <div className="flex justify-end w-full font-bold text-[#631363] px-2">
            <Button variant="ghost">More...</Button>
          </div>
          <div className="text-[#6D6D6D] text-2xl font-semibold py-2 ">
            Rankings
          </div>
          <div>
            <div className="h-44 flex justify-between rounded-lg border bg-[#E0E0E0]">
              <div className="p-6 gap-2">
                <div className="text-[#6D6D6D] text-nowrap text-xl font-semibold">
                  Select Keyword
                </div>
                <Button
                  variant="outline"
                  className="bg-[#631363] text-white font-normal mt-2 rounded-xl">
                  {" "}
                  Target Keyword
                </Button>
              </div>
              <div className="w-[60%] bg-white h-full"></div>
            </div>
          </div>
          <div className="flex justify-end w-full font-bold text-[#631363] px-2">
            <Button variant="ghost">More...</Button>
          </div>
          <div className="text-[#6D6D6D] text-2xl font-semibold py-2">
            Check-ins
          </div>
          <div className="rounded-xl flex bg-[#E0E0E0] items-center gap-20]">
            <div className="p-4">
              <div className="flex items-center gap-2">
                {" "}
                <div className="text-[#6D6D6D] font-semibold text-lg">
                  {" "}
                  Today
                </div>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <div className="text-[#6D6D6D] font-semibold text-lg text-nowrap">
                  {" "}
                  This week
                </div>
              </div>
              <div className="flex items-center gap-2">
                {" "}
                <div className="text-[#6D6D6D] font-semibold text-lg text-nowrap">
                  This month
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 p-4 w-full">
              <div className="font-semibold text-base">
                <BorderLinearProgress value={38} color="#631363" />{" "}
              </div>
              <div className="font-semibold text-base">
                <BorderLinearProgress value={58} color="#631363" />
              </div>
              <div className="font-semibold text-base">
                <BorderLinearProgress value={80} color="#631363" />
              </div>
            </div>
            <div className="flex flex-col gap-1 pr-2 w-fit">
              <div className="font-semibold text-base">7</div>
              <div className="font-semibold text-base">31</div>
              <div className="font-semibold text-base">157</div>
            </div>
          </div>
          <div className="flex justify-end w-full font-bold text-[#631363] px-2">
            <Button variant="ghost">More...</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
