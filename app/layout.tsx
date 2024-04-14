import { PropsWithChildren } from "react";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";

import { Footer, Header } from "./_components";
import "./globals.css";

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
      <Footer />
    </body>
  </html>
);

export default RootLayout;
