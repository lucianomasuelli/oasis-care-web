import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

const ltInstitute = localFont({src: './fonts/LTInstitute-1.otf'})


export const metadata: Metadata = {
  title: "Oasis Care",
  description: "Oasis Care web page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={ltInstitute.className}>
        {children}
      </body>
    </html>
  );
}
