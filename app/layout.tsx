import "./globals.css";
import localFont from "next/font/local";

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
      <body>
        <main className="bg-background">{children}</main>
      </body>
    </html>
  );
}
