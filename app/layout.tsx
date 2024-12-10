import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "./(main)/_components/header";
import { Footer } from "./(main)/_components/footer";
import { Providers } from "@/providers/providers";

const robotoFonts = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
        className={`${robotoFonts.variable} ${robotoFonts.className} antialiased`}
      >
        <Providers>
          <Header />
          <main className="min-h-screen p-4">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
