// app/layout.tsx
"use client";
import "./globals.css";
import { ReactNode } from "react";
import Header from "./(explore)/header";
import Footer from "./(explore)/footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
