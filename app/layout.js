import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "kendaraan",
  description: "kendaraan favorit anda",
};

export default function RootLayout({ children }) {
  return (
    <>
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-gray-800 text-white py-4">
              <div className="container mx-auto px-4 text-center text-gray-600">
                <p>aku selalu di depan</p>
              </div>
            </footer>
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
