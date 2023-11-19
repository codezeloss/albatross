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
import { ClerkProvider } from "@clerk/nextjs";
import { CreateTaskModal } from "@/components/CreateTaskModal";
import { Toaster } from "@/components/ui/toaster";

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
    <ClerkProvider>
      <ReduxProvider>
        <html lang="en">
          <body className={righteous.className}>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <div className="w-full h-full min-h-screen flex flex-col justify-between">
                <Navbar />
                <main className="px-3 sm:px-6 w-full h-full pb-6 mb-4 sm:mb-11">
                  <Container>
                    <CreateTaskModal />
                    <MainNavigation />
                    {children}
                    <Toaster />
                  </Container>
                </main>
                <Footer />
              </div>
            </ThemeProvider>
          </body>
        </html>
      </ReduxProvider>
    </ClerkProvider>
  );
}
