import { PropsWithChildren } from "react";
import { Outfit } from "next/font/google";
import type { Metadata } from "next";

import { Toaster } from "@/components/ui/sonner";
import { Footer, Header } from "./_components";
import "./globals.css";
import { CartProvider } from "./_context/cartContext";

const font = Outfit({ subsets: ["latin"], weight: ["300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Grocery Store App",
  description: "Next 14 + Tailwind Grocery Store App",
};

const RootLayout = ({ children }: PropsWithChildren) => (
  <html lang="en">
    <body className={font.className}>
      <CartProvider>
        <Header />
        {children}
      </CartProvider>
      <Footer />
      <Toaster />
    </body>
  </html>
);

export default RootLayout;
