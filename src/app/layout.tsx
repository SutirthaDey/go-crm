import Sidebar from "@/components/Sidebar";
import { inter } from "@/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="grid grid-rows-[auto_1fr] h-screen sm:grid-cols-[256px_1fr] sm:grid-rows-[auto_1fr]">
          <div className="bg-yellow-200 sm:row-start-1 sm:col-start-1 sm:row-span-2 sm:block hidden">
            <Sidebar />
          </div>

          <div className="min-h-[70px] sm:min-h-[76px] sm:row-start-1 sm:col-start-2 sm:row-span-1 shadow-sm">
            <Header />
          </div>

          <main className="sm:row-start-2 sm:col-start-2 sm:row-span-1 overflow-y-auto p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
