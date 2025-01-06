import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "hereLiesAdvaith",
  description: "Advaith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
