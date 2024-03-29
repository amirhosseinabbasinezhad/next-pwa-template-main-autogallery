import "./globals.css";
//import type { Metadata } from 'next';
//
//const inter = Inter({ subsets: ["latin"] });
//
//export const metadata: Metadata = {
//  title: "Create Next App",
//  description: "Generated by create next app",
//  manifest: "/manifest.json",
//  viewport: "width=device-width, initial-scale=1",
//  icons: ["/favicon.ico"],
//  themeColor: "#ffffff",
//};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">{children}</body>
    </html>
  );
}
