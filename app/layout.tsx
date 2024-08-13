// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Mohit Singh",
  description: "Portfolio of Mohit Singh, a software engineer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
