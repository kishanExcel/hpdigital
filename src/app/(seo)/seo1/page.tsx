import { DatePickerWithRange } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Save, Search } from "lucide-react";
import { Download } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { employees } from "@/utils/dummydata";
import { Input } from "@/components/ui/input";
import { Forward } from "lucide-react";
import Image from "next/image";
import Screen from "../../../assets/images/BottomScreen.png";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function CheckIns() {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="pb-2 w-full bg-[#F4F4F4] ">
          <div className="flex w-full px-2">
            <div className="w-[60%] md:w-full md:px-8 px-0  pt-2 flex flex-col gap-2">
              <div className="md:flex hidden w-1/4 relative my-8 px-2">
                <div className="absolute md:left-5 left-6 top-[10px] ">
                  <button>
                    <Search color="#BCBCBC" size={16} />
                  </button>
                </div>
                <Input
                  className="rounded-full border-2 .placeholder:text-[#BCBCBC] pl-10"
                  placeholder="Search"
                  type="search"
                />
              </div>
              <DatePickerWithRange className="w-full" />
              <div className="flex border w-1/2 md:hidden rounded-full justify-between">
                <div className="px-2 text-[#631363] bg-white rounded-tl-full rounded-bl-full">
                  City
                </div>
                <div className="px-2 bg-[#631363] text-white rounded-tr-full rounded-br-full">
                  Employee
                </div>
              </div>
            </div>
            <div className="flex md:flex-row-reverse pl-6 gap-2 pt-4  md:px-8 px-0 flex-col">
              <Button
                variant="outline"
                className="bg-[#631363] w-28 h-8  md:w-32 pb-3 text-white">
                {" "}
                Create Check-in{" "}
              </Button>
              <Button
                variant="outline"
                className="bg-[#40F440] w-28 pb-3 h-8 md:w-32  text-[#3D3D3D]">
                Request Review
              </Button>
            </div>
          </div>
          <div className="pl-4 flex gap-2 md:px-10 px-0  items-center pt-4">
            <div className="text-[#6D6D6D]">Show</div>
            <Select>
              <SelectTrigger className="w-[60px] bg-white rounded-full border">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-white w-[30px] z-50">
                <SelectItem value="light">10</SelectItem>
                <SelectItem value="dark">20</SelectItem>
                <SelectItem value="system">30</SelectItem>
              </SelectContent>
            </Select>
            <div className="text-[#6D6D6D]">Enteries</div>
            <div className="flex md:hidden relative px-2">
              <div className="absolute md:left-5 left-6 top-[10px] ">
                <button>
                  <Search color="#BCBCBC" size={16} />
                </button>
              </div>
              <Input
                className="rounded-full border-2 .placeholder:text-[#BCBCBC] pl-10"
                placeholder="Search"
                type="search"
              />
            </div>
          </div>
          <Table className="my-4">
            <TableHeader>
              <TableRow>
                <TableHead className="bg-[#631363] font-normal text-white ">
                  Employee
                </TableHead>
                <TableHead className="bg-[#631363] font-normal text-nowrap text-white ">
                  Check-Ins
                </TableHead>
                <TableHead className="bg-[#631363] font-normal text-white ">
                  Review Requests
                </TableHead>
                <TableHead className="bg-[#631363] font-normal text-white ">
                  Completed Reviews
                </TableHead>
                <TableHead className="bg-[#631363] font-normal text-white ">
                  Average
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {employees.map((invoice, index) => (
                <TableRow
                  key={invoice.totalRating}
                  className={index % 2 === 0 ? "bg-white" : "bg-[#F4F4F4]"}>
                  <TableCell className="font-medium border">
                    {invoice.name}
                  </TableCell>
                  <TableCell className="border">
                    {invoice.totalRating}
                  </TableCell>
                  <TableCell className="border">
                    {invoice.averageRating}
                  </TableCell>
                  <TableCell className="border">
                    {invoice.tasksRequested}
                  </TableCell>
                  <TableCell className="border">
                    {invoice.tasksCompleted}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="flex py-4 justify-between md:justify-center md:gap-2 gap-0 px-2">
            <Button
              variant="outline"
              className="bg-[#631363] px-2 w-20 h-8 text-white">
              {" "}
              <Forward size={14} /> Share
            </Button>
            <Button
              variant="outline"
              className="bg-[#631363] px-2 w-20 h-8 text-white">
              {" "}
              <Save size={14} /> Save
            </Button>
            <Button
              variant="outline"
              className="bg-[#631363] w-26 px-2 h-8 text-white">
              {" "}
              <CalendarCheck size={14} /> Schedule
            </Button>
            <Button
              variant="outline"
              className="bg-[#631363] w-26 h-8 px-2 text-white">
              {" "}
              <Download size={14} /> Download
            </Button>
          </div>
        </div>
      </div>
      <div></div>
      <Image
        height={0}
        width={0}
        style={{ width: "100%", height: "auto" }}
        priority={true}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </>
  );
}
