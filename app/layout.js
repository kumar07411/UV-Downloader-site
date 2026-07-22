import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/config";

export const metadata = {
  title: `${siteConfig.appName} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.logo,
    apple: siteConfig.logo,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
