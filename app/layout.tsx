import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "./(main)/_components/header";
import { Footer } from "./(main)/_components/footer";

const poppinsFonts = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Windsor | Learn English and Spanish",
  description: "Learn English and Spanish with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-gray-50 text-darkGray ${poppinsFonts.className} antialiased`}
      >
        <Header />
        <main className="min-h-screen p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
