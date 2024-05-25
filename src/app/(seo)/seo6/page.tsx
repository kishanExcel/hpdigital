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
                <TableHead className=" text-[#631363] w-[240px]">
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
                <TableRow
                  className="border-y-2 border-[#6D6D6D]"
                  key={invoice.Site}>
                  <TableCell className="font-semibold p-[5px] md:p-[1rem] text-[#6D6D6D] ">
                    <div className="flex justify-start items-center md:gap-2 gap-1">
                      <div className="flex items-center gap-1 md:gap-2">
                        <div className="flex justify-center gap-2 items-center">
                          <div
                            className={`w-3 h-3 border flex-shrink-0 rounded-full`}
                            style={{
                              background: `linear-gradient(to bottom, ${invoice.from}, ${invoice.via}, ${invoice.to})`,
                            }}></div>
                          <div className="flex-shrink-0">
                            <Image
                              style={{
                                objectFit: "contain",
                                height: "20px",
                                width: "auto",
                              }}
                              src={invoice.img}
                              quality={100}
                              width={100}
                              height={100}
                              alt="Picture of the Site"
                            />
                          </div>
                        </div>
                        <div className="text-xs ml-2 md:ml-0 md:text-sm">
                          {invoice.Site}
                        </div>
                      </div>
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
