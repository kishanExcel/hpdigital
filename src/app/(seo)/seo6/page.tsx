import { directoryListings } from "@/utils/localListings";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import Screen from "../../../assets/images/BottomScreen.png";
import greenBg from "../../../assets/images/green-bg.svg";
import yellowBg from "../../../assets/images/yellow-bg.svg";
import redBg from "../../../assets/images/button-bg.svg";

export default function Page() {
  return (
    <>
      <div className="mb-6 w-full flex border-2 justify-center">
        <div className="md:max-w-[1280px] w-full border-2 bg-[#F4F4F4]">
          <div className="flex w-full px-2">
            <div className="w-full pt-2 pl-2 flex flex-col gap-2">
              <div className="text-[#6D6D6D] text-2xl font-semibold py-4 pl-4">
                Local Listings
              </div>
              <div className="flex justify-between text-white w-full gap-2 md:gap-8 overflow-hidden ">
                <div className="h-20 relative w-full  rounded-xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#00914C] via-[#00A550] to-[#64C08A] rounded-xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-semibold text-2xl text-center mb-4">
                      131
                    </div>
                  </div>
                  <button className=" w-full rounded-xl bg-gradient-to-b from-[#00914C] via-[#00A550] to-[#64C08A] absolute bottom-0">
                    {" "}
                    Good
                  </button>
                </div>

                <div className="h-20 relative w-full  rounded-xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#FAAC18] via-[#FFCA05] to-[#FFE7A3] rounded-xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-semibold text-2xl text-center mb-4">
                      131
                    </div>
                  </div>
                  <button className=" w-full rounded-xl bg-gradient-to-b from-[#FAAC18] via-[#FFCA05] to-[#FFE7A3]  absolute bottom-0">
                    {" "}
                    Good
                  </button>
                </div>

                <div className="h-20 relative w-full  rounded-xl border flex flex-col justify-evenly">
                  <div className="bg-gradient-to-b from-[#CF232A] via-[#EC1C24] to-[#F37E5F] rounded-xl border flex flex-col justify-evenly  w-full h-full">
                    <div className="font-semibold text-2xl text-center mb-4">
                      131
                    </div>
                  </div>
                  <button className=" w-full rounded-xl  bg-gradient-to-b from-[#CF232A] via-[#EC1C24] to-[#F37E5F]  absolute bottom-0">
                    {" "}
                    Good
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Table className="my-4">
            <TableHeader>
              <TableRow>
                <TableHead className=" text-[#631363] ">
                  Site/Directory
                </TableHead>
                <TableHead className=" text-[#631363] ">Name</TableHead>
                <TableHead className=" text-[#631363] ">Address</TableHead>
                <TableHead className=" text-[#631363] ">Zip/PostCode</TableHead>
                <TableHead className=" text-[#631363] ">Phone</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {directoryListings.map((invoice) => (
                <TableRow key={invoice.Site}>
                  <TableCell className="font-semibold text-[#6D6D6D]">
                    <div className="flex items-center gap-2">
                      <div>
                        <Image
                          style={{ objectFit: "contain" }}
                          src={invoice.img}
                          quality={90}
                          width={16}
                          height={16}
                          className="h-6"
                          alt="Picture of the Site"
                        />
                      </div>
                      <div className="text-xs">{invoice.Site}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-[#6D6D6D] text-xs text-nowrap">
                    {invoice.Name}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D]  text-xs">
                    {invoice.Address}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D]  text-xs">
                    {invoice.Zip}
                  </TableCell>
                  <TableCell className="text-[#6D6D6D] text-xs">
                    {invoice.Phone}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <Image className="flex md:hidden" alt="screen" src={Screen} />
    </>
  );
}
