"use client";

import Messenger from "@/components/Messenger";
import { getConversations } from "../actions/action";
import MessengerHeader from "@/components/MessengerHeader";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function MessengerGroup() {
  const searchParams = useSearchParams();
  const { data: session, status } = useSession({ required: true });
  const [chatList, setChatList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const pageId = searchParams?.get("pageId");
  console.log("pageID from searchParams", pageId);

  useEffect(() => {
    if (status === "authenticated") {
      const account = session?.user?.profile.accounts.data.find(
        (acc: any) => acc.id === pageId
      );
      if (account) {
        const token = account.access_token;
        const fetchConversations = async () => {
          const conversations = await getConversations(pageId, token);
          setChatList(conversations);
          setIsLoading(false);
        };
        fetchConversations();
      }
    }
  }, [pageId, session, status]);

  return (
    <div>
      <MessengerHeader loading={isLoading} chatList={chatList} />
    </div>
  );
}
