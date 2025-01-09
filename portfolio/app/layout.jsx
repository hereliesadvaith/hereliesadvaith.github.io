import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

export const metadata = {
  title: "hereLiesAdvaith",
  description: "Advaith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
