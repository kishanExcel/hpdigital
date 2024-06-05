import Messenger from "@/components/Messenger";
import { getConversationsById, getConversations } from "../../actions/action";
import MessengerHeader from "@/components/MessengerHeader";
export default async function Page() {
  const chatList = await getConversations();
  return (
    <div>
      <MessengerHeader chatList={chatList} />
    </div>
  );
}
