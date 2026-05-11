import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tavion Britt",
  description: "Tavion Britt portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="h-dvh flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  );
}
