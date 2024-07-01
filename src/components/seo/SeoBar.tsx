import { Button } from "@/components/ui/button";
import TargetKeyWord from "@/components/seo/TargetKeyword";
import Image from "next/image";
import Screen from "../../assets/images/BottomScreen.png";

export default function Rankings() {
  return (
    <>
      <div className="flex justify-center">
        <div className="mb-6 bg-[#F4F4F4]  w-full ">
          <div className="flex flex-col w-full px-2">
            <div className="w-[60%] pt-2 pl-2 flex flex-col  gap-2">
              <div className="text-[#6D6D6D] md:hidden  tracking-wide text-xl md:text-2xl p-1 font-semibold">
                Rankings
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#E0E0E0] flex md:flex-row-reverse flex-col items-center justify-center">
        <div className="w-full">
          {" "}
          <div className="h-80 my-4 w-full md:w-96 border-2  bg-white rounded-md"></div>
        </div>
        <div className="w-full">
          <div className="flex w-full relative border justify-center">
            <div className="absolute left-14 top-[13px]"></div>
            <TargetKeyWord />
          </div>
          <div className="flex py-4 w-full justify-center px-2">
            <Button
              variant="outline"
              className="bg-[#631363] w-40 h-10 rounded-xl text-white">
              {" "}
              Run Report
            </Button>
          </div>
        </div>
      </div>
      <Image
        height={0}
        width={0}
        priority={true}
        style={{ width: "100%", height: "auto" }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
