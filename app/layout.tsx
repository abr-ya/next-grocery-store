import { Outfit } from "next/font/google";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import "./globals.css";
import Header from "./_components/Header";

const font = Outfit({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Grocery Store App",
  description: "Next 14 + Tailwind Grocery Store App",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={font.className}>
      <Header />
      {children}
    </body>
  </html>
);

export default RootLayout;
