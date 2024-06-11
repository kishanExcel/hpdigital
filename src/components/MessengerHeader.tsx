"use client";

import moment from "moment";
import Link from "next/link";
// import { chatList } from "@/utils/chatList";
import { useSearchParams } from "next/navigation";
import Messenger from "./Messenger";
export default function MessengerHeader(chatList: any) {
  const searchParams = useSearchParams();
  const id = searchParams?.get("id");

  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-2 px-2 py-2">
        {id ? (
          <Messenger chatList={chatList} />
        ) : (
          chatList.chatList?.coversations?.map((item: any, index: number) => {
            const firstParticipant = item.participants.data[0];
            const latestMessage = item.messages.data[0];
            return (
              <Link
                className="border-2 rounded-xl p-2"
                href={`/analytics/messenger?id=${item.id}&user=${firstParticipant?.id}`}
                key={index}>
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
            );
          })
        )}
      </div>
    </div>
  );
}
