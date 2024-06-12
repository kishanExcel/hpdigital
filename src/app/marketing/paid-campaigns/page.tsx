import { organic } from "@/utils/dummydata";
import Image from "next/image";

export default function PaidCampaignsLayout() {
  return (
    <div className="px-2 flex gap-4 flex-col">
      {organic.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
          <div className="flex w-full ">
            <div className="font-semibold flex-grow text-white px-1 text-xs w-28 bg-[#631363] p-1  rounded-tl-xl">
              Name
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Posts
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Likes
            </div>
            <div className="text-wrap w-16  font-semibold  text-white bg-[#631363]   text-xs p-1">
              Comments
            </div>
            <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
              Shares
            </div>
            <div className="text-wrap w-16 font-semibold  text-white bg-[#631363]  text-xs p-1 rounded-tr-xl">
              Messages
            </div>
          </div>{" "}
          <div className="gap-2 py-1 px-2">
            <div className="flex">
              <div className="w-28 gap-2 flex flex-grow text-[#6D6D6D] font-semibold text-sm">
                <Image src={item.img} alt="logo" height={0} width={0} />
                <div className="text-xs pt-1">{item.name}</div>
              </div>
              <div className="w-12 text-start text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.posts}</div>{" "}
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.likes}</div>
              </div>
              <div className="w-16 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1">{item.comments}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1 pl-2">{item.shares}</div>
              </div>
              <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                <div className="text-xs  pt-1"> {item.messages}</div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
}
