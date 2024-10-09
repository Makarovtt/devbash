import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Providers } from "./providers";
import { MenuHeader } from "@/components/header/MenuHeader";
import { ProvidersRedux } from "@/store/ProvidersRedux";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Ресторан в Астрахани «Девичья Башня»",
  description: "Ресторан в Астрахани «Девичья Башня»",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className=" max-w-[2500px] mx-auto">
          <ProvidersRedux>
            <Providers>
              <div className="flex flex-col justify-start items-center min-h-[100vh]">
                <Header />
                <MenuHeader />
                {children}
                <Footer />
              </div>
            </Providers>
          </ProvidersRedux>
        </div>
      </body>
    </html>
  );
}
