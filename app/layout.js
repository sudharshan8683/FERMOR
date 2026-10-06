import "./globals.css";
import Cursor from "../components/Cursor";
import { Manrope } from "next/font/google";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fermor — Understand, act and grow your money",
  description: "Fermor makes personal finance simpler and clearer: see where you stand, know what to do next, and grow with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable}`}>
      <body><Cursor />{children}</body>
    </html>
  );
}
