import moment from "moment";
import Link from "next/link";

export default function MessengerHeader(chatList: any) {
  return (
    <div className="w-full bg-white">
      <div className="flex flex-col gap-2 px-2 py-2">
        {chatList.chatList?.coversations?.map((item: any, index: number) => (
          <Link
            className="border-2 rounded-xl p-2"
            href={`messenger/${item.id}`}
            key={index}>
            <div
              className="flex gap-4 justify-between items-center"
              key={index}>
              <div className="text-center">Person {index + 1}</div>
              <div>
                <div className="w-20 h-20 bg-blue-200 rounded-full"></div>
                <div className="text-center">
                  {moment(item.updated_time).format("h:mm A")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
