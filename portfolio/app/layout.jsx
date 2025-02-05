import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "hereLiesAdvaith",
  description: "Advaith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
