import { getData } from "../actions/action";

export default async function Page() {
  const data = await getData();

  console.log("Data of jsonplaceholder", data);
  return <div>Fetch Data</div>;
}
