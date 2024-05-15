import * as React from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { BorderLinearProgress } from "@/components/ProgressBars";
import {
  Table,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { employees } from "@/utils/statsTableData";
import { Flag } from "lucide-react";
import { ButtonGroup, Rating } from "@mui/material";
import Image from "next/image";
import greenArrow from "../../../assets/images/greeenArrow.png";
import redArrow from "../../../assets/images/redArrow.png";

export default function Page() {
  const steps = [
    "10th Nov 2023",
    "10th Dec 2023",
    "10th Jan 2024",
    "10th Feb 2024",
    "10th Mar 2024",
    "10th Apr 2024",
  ];

  return (
    <div className="pb-6 w-full">
      <div className=" w-full rounded-md mt-4">
        <div className="text-xl max-w-fit px-16 mx-auto rounded-xl font-bold p-2 bg-[#631363] text-white ">
          Performance Overview
        </div>
        <div className="px-6 flex flex-col gap-2 py-2">
          <div>
            <div className="text-base w-full rounded-xl  border bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
              <div className="flex justify-between">
                <div>All Keywords Avg. </div>
                <div>
                  <ButtonGroup variant="text" aria-label="Basic button group">
                    <Button
                      variant="outline"
                      className="border-r-0 bg-[#631363] h-8 text-white">
                      11.6
                    </Button>
                    <Button className="bg-[#E0E0E0] h-8" variant="outline">
                      1.5
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>
          </div>
          <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
            <div className="flex justify-between">
              <div> Total Keywords</div>
              <div>
                <Button
                  className="bg-[#631363] text-white h-8"
                  variant="outline">
                  5
                </Button>
              </div>
            </div>
          </div>
          <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image
                  className="h-4"
                  src={greenArrow}
                  width={10}
                  height={5}
                  alt="Picture of the Arrow"
                />
                <div className="px-2">Keywords Up</div>
              </div>
              <div>
                <Button
                  className="bg-[#631363] text-white h-8"
                  variant="outline">
                  4
                </Button>
              </div>
            </div>
          </div>
          <div className="text-base w-full rounded-xl  border-2  bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D] ">
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <Image
                  src={redArrow}
                  className="h-4"
                  width={10}
                  height={5}
                  alt="Picture of the Arrow"
                />
                <div> Keywords Down</div>
              </div>
              <div>
                <Button
                  className="bg-[#631363] h-8 text-white"
                  variant="outline">
                  1
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 py-2 text-[#6D6D6D] font-semibold text-lg">
          Results for{" "}
          <span className="text-[#631363] font-bold">‘roof repair’</span>
          <div className="py-2">
            <Stepper activeStep={5} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        <div className="px-4 flex w-full  py-2 items-center justify-center flex-col gap-2">
          <div className="bg-[#CF232A] text-center h-20 font-semibold text-3xl  text-white w-full rounded-md">
            11.6{" "}
            <div className="text-white text-center font-medium text-base">
              Average Map Rank{" "}
            </div>
          </div>
          <div className=" font-bold  w-full h-20 border-2 text-3xl text-[#6D6D6D] text-center border-[#6D6D6D] rounded-md">
            <div className="flex justify-center w-full items-center">
              <div className="text-3xl text-center">2</div>
              <Image
                className="h-3 mt-2 ml-1"
                src={greenArrow}
                width={10}
                height={5}
                alt="Picture of the Arrow"
              />
            </div>
            <div className="text-[#6D6D6D] text-center pt-1 text-base font-semibold">
              Change
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="font-semibold text-base w-full text-[#6D6D6D]">
            <div className="flex justify-between w-full">
              <div>High Ranking Grid Point</div>
              <div className="text-[#00914C]">2</div>
            </div>
            <BorderLinearProgress value={38} />
          </div>
          <div className="font-semibold text-base text-[#6D6D6D]">
            <div className="flex justify-between w-full">
              <div> Medium-rank Grid Points</div>
              <div className="text-[#FAAC18]">7</div>
            </div>
            <BorderLinearProgress value={58} />
          </div>
          <div className="font-semibold text-base text-[#6D6D6D]">
            <div className="flex justify-between w-full">
              <div> Low-rank Grid Points</div>
              <div className="text-[#00914C]">16</div>
            </div>
            <BorderLinearProgress value={80} />
          </div>
        </div>
        <div className="h-64 p-4 mb-2 mx-2 rounded-md border bg-white"></div>
        <div className="font-semibold text-[#6D6D6D] text-2xl px-6 bg-[#F4F4F4] p-2">
          Overall Top Ranking Competitors for{" "}
          <span className="text-[#631363] font-bold">‘roof repair’</span>
          <p className="text-base font-base tracking-tighter py-2">
            Top-performing search results competitors, based on the Grid Points
            for this keyword.
          </p>
        </div>
        <Table className="bg-[#F4F4F4]">
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#631363] text-white font-normal">
                Business Name
              </TableHead>
              <TableHead className="bg-[#631363] text-white font-normal">
                Avg. Rank
              </TableHead>
              <TableHead className="bg-[#631363] text-white font-normal">
                Reviews
              </TableHead>
              <TableHead className="bg-[#631363] text-white font-normal">
                Rating
              </TableHead>
              <TableHead className="bg-[#631363] text-white font-normal">
                Primary Categories
              </TableHead>
              <TableHead className="bg-[#631363] text-white font-normal">
                Additional Categories
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((invoice) => (
              <TableRow key={invoice.totalRating}>
                <TableCell className="font-medium">
                  {invoice.name}{" "}
                  <div className="py-2">
                    <Flag />
                  </div>
                </TableCell>
                <TableCell>{invoice.totalRating}</TableCell>
                <TableCell>{invoice.averageRating}</TableCell>
                <TableCell className="text-center">
                  <Rating
                    name="read-only"
                    value={invoice.averageRating}
                    readOnly
                  />
                  <div>{invoice.tasksRequested} </div>
                </TableCell>
                <TableCell>{invoice.tasksCompleted} </TableCell>
                <TableCell>{invoice.additional}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
