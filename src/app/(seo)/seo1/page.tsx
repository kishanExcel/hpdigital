import { DatePickerWithRange } from "@/components/DatePicker";
import { Button } from "@/components/ui/button";
import { Save } from "lucide-react";
import { Download } from "lucide-react";
import { CalendarCheck } from "lucide-react";
import { employees } from "@/utils/dummydata";
import { Input } from "@/components/ui/input";
import { Forward } from "lucide-react";
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

export default function Page() {
  return (
    <div className="mb-6">
      <div className="flex w-full px-2">
        <div className="w-[60%] pt-2 pl-2 flex flex-col gap-2">
          <div className="text-[#6D6D6D] text-2xl font-semibold">Check-Ins</div>
          <DatePickerWithRange className="w-full" />
        </div>
        <div className="flex pl-6 gap-2 pt-4  flex-col">
          <Button
            variant="outline"
            className="bg-[#631363] w-28 h-8 pb-3 text-white">
            {" "}
            Create Check-in{" "}
          </Button>
          <Button
            variant="outline"
            className="bg-[#40F440] w-28 pb-3  h-8 text-[#3D3D3D]">
            Request Review
          </Button>
        </div>
      </div>
      <div className="pl-4 flex gap-2  items-center pt-4">
        <div>Show</div>
        <Select>
          <SelectTrigger className="w-[60px] rounded-full border">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent className="">
            <SelectItem value="light">10</SelectItem>
            <SelectItem value="dark">20</SelectItem>
            <SelectItem value="system">30</SelectItem>
          </SelectContent>
        </Select>
        <div>Enteries</div>
        <div className="flex relative px-2">
          <div className="absolute left-14 top-[13px]">
            {/* <Search size={18} /> */}
          </div>
          <Input
            className="rounded-full border-2"
            placeholder="Search"
            type="search"
          />
        </div>
      </div>
      <Table className="my-4">
        <TableHeader>
          <TableRow>
            <TableHead className="bg-[#631363] text-white ">Employee</TableHead>
            <TableHead className="bg-[#631363] text-white ">
              Total Rating
            </TableHead>
            <TableHead className="bg-[#631363] text-white ">Average</TableHead>
            <TableHead className="bg-[#631363] text-white ">
              Requested
            </TableHead>
            <TableHead className="bg-[#631363] text-white ">
              Completed
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {employees.map((invoice) => (
            <TableRow key={invoice.totalRating}>
              <TableCell className="font-medium">{invoice.name}</TableCell>
              <TableCell>{invoice.totalRating}</TableCell>
              <TableCell>{invoice.averageRating}</TableCell>
              <TableCell>{invoice.tasksRequested}</TableCell>
              <TableCell>{invoice.tasksCompleted}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex py-4 justify-between px-2">
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
  );
}
