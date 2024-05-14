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
    <div className="mb-6">
      <div className=" mx-6 rounded-md mt-4">
        <div className="text-2xl w-full rounded-md  font-bold p-2 bg-[#631363] text-white ">
          Performance Overview
        </div>
        <div className="px-4 flex flex-col gap-2 py-2">
          <div>
            <div className="text-base w-full rounded-md  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
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
          <div className="text-base w-full rounded-md  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
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
          <div className="text-base w-full rounded-md  border-2  bg-[#F4F4F4] p-2 font-semibold  text-[#6D6D6D] ">
            <div className="flex justify-between">
              <div> Keywords Up</div>
              <div>
                <Button
                  className="bg-[#631363] text-white h-8"
                  variant="outline">
                  4
                </Button>
              </div>
            </div>
          </div>
          <div className="text-base w-full rounded-md  border-2  bg-[#F4F4F4] p-2 font-semibold text-[#6D6D6D] ">
            <div className="flex justify-between">
              <div> Keywords Down</div>
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
          Results for <span className="text-[#631363]">roof repair</span>
          <div className="py-2">
            <Stepper activeStep={1} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel sx={{ fontSize: "0.25rem" }}>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </div>
        </div>
        <div className="px-4 flex w-full  items-center justify-center flex-col gap-2">
          <div className="bg-[#CF232A] text-center h-20 font-semibold text-3xl  text-white w-full rounded-md">
            11.6{" "}
            <div className="text-white text-center font-medium text-base">
              Average Map Rank{" "}
            </div>
          </div>
          <div className=" font-bold  w-full h-20 border-2 text-3xl text-[#6D6D6D] text-center border-[#6D6D6D] rounded-md">
            2{" "}
            <div className="text-[#6D6D6D] text-center text-base font-semibold">
              Change
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4">
          <div className="font-semibold text-base">
            High Ranking Grid Point
            <BorderLinearProgress variant="determinate" value={38} />
          </div>
          <div className="font-semibold text-base">
            Medium-rank Grid Points
            <BorderLinearProgress variant="determinate" value={58} />
          </div>
          <div className="font-semibold text-base">
            Low-rank Grid Points
            <BorderLinearProgress variant="determinate" value={80} />
          </div>
        </div>
        <div className="h-64 p-4 mx-4 rounded-md bg-white"></div>
        <div className="font-semibold text-[#6D6D6D] text-xl p-4">
          Overall Top Ranking Competitors for{" "}
          <span className="text-[#631363] ">roof pairs</span>
          <p className="text-base font-base">
            Top-performing search results competitors, based on the Grid Points
            for this keyword.
          </p>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-[#631363] text-white ">
                Business Name
              </TableHead>
              <TableHead className="bg-[#631363] text-white ">
                Avg. Rank
              </TableHead>
              <TableHead className="bg-[#631363] text-white ">
                Reviews
              </TableHead>
              <TableHead className="bg-[#631363] text-white ">Rating</TableHead>
              <TableHead className="bg-[#631363] text-white ">
                Primary Categories
              </TableHead>
              <TableHead className="bg-[#631363] text-white ">
                Additional Categories
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {employees.map((invoice) => (
              <TableRow key={invoice.totalRating}>
                <TableCell className="font-medium">
                  {invoice.name} <Flag />
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
