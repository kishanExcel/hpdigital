import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Page() {
  return (
    <div className="flex w-full justify-center">
      <div className="pb-6 bg-[#F4F4F4] h-screen w-full md:w-[1280px]">
        <div className="flex flex-col w-full px-2">
          <div className="w-[60%] pt-2 pl-2 flex flex-col gap-2">
            <div className="text-[#6D6D6D] text-xl md:text-2xl p-1 font-semibold">
              Rankings
            </div>
          </div>
          <div className="h-80 my-4 w-full border-2 bg-white md:px-16 px-0 rounded-md">
            {" "}
          </div>
        </div>
        <div className="pl-4 flex gap-2 w-full items-center pt-4">
          <div className="flex w-full">
            <div className="flex flex-col w-full md:w-[40%]  px-4  justify-center">
              <div className="text-[#6D6D6D] pb-2 font-semibold">
                Target Keyword
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                <Input
                  className="rounded-full border-2 w-full "
                  type="search"
                />
                <Button
                  variant="outline"
                  className="bg-[#40F440] rounded-xl  w-26 h-10">
                  {" "}
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex py-4 w-full justify-center px-2">
          <Button
            variant="outline"
            className="bg-[#631363] w-40 h-10 rounded-xl text-lg text-white">
            {" "}
            Run Report
          </Button>
        </div>
      </div>
    </div>
  );
}
