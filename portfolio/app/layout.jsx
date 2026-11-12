import "./globals.css";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const description =
  "Python & Odoo developer with 3.5+ years building Odoo solutions, full-stack applications, AI integrations, business automations, and DevOps pipelines.";

export const metadata = {
  metadataBase: new URL("https://hereliesadvaith.github.io"),
  title: {
    default: "Advaith — Python & Odoo Developer",
    template: "%s — Advaith",
  },
  description,
  openGraph: {
    title: "Advaith — Python & Odoo Developer",
    description,
    url: "/",
    siteName: "Advaith",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Advaith — Python & Odoo Developer",
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-right" />
        <Header />
        {children}
      </body>
    </html>
  );
}
