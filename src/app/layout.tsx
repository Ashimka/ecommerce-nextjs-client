import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ToastContainer } from "react-toastify";

import Header from "@/components/modules/Header";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ADMIN ПАНЕЛЬ",
  description: "Панель администратора",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <Header />
        {children}
        <ToastContainer
          position="top-left"
          hideProgressBar={false}
          closeOnClick
          rtl={false}
          limit={1}
          theme="colored"
        />
      </body>
    </html>
  );
}
