import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";


export const metadata: Metadata = {
  title: "Home | d.sh",
  description: "Guides and cheatsheets for DevOps and development",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <div className=' min-h-screen bg-neutral-900 min-w-screen text-white pt-1'>
          <Navbar />
          <div className="min-h-[90vh]">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
