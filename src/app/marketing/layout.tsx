import MarketingTab from "../_components/marketing-tabbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#F4F4F4]">
        {" "}
        <MarketingTab />
        {children}
      </body>
    </html>
  );
}
