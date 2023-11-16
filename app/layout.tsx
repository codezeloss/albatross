import type { Metadata } from "next";
import { Righteous } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ReactNode } from "react";
import { ReduxProvider } from "@/app/store/provider";
import Navbar from "@/components/Navbar";
import { MainNavigation } from "@/components/MainNavigation";
import Container from "@/components/Container";
import Footer from "@/components/Footer";

const righteous = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "albatross",
  description: "Your best task manager",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={righteous.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReduxProvider>
            <div className="w-full h-full min-h-screen">
              <Navbar />
              <main className="p-6 w-full h-full">
                <Container>
                  <MainNavigation />
                  {children}
                </Container>
              </main>
              <Footer />
            </div>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
