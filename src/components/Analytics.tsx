"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

interface Account {
  id: string;
  name: string;
  category: string;
  access_token: string;
}

interface AnalyticsData {
  id: string;
  name: string;
  accounts: {
    data: Account[];
  };
}

interface AnalyticsProps {
  data: AnalyticsData | null;
}

export default function Analytics({ data }: AnalyticsProps) {
  console.log("this is the data", data);
  useEffect(() => {
    if (data && data?.accounts) {
      const token = data?.accounts?.data[0]?.access_token;
      sessionStorage.setItem("access_token", token);
      console.log("Token set in session storage:", token);
    }
  }, [data]);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <Avatar>
            <Image width={0} height={0} src="" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar> */}
          <div>
            <h1 className="text-lg font-bold">{data?.name}</h1>
            {/* <p className="text-sm text-gray-400">john@example.com</p> */}
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Overview
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Pages
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Analytics
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enrolled
                </p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Active
                </p>
                <p className="text-2xl font-bold">987</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Completed
                </p>
                <p className="text-2xl font-bold">789</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Replied
                </p>
                <p className="text-2xl font-bold">654</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reply %
                </p>
                <p className="text-2xl font-bold">67%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Status
                </p>
                <p className="text-2xl font-bold">Active</p>
              </div>
            </CardContent>
          </Card>
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
                        href="/messenger"
                        className="bg-gray-200 dark:bg-gray-700 font-semibold text-xs px-2 py-1 rounded-full">
                        Chats
                      </Link>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ads
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Posts
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">123</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">4,567</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">789</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">321</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Messages
                      </p>
                      <p className="text-xl font-bold">654</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Impressions
                      </p>
                      <p className="text-xl font-bold">12,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Clicks
                      </p>
                      <p className="text-xl font-bold">987</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversions
                      </p>
                      <p className="text-xl font-bold">75</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Marketing</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkmarketing
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ads
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Posts
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">456</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">9,876</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">1,234</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">642</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Messages
                      </p>
                      <p className="text-xl font-bold">987</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Impressions
                      </p>
                      <p className="text-xl font-bold">45,678</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Clicks
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversions
                      </p>
                      <p className="text-xl font-bold">150</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            {/* <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Audience Growth</h3>
                  <LineChart className="aspect-[4/3]" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Engagement Metrics</h3>
                  <BarChart className="aspect-[4/3]" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Ad Performance</h3>
                  <LineChart className="aspect-[4/3]" />
                </div>
              </div>
            </CardContent> */}
          </Card>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Blog</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkblog
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Blog
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">789</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">12,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">654</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Store</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkstore
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ecommerce
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Products
                      </p>
                      <p className="text-xl font-bold">456</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Orders
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Revenue
                      </p>
                      <p className="text-xl font-bold">$123,4</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversion Rate
                      </p>
                      <p className="text-xl font-bold">15%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Top Performing Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">HubSpark Promo</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubSpark promo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
