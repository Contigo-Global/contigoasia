import "./globals.css";
import localFont from "next/font/local";
import Footer from "../components/components/footer";
import Navbar from "../components/components/navbar";

const font_samarkan = localFont({
  src: "../public/fonts/Samarkan.ttf",
  variable: "--font-samarkan",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${font_samarkan.variable}`}>
      <body className="relative">
        <Navbar />
        <main className="bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
