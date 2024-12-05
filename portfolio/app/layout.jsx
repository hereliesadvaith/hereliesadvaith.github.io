import "./globals.css";

// Components
import Header from "../components/Header";

export const metadata = {
  title: "hereLiesAdvaith",
  description: "Advaith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
