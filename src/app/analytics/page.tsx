"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function GET() {
  const { data: session, status } = useSession({ required: true });

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
                              {/* session.user.profile.accounts.id   */}
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
