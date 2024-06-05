import Messenger from "@/components/Messenger";
import {
  getConversationsById,
  getConversations,
} from "../../../actions/action";
export default async function Page({ params }: { params: { slug: string } }) {
  const data = await getConversationsById(params.slug);
  const chatList = await getConversations();
  console.log("Chats Conversations:", chatList);

  console.log("Chats List:", data);
  return (
    <div>
      <Messenger chatList={chatList} data={data} />
    </div>
  );
}
