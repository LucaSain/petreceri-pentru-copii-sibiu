import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/ui/Navbar";
import Footer from "@/components/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  icons: {
    icon: "/favicon.ico",
  },
  title: "Petreceri copii Sibiu",
  description:
    "Petreceri pentru copii Sibiu organizează evenimente pentru copii de peste 8 ani in orașul Sibiu si vecinătăți. Activitatile noastre s-au conturat de-a lungul timpului ca răspuns la nevoile copiilor parintilor de a oferi entertainment pentru micutii lor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar /> {children}
        <Footer />
      </body>
    </html>
  );
}
