import MobileHeader from "@/components/Header";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MobileHeader />
        {children}
      </body>
    </html>
  );
}
