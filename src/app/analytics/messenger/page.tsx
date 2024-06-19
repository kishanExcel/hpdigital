// import Messenger from "@/components/Messenger";
// import { getConversationsById, getConversations } from "../../actions/action";
// import MessengerHeader from "@/components/MessengerHeader";
// export default async function Page({ searchParams }) {
//   // const params = useSearchParams;()
//   const chatList = await getConversations(searchParams?.pageId);
//   return (
//     <div>
//       <MessengerHeader chatList={chatList} />
//     </div>
//   );
// }

import MessengerGroup from "@/app/_components/MessengerGroup";

export default function Page() {
  return (
    <div>
      <MessengerGroup />
    </div>
  );
}
