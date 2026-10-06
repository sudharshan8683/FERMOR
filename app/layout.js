import "./globals.css";
import Cursor from "../components/Cursor";
import { Fraunces, Inter } from "next/font/google";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif" });
const sans = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fermor — Understand, act and grow your money",
  description: "Fermor makes personal finance simpler and clearer: see where you stand, know what to do next, and grow with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body><Cursor />{children}</body>
    </html>
  );
}
