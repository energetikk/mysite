import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from '@/components/NavBar/NavBar'
import Contacts from '@/components/contacts/contacts'
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "Pavel Demin | Frontend developer",
  description: "Современные web-технологии!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <section>
          <div className="min-h-screen bg-gray-200">
            <div className=" mx-auto container py-8">
              <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                <div className="col-span-4 sm:col-span-3">
                  <Contacts />
                </div>
                <div className="col-span-4 sm:col-span-9 bg-white shadow rounded-lg p-6">
                  <NavBar />
                  {children}
                </div>
              </div>
            </div>
          </div>

        </section>

      </body>
    </html>

  )
}
