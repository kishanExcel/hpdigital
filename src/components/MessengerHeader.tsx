"use client";

import moment from "moment";
import Link from "next/link";
// import { chatList } from "@/utils/chatList";
import { ChevronLeft } from "lucide-react";
import { useSearchParams } from "next/navigation";
import Messenger from "./Messenger";
import { useSession } from "next-auth/react";
export default function MessengerHeader(chatList: any, loading: boolean) {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession();
  const id = searchParams?.get("id");
  const pageId = searchParams?.get("pageId");

  if (!chatList) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-2 px-2 py-2">
        {id ? (
          <Messenger loading={loading} chatList={chatList} />
        ) : chatList && chatList?.chatList?.coversations?.length === 0 ? (
          <div>
            <div className="p-4 font-semibold">
              No Chats Available in this Page
            </div>
            <div className="border bg-blue-500 w-fit p-1 ml-4 rounded-lg">
              <Link href="/analytics">
                <div className="flex">
                  <div>
                    {" "}
                    <ChevronLeft color="white" />
                  </div>
                  <div className="text-white font-semibold">Go Back</div>
                </div>
              </Link>
            </div>
          </div>
        ) : (
          chatList.chatList?.coversations?.map((item: any, index: number) => {
            const firstParticipant = item.participants.data[0];
            const latestMessage = item.messages.data[0];
            return (
              <div key={index} className="flex flex-col gap-4 ">
                <Link
                  className="border-2 rounded-xl p-2"
                  href={`/analytics/messenger?id=${item.id}&user=${firstParticipant?.id}&pageId=${pageId}`}>
                  <div className="flex gap-4 items-center w-full">
                    <div className="w-16 flex-shrink-0 h-16 rounded-full bg-slate-500"></div>
                    <div className="flex justify-between w-full">
                      <div>
                        <div className="font-semibold text-lg">
                          {firstParticipant?.name}
                        </div>
                        <div className="font-normal text-slate-400 text-sm">
                          {latestMessage?.message}
                        </div>
                      </div>
                      <div className="text-center font-normal text-slate-400 text-sm">
                        {" "}
                        {moment(latestMessage?.created_time).format("h:mm A")}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
