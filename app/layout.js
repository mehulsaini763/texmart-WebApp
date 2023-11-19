import DataProvider from "./components/DataProvider";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
});

export const metadata = {
  title: "TexMart",
  description: "Online Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={nunito.className}>
      <body className="overflow-x-hidden h-screen bg-neutral-800 lg:min-w-[1024px]">
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
