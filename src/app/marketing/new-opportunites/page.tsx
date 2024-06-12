import { Button } from "@/components/ui/button";

import { marketingListings } from "@/utils/marketing";
import { Plus } from "lucide-react";
import { MessageCircleMore } from "lucide-react";
import { PhoneOff } from "lucide-react";
import { PhoneCall } from "lucide-react";
import Image from "next/image";
import Screen from "../../../assets/images/BottomScreen.png";

export default function Page() {
  return (
    <>
      <div className="p-6 h-full bg-[#F4F4F4]">
        {marketingListings.map((marketing, index) => (
          <div
            className="border bg-[#E0E0E0] rounded-2xl gap-4  my-4"
            key={index}>
            <div className="flex justify-between ">
              <div className="flex">
                <div className="justify-center py-4 px-2 items-center">
                  <Image quality={100} src={marketing.img} alt="" />
                </div>
                <div className="pl-2 space-y-2">
                  <div className="text-md font-bold pt-1 text-[#6D6D6D]">
                    {marketing.Name}
                  </div>
                  <div className="flex gap-2">
                    {marketing.callIcon === "missed" ? (
                      <PhoneOff color="#ED0303" />
                    ) : marketing.callIcon === "recieve" ? (
                      <PhoneCall color="#40F440" />
                    ) : (
                      <PhoneCall color="#6D6D6D" />
                    )}
                    <MessageCircleMore color="#6D6D6D" />
                  </div>
                </div>
              </div>
              <div className="flex items-end pb-2 pr-2">
                {" "}
                <Button
                  variant="outline"
                  className="bg-[#631363] h-8 w-18 rounded-xl text-white">
                  {" "}
                  <span className="pt-1"      >
                    {" "}
                    <Plus strokeWidth={5} size={12} />
                  </span>{" "}
                  <span>Task</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Image
        height={0}
        width={0}
        priority={true}
        style={{
          width: "100%",
          height: "auto",
          position: "fixed",
          bottom: "0px",
        }}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
