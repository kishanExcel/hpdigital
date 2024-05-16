import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Chip from "@mui/material/Chip";
import TargetKeyWord from "@/components/seo/TargetKeyword";

export default function Page() {
  return (
    <div className="flex justify-center">
      <div className="mb-6 bg-[#F4F4F4]  w-full md:max-w-[1280px]">
        <div className="flex flex-col w-full px-2">
          <div className="w-[60%] pt-2 pl-2 flex flex-col gap-2">
            <div className="text-[#6D6D6D] text-xl md:text-2xl p-1 font-semibold">
              Rankings
            </div>
          </div>
          <div className="h-80 my-4 w-full border-2 bg-white rounded-md"> </div>
        </div>
        <div className="pl-4 flex gap-2 w-full items-center pt-4">
          <div className="flex w-full relative">
            <div className="absolute left-14 top-[13px]"></div>
            <TargetKeyWord />
          </div>
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
  );
}
