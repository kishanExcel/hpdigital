import { getData } from "../actions/action";

export default async function Page() {
  const data = await getData();

  console.log("Data of jsonplaceholder", data);
  return (
    <div>
      <div>Id: {data?.id}</div>
      <div>Username: {data?.name}</div>
    </div>
  );
}
