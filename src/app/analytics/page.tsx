// "use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getData, getConversations } from "../actions/action";
import Image from "next/image";
// import dynamic from "next/dynamic";
// const ResponsiveBar = dynamic(
//   () => import("@nivo/bar").then((m) => m.ResponsiveBar),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );
// const ResponsiveLine = dynamic(
//   () => import("@nivo/line").then((m) => m.ResponsiveLine),
//   {
//     loading: () => <p>Loading...</p>,
//     ssr: false,
//   }
// );
export default async function Component() {
  const data = await getData();
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* <Avatar>
            <Image width={0} height={0} src="" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar> */}
          <div>
            <h1 className="text-lg font-bold">{data?.name}</h1>
            {/* <p className="text-sm text-gray-400">john@example.com</p> */}
          </div>
        </div>
        <nav className="flex items-center gap-4">
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Overview
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Pages
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Analytics
          </Link>
          <Link
            href="#"
            className="text-sm hover:text-gray-300"
            prefetch={false}>
            Settings
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-gray-100 dark:bg-gray-800 p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Enrolled
                </p>
                <p className="text-2xl font-bold">1,234</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Active
                </p>
                <p className="text-2xl font-bold">987</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Completed
                </p>
                <p className="text-2xl font-bold">789</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Replied
                </p>
                <p className="text-2xl font-bold">654</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Reply %
                </p>
                <p className="text-2xl font-bold">67%</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Status
                </p>
                <p className="text-2xl font-bold">Active</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      {data?.accounts?.data?.map((item: any, index: number) => (
                        <div key={index}>
                          <h3 className="text-lg font-bold" key={index}>
                            {item?.name}{" "}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item?.category}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Link
                        href="/messenger"
                        className="bg-gray-200 dark:bg-gray-700 font-semibold text-xs px-2 py-1 rounded-full">
                        Chats
                      </Link>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ads
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Posts
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">123</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">4,567</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">789</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">321</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Messages
                      </p>
                      <p className="text-xl font-bold">654</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Impressions
                      </p>
                      <p className="text-xl font-bold">12,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Clicks
                      </p>
                      <p className="text-xl font-bold">987</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversions
                      </p>
                      <p className="text-xl font-bold">75</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Marketing</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkmarketing
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ads
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Posts
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">456</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">9,876</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">1,234</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">642</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Messages
                      </p>
                      <p className="text-xl font-bold">987</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Impressions
                      </p>
                      <p className="text-xl font-bold">45,678</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Clicks
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversions
                      </p>
                      <p className="text-xl font-bold">150</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
            </CardHeader>
            {/* <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Audience Growth</h3>
                  <LineChart className="aspect-[4/3]" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Engagement Metrics</h3>
                  <BarChart className="aspect-[4/3]" />
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold">Ad Performance</h3>
                  <LineChart className="aspect-[4/3]" />
                </div>
              </div>
            </CardContent> */}
          </Card>
        </div>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Top Performing Pages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Blog</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkblog
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Blog
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Posts
                      </p>
                      <p className="text-xl font-bold">789</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Likes
                      </p>
                      <p className="text-xl font-bold">12,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Comments
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Shares
                      </p>
                      <p className="text-xl font-bold">654</p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">Hubspark Store</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubsparkstore
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="bg-gray-200 dark:bg-gray-700 text-xs">
                        Ecommerce
                      </Badge>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Products
                      </p>
                      <p className="text-xl font-bold">456</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Orders
                      </p>
                      <p className="text-xl font-bold">2,345</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Revenue
                      </p>
                      <p className="text-xl font-bold">$123,4</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Conversion Rate
                      </p>
                      <p className="text-xl font-bold">15%</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <CardHeader>
              <CardTitle>Top Performing Ads</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold">HubSpark Promo</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        @hubSpark promo
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

// function BarChart(props: any) {
//   return (
//     <div {...props}>
//       <ResponsiveBar
//         data={[
//           { name: "Jan", count: 111 },
//           { name: "Feb", count: 157 },
//           { name: "Mar", count: 129 },
//           { name: "Apr", count: 150 },
//           { name: "May", count: 119 },
//           { name: "Jun", count: 72 },
//         ]}
//         keys={["count"]}
//         indexBy="name"
//         margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
//         padding={0.3}
//         colors={["#2563eb"]}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 4,
//           tickPadding: 16,
//         }}
//         gridYValues={4}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         tooltipLabel={({ id }) => `${id}`}
//         enableLabel={false}
//         role="application"
//         ariaLabel="A bar chart showing data"
//       />
//     </div>
//   );
// }

// function LineChart(props: any) {
//   return (
//     <div {...props}>
//       <ResponsiveLine
//         data={[
//           {
//             id: "Desktop",
//             data: [
//               { x: "Jan", y: 43 },
//               { x: "Feb", y: 137 },
//               { x: "Mar", y: 61 },
//               { x: "Apr", y: 145 },
//               { x: "May", y: 26 },
//               { x: "Jun", y: 154 },
//             ],
//           },
//           {
//             id: "Mobile",
//             data: [
//               { x: "Jan", y: 60 },
//               { x: "Feb", y: 48 },
//               { x: "Mar", y: 177 },
//               { x: "Apr", y: 78 },
//               { x: "May", y: 96 },
//               { x: "Jun", y: 204 },
//             ],
//           },
//         ]}
//         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
//         xScale={{
//           type: "point",
//         }}
//         yScale={{
//           type: "linear",
//         }}
//         axisTop={null}
//         axisRight={null}
//         axisBottom={{
//           tickSize: 0,
//           tickPadding: 16,
//         }}
//         axisLeft={{
//           tickSize: 0,
//           tickValues: 5,
//           tickPadding: 16,
//         }}
//         colors={["#2563eb", "#e11d48"]}
//         pointSize={6}
//         useMesh={true}
//         gridYValues={6}
//         theme={{
//           tooltip: {
//             chip: {
//               borderRadius: "9999px",
//             },
//             container: {
//               fontSize: "12px",
//               textTransform: "capitalize",
//               borderRadius: "6px",
//             },
//           },
//           grid: {
//             line: {
//               stroke: "#f3f4f6",
//             },
//           },
//         }}
//         role="application"
//       />
//     </div>
//   );
// }
