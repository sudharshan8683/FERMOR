import "./globals.css";
import Cursor from "../components/Cursor";
import { Sora, DM_Sans } from "next/font/google";

const display = Sora({ subsets: ["latin"], variable: "--font-display" });
const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata = {
  title: "Fermor — Understand, act and grow your money",
  description: "Fermor makes personal finance simpler and clearer: see where you stand, know what to do next, and grow with confidence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body><Cursor />{children}</body>
    </html>
  );
}
