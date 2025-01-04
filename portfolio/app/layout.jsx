import "./globals.css";

export const metadata = {
  title: "hereLiesAdvaith",
  description: "Advaith's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
