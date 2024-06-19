import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learning Dashboard",
  description: "Creating Learning Web-Site using Next.JS and Chakra UI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/x-icon" href="/images.ico"></link>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
