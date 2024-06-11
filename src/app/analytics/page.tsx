import { Badge } from "@/components/ui/badge";
import { getData } from "../actions/action";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { BarChart, PieChart, LineChart } from "@/components/Chart";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { VariantTabs } from "../_components/campaign-tabbar";

export default async function GET() {
  const apiData = await fetch("http://localhost:3000/api/getData", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const token = await apiData.json();

  const data = await getData();

  console.log("token of page", data);
  return (
    <>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-lg font-bold">{data?.name}</div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto mt-8 px-4 sm:px-6 lg:px-8">
        <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    {data?.accounts?.data?.map((item: any, index: number) => (
                      <div key={index}>
                        <h3 className="text-lg font-bold" key={index}>
                          {item?.name}{" "}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item?.category}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      href="analytics/messenger"
                      className="bg-gray-200 dark:bg-gray-700 font-semibold text-xs px-3 py-1 rounded-full">
                      Chats
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="text-center  text-xl font-semibold p-4">
                Click below to Create and manage you Ad Campaign and Ad Sets
              </div>
              {/* <nav className="flex space-x-4  py-4">
                <Button className="text-gray-900 bg-blue-500 hover:bg-blue-600">
                  Create a Campaign
                </Button>
                <Link href={""}>
                  {" "}
                  <Button
                    className="text-gray-900 bg-blue-500 hover:bg-blue-600"
                    variant="ghost">
                    Create an Ad Set
                  </Button>
                </Link>
                <Button
                  className="text-gray-900 bg-blue-500 hover:bg-blue-600"
                  variant="ghost">
                  Create Ad Creative
                </Button>
                <Button
                  className="text-gray-900 bg-blue-500 hover:bg-blue-600"
                  variant="ghost">
                  Create the Ad
                </Button>
                <Button
                  className="text-gray-900 bg-blue-500 hover:bg-blue-600"
                  variant="ghost">
                  Publish your Ad
                </Button>
              </nav> */}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
