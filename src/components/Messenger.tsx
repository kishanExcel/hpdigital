"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Send, Smile } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Link from "next/link";
import moment from "moment";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import { useSession } from "next-auth/react";

interface Message {
  id: string;
  text: string;
  message: string;
  from: {
    id: string;
  };
  time: string;
  created_time: string;
  sender: "me" | "other";
}

interface Conversation {
  id: string;
  updated_time: string;
}

interface Data {
  messages: Message[];
}

interface ChatList {
  conversations: Conversation[];
}

interface MessengerProps {
  // data: Data | null;
  chatList: ChatList | null;
  loading: boolean;
}

export default function Messenger({ chatList, loading }: MessengerProps) {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [transformedMessages, setTransformedMessages] = useState<Message[]>([]);

  const searchParams = useSearchParams();
  const id = searchParams?.get("id");
  const user = searchParams?.get("user");
  const pageId = searchParams?.get("pageId");
  const { data: session, status } = useSession();

  function filterConversationsById(chatList: any, conversationId: any) {
    return chatList.chatList.coversations.filter(
      (conversation: any) => conversation.id === conversationId
    );
  }

  const filteredConversations = filterConversationsById(chatList, id);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transformedMessages]);

  useEffect(() => {
    if (filteredConversations && filteredConversations[0]?.messages.data) {
      const messages = filteredConversations[0].messages.data
        .map((message: any) => {
          const sender = message.to.data.some((item: any) => item.id === user)
            ? "me"
            : "other";

          return {
            id: message.id,
            text: message.message,
            time: moment(message.created_time).format("h:mm A"),
            sender: sender,
          };
        })
        .reverse();

      setTransformedMessages(messages);
    }
  }, []);

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      const account = session?.user?.profile.accounts.data.find(
        (acc: any) => acc.id === pageId
      );

      if (account) {
        const token = account.access_token;
        try {
          const response = await axios.post(
            `https://graph.facebook.com/v20.0/${pageId}/messages?access_token=${token}`,
            {
              recipient: {
                id: user,
              },
              messaging_type: "RESPONSE",
              message: {
                text: inputMessage,
              },
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (response.data.recipient_id === user) {
            const newMessage: Message = {
              id: response.data.message_id,
              text: inputMessage,
              message: inputMessage,
              from: { id: session?.user?.id },
              time: moment().format("h:mm A"),
              created_time: moment().toISOString(),
              sender: "me",
            };
            setTransformedMessages((prevMessages) => [
              newMessage,
              ...prevMessages,
            ]);
          }
          setInputMessage("");
        } catch (error) {
          console.error("Error sending message:", error);
        }
      }
    }
  };

  return (
    <div>
      {chatList !== undefined ? (
        <div className="flex justify-center">
          <div className="flex flex-col h-screen bg-[#FFFFFF] w-full md:max-w-[1280px]">
            <div className="flex">
              {chatList?.conversations
                ?.slice()
                .reverse()
                .map((item, index) => (
                  <div className="flex gap-4" key={item.id}>
                    <div className="w-20 h-20 bg-blue-200 rounded-full">
                      <div className="text-center">
                        {moment(item.updated_time).format("h:mm A")}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
            <header className="flex items-center justify-between p-4 bg-blue-500 text-white">
              <Button className="px-0 py-0 h-fit" variant="ghost">
                <Link href="/analytics/messenger">
                  <ChevronLeft size={32} />
                </Link>
              </Button>
              <div className="relative w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="absolute top-0 right-0 block w-3 h-3 bg-green-500 rounded-full"></span>
              </div>
            </header>
            <main className="flex flex-col flex-grow p-4 overflow-auto">
              {transformedMessages?.map((message: any) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.sender === "me" ? "justify-end" : "justify-start"
                  } mb-2`}>
                  <div className="flex flex-col">
                    <div
                      className={`px-4 py-2 rounded-xl ${
                        message.sender === "me"
                          ? "bg-[#C3CBDD] rounded-tr-none"
                          : "bg-[#E0E0E0] rounded-tl-none"
                      } max-w-xs`}>
                      <p>{message.text}</p>
                    </div>
                    <div className="block text-xs pr-2 py-1 text-right">
                      {message.time}
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </main>
            <div className="flex relative items-center p-4 bg-white">
              <Input
                type="text"
                placeholder="Start a conversation"
                className="flex-grow p-4 h-14 border outline-none border-gray-300 rounded-full focus:outline-none"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <div className="flex absolute right-6">
                <Button className="px-0 py-0 h-fit" variant="ghost">
                  <Smile size={24} color="#E0E0E0" className="mr-2" />
                </Button>
                <Button
                  className="px-0 py-0 pr-2 h-fit"
                  variant="ghost"
                  onClick={handleSendMessage}>
                  <Send color="#1976D3" size={24} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading Please wait...</div>
      )}
    </div>
  );
}
