import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";

const font = Outfit({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Next 14 + Tailwind CSS App",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={font.className}>{children}</body>
  </html>
);

export default RootLayout;
