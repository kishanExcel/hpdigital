import Image from "next/image";
import { Menu } from "lucide-react";

export default function MobileHeader() {
  return (
    <div className="md:hidden w-full flex border-b-2 py-2 rounded-b-lg items-center justify-between bg-[#E0E0E0]">
      <div className="w-full">
        <div className="pl-4">
          <Menu />
        </div>
      </div>
      <div className="text-2xl w-full font-bold text-[#6D6D6D] ">SEO</div>
    </div>
  );
}
