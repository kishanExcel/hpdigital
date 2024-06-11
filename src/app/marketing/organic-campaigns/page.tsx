import { organic } from "@/utils/dummydata";

export default function OrganicLayout() {
  return (
    <div className="px-2">
      {organic.map((item, index) => (
        <div key={index} className="flex px-2 gap-4 text-sm rounded-lg border">
          <div>
            <div className="font-semibold text-xs  w-24">Name</div>
            <div>{item.name}</div>
          </div>
          <div className="flex gap-2">
            <div>
              <div>Posts</div>
              <div>{item.posts}</div>
            </div>
            <div>
              <div>Likes</div>
              <div>{item.likes}</div>
            </div>
            <div>
              <div>Comments</div>
              <div>{item.comments}</div>
            </div>
            <div>
              <div>Shares</div>
              <div>{item.shares}</div>
            </div>
            <div>
              <div className="text-wrap">Messages</div>
              <div>{item.messages}</div>
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
