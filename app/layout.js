import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Get Me A Chai - Fund your projects with chai",
  description: "This website is a crowdfunding platform for creators.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SessionWrapper>
          <Navbar />
          <div className="min-h-[78vh] bg-[#00081C] [background-image:radial-gradient(circle,_rgba(5,_30,_65,_0.35)_1px,_transparent_1px)] [background-size:8px_8px] text-white">
            {children}
          </div>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}
