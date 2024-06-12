import { follows } from "@/utils/dummydata";
import Image from "next/image";

export default function OrganicLayout() {
  return (
    <div className="px-2 flex gap-4 flex-col">
      {follows.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <div className="flex w-full ">
            <div className="font-semibold flex-grow leading-tight text-white px-1 text-xs w-20 bg-[#631363] p-1  rounded-tl-xl">
              Name
            </div>
            <div className="text-wrap w-12   font-semibold text-white bg-[#631363]  text-xs p-1">
              Total Enrolled
            </div>
            <div className="text-wrap w-12 font-semibold text-white bg-[#631363]  text-xs p-1">
              Active
            </div>
            <div className="text-wrap w-16 font-semibold text-white bg-[#631363]   text-xs p-1">
              Completed
            </div>
            <div className="text-wrap w-12 font-semibold text-white bg-[#631363]  text-xs p-1">
              Replied
            </div>
            <div className="text-wrap w-16 font-semibold text-white bg-[#631363]  text-xs p-1 ">
              Reply%
            </div>
            <div className="text-wrap w-16 font-semibold text-white bg-[#631363]  text-xs p-1 rounded-tr-xl">
              Status
            </div>
          </div>{" "}
          <div className="gap-2 py-1 px-2">
            <div className="flex">
              <div className="w-24 gap-2 flex  text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs text-wrap w-16 pt-1">{item.name}</div>
              </div>
              <div className="w-16 text-start text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs text-start pt-1">{item.total}</div>{" "}
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.active}</div>
              </div>
              <div className="w-16 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.completed}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1 pl-2">{item.replied}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm pl-2">
                <div className="text-xs  pt-1"> {item.reply}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs pt-1"> {item.status}</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}
