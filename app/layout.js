import DataProvider from "./components/DataProvider";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "TexMart",
  description: "Online Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden h-screen bg-neutral-800 lg:min-w-[1024px]">
        <DataProvider>
          <Navbar />
          {children}
        </DataProvider>
      </body>
    </html>
  );
}
