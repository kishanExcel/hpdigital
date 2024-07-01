"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts";

// Calculate the proportions based on the total for scaling the bars
const calculateProportions = (data) => {
  return data.map((entry) => {
    const total = entry.value1 + entry.value2;
    return {
      ...entry,
      value1Percent: (entry.value1 / total) * 100,
      value2Percent: (entry.value2 / total) * 100,
    };
  });
};

const data = [
  { name: "Today", value1: 7, value2: 5, total: 12 },
  { name: "This Week", value1: 30, value2: 101, total: 131 },
  { name: "This Month", value1: 120, value2: 37, total: 157 },
];

const normalizedData = calculateProportions(data);

const BarGraph = () => {
  return (
    <>
      <div className="space-y-7">
        {data.map((item, index) => (
          <div className="text-nowrap font-semibold text-[#6D6D6D]" key={index}>
            {item.name}
          </div>
        ))}
      </div>
      <ResponsiveContainer width="100%" height={120}>
        <BarChart
          data={normalizedData}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
          <XAxis type="number" hide />
          {/* <YAxis
            type="category"
            dataKey="name"
            axisLine={false}
            tickLine={false}
            // width={100}
          /> */}
          <Bar
            dataKey="value1Percent"
            stackId="a"
            radius={[10, 0, 0, 10]}
            barSize={40}
            fill="#5E165E">
            <LabelList dataKey="value1" position="center" fill="white" />
          </Bar>
          <Bar
            dataKey="value2Percent"
            stackId="a"
            fill="#33FF33"
            barSize={40}
            radius={[0, 10, 10, 0]}>
            <LabelList dataKey="value2" position="center" fill="black" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div className="space-y-6 pt-1">
        {data.map((item, index) => (
          <div className="text-nowrap font-semibold text-[#6D6D6D]" key={index}>
            {item.total}
          </div>
        ))}
      </div>
    </>
  );
};

export default BarGraph;
