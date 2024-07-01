"use client";
import { useEffect, useState } from "react";
import { Database } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Button } from "./ui/button";
import { data } from "../utils/chartData";
import Image from "next/image";

export default function MyGraph({ heading, graphUi, chartData }) {
  const [isMounted, setIsMounted] = useState(false);
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (index: any) => {
    setExpanded(index === expanded ? null : index);
  };

  console.log("this is headingdata", heading);
  console.log("this is graphui", graphUi);
  console.log("this is chartData", chartData);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className=" rounded-xl mx-2">
      <div className=" flex gap-4 flex-col">
        {graphUi.map((item: any, index: number) => (
          <div
            key={index}
            className="flex bg-[#E0E0E0] flex-col gap-4 text-sm w-full rounded-lg border">
            <div className="flex w-full ">
              <div className="font-semibold flex-grow text-white px-1 text-xs w-32 bg-[#631363] p-1  rounded-tl-xl">
                {heading.names}
              </div>
              <div className="text-wrap w-20 font-semibold  text-white bg-[#631363]  text-xs p-1">
                {heading.impressions}
              </div>
              <div className="text-wrap w-12 font-semibold  text-white bg-[#631363]  text-xs p-1">
                {heading.clicks}
              </div>
              <div className="text-wrap w-20 font-semibold  text-white bg-[#631363]  text-xs p-1">
                {heading.conversions}
              </div>
              <div className="text-wrap w-20 font-semibold  text-white bg-[#631363]  text-xs p-1 rounded-tr-xl"></div>
            </div>{" "}
            <div className="gap-2 py-1 px-2">
              <div className="flex">
                <div className="w-32 gap-2 flex flex-shrink-0 flex-grow text-[#6D6D6D] font-semibold text-sm">
                  <Image src={item.img} alt="logo" height={0} width={0} />
                  <div className="text-xs pt-1 text-wrap  font-semibold text-[#6D6D6D]">
                    {item.name}
                  </div>
                </div>
                <div className="w-20 text-start text-[#6D6D6D] font-semibold text-sm">
                  <div className="text-xs  pt-1">{item.posts}</div>{" "}
                </div>
                <div className="w-12 text-[#6D6D6D] font-semibold text-sm">
                  <div className="text-xs  pt-1">{item.likes}</div>
                </div>
                <div className="w-20 text-[#6D6D6D] font-semibold text-sm">
                  <div className="text-xs  pt-1">{item.comments}</div>
                </div>
                <div className="w-20 text-[#6D6D6D] font-semibold text-sm">
                  <Button
                    onClick={() => handleExpand(index)}
                    className="text-[#F4F4F4] text-xs bg-[#631363] mt-1 font-normal h-5 w-12 outline-none rounded-xl">
                    Details
                  </Button>
                </div>
              </div>
              <div className="my-2">
                {expanded === index && (
                  <div className="flex flex-col space-y-2  ">
                    {chartData.map((item: any, index: number) => (
                      <div key={index} className="space-y-6">
                        <div className="bg-[#F4F4F4] h-96 rounded-xl">
                          <div className="flex flex-col float-end pr-4">
                            <div className="font-semibold text-[#6D6D6D] text-lg pr-6">
                              {item.textsSentData.title}
                            </div>
                            <div className="font-semibold text-lg text-[#631363]">
                              {item.textsSentData.money}
                            </div>
                          </div>
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                              width={500}
                              height={400}
                              data={data}
                              margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 100,
                              }}>
                              <defs>
                                <linearGradient
                                  id="color1"
                                  x1="0"
                                  y1="0"
                                  x2="0"
                                  y2="1">
                                  <stop
                                    offset="5%"
                                    stopColor="#1A1A1A"
                                    stopOpacity={0.9}
                                  />
                                  <stop
                                    offset="100%"
                                    stopColor="#631363"
                                    stopOpacity={0.9}
                                  />
                                </linearGradient>
                              </defs>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis
                                dataKey="name"
                                angle={290}
                                dy={30}
                                dx={-10}
                                textAnchor="middle"
                                interval={0}
                              />
                              <YAxis ticks={item.ticks} />
                              <Tooltip />
                              <Area
                                type="monotone"
                                dataKey="uv"
                                stroke="#631363"
                                fill="url(#color1)"
                              />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                        <div className="rounded-xl flex justify-between p-4 bg-[#F4F4F4]">
                          <div className="font-semibold text-[#6D6D6D]">
                            {item.clientData.name}
                          </div>
                          <div className="font-semibold text-[#631363]">
                            {item.clientData.money}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
