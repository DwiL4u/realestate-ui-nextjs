import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScroolToTop from "../components/Helper/ScroolToTop";

const font = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Real Estate | Next.js",
  description: "Real Estate website using Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {/* navbar */}
        <ResponsiveNav />
        {children}
        {/* footer */}
        <Footer />
        <ScroolToTop />
      </body>
    </html>
  );
}
