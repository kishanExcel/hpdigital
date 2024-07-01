import { Menu } from "lucide-react";
import Image from "next/image";
import logo from "../assets/images/HubSparkLogo.png";
import { RefreshCcw } from "lucide-react";
import avtar from "../assets/images/avtar.png";
import { Button } from "./ui/button";

export default function MobileHeader() {
  return (
    <>
      <div className="md:hidden w-full flex border-b-2 py-2 rounded-b-lg items-center justify-between bg-[#E0E0E0]">
        <div className="w-full">
          <div className="pl-4">
            <Menu />
          </div>
        </div>
        <div className="text-2xl w-full font-bold text-[#6D6D6D] ">SEO</div>
      </div>
      <div className="hidden md:flex w-full justify-between ">
        <div className="flex w-full bg-white justify-between">
          <div className="flex justify-between px-2">
            <div className="flex">
              <Image src={logo} alt="HubSpark Logo" width={100} height={80} />
            </div>
            {/* <div className="flex">
              <div className="w-3 h-full bg-black transform -rotate-12  ml-2"></div>
              <div className="w-3 h-full bg-[#631363] transform -rotate-12 ml-2"></div>
              <div className="w-3 h-full bg-[#40F440] transform -rotate-12  ml-2"></div>
            </div> */}
          </div>
          <div className="text-[#6D6D6D] flex flex-col">
            <div className="font-bold text-2xl text-center">SEO</div>
            <div className="w-40 bg-[#631363] h-2 rounded-full"></div>
          </div>
          <div className="bg-[#631363] flex w-48 justify-center items-center gap-4">
            {" "}
            <Button>
              {" "}
              <RefreshCcw color="white" />
            </Button>
            <Image src={avtar} alt="HubSpark Logo" width={20} height={20} />
            <div className="text-white font-semibold">John Doe</div>
          </div>
        </div>
      </div>
    </>
  );
}
