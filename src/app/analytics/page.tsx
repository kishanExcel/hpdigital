"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Pencil } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function GET() {
  const { data: session, status } = useSession({ required: true });
  interface AdDataItem {
    id: string;
    name: string;
    status: string;
  }

  const [adData, setAdData] = useState<AdDataItem[]>([]);
  const [adId, setAdId] = useState(null);

  async function getAdAccounts() {
    try {
      const response = await axios.get("https://graph.facebook.com/v20.0/me", {
        params: {
          fields: "adaccounts",
          access_token: (session as any).accessToken,
        },
      });

      const adAccounts = response.data.adaccounts.data;
      setAdId(adAccounts[0].account_id);
    } catch (error) {
      console.error("Failed to fetch ad accounts:", error);
      throw error;
    }
  }

  async function getAdCampaigns() {
    if (!adId) return;

    try {
      const response = await axios.get(
        `https://graph.facebook.com/v20.0/act_${adId}/campaigns`,
        {
          params: {
            fields: "id,name,status,adsets{id,name},ads{adset_id,name}",
            limit: 100,
            access_token: (session as any).accessToken,
          },
        }
      );
      setAdData(response.data.data);
    } catch (error) {
      console.error("Failed to fetch ad campaigns:", error);
      throw error;
    }
  }

  useEffect(() => {
    getAdAccounts();
  }, []);

  useEffect(() => {
    getAdCampaigns();
  }, [adId]);

  return (
    <>
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="text-lg font-bold">{session?.user?.name}</div>
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
                    {session?.user?.profile?.accounts?.data?.map(
                      (item: any, index: number) => (
                        <div className="flex justify-between gap-4" key={index}>
                          <div className="p-4">
                            <div className="text-lg font-bold" key={index}>
                              {item?.name}{" "}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                              {item?.category}
                            </div>
                          </div>
                          <div className="p-4 text-center">
                            <div className="flex items-center gap-2">
                              <Link
                                href={`/analytics/messenger?pageId=${item?.id}`}
                                className="bg-gray-200 dark:bg-gray-700 font-semibold text-xs px-3 py-1 rounded-full">
                                Chats
                              </Link>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="text-center  text-xl font-semibold p-4">
                Click below to Create and manage you Ad Campaign and Ad Sets
              </div>
              <nav className="flex space-x-4  py-4 overflow-auto">
                <div className="w-full flex flex-col gap-3 justify-center">
                  <Button className="text-gray-900 bg-blue-500 hover:bg-blue-600">
                    <Link
                      href={`/analytics/adsCampaign?adId=${adId}`}
                      className="bg-blue-500 text-white hover:bg-blue-600 font-semibold text-xs px-3 py-1 rounded-full">
                      Create a Campaign
                    </Link>
                  </Button>
                  <Button className="text-gray-900 bg-blue-500 hover:bg-blue-600">
                    <Link
                      href={`/analytics/adCreative?adId=${adId}`}
                      className="bg-blue-500 text-white hover:bg-blue-600 font-semibold text-xs px-3 py-1 rounded-full">
                      Create an AdCreative
                    </Link>
                  </Button>
                </div>
              </nav>
              {adData?.length > 0 ? (
                <div className="bg-slate-100 flex flex-col space-y-2 rounded-xl p-2">
                  <div className="text-md font-semibold pl-4">
                    All Campaigns listed
                  </div>
                  {adData?.map((item, index) => (
                    <div
                      className="flex justify-between items-center bg-white gap-4 rounded-xl p-2"
                      key={index}>
                      <div className="font-normal text-xs" key={index}>
                        {item.name}
                      </div>
                      <div className="flex items-center">
                        <Button className="">
                          <Link
                            href={`/analytics/adSet?campaignId=${item.id}&adId=${adId}`}
                            className=" text-white  font-semibold text-xs rounded-full">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger>
                                  <Pencil color="black" size={20} />
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className="text-black">Create an adSet</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                        </Button>
                        <div key={index} className="text-xs font-normal">
                          {item.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-md font-semibold pl-4">
                  No campigns here
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  );
}
