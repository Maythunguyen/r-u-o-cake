import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // choose weights you want
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: " R U O’Cake",
  description: "Podcast community run by two twenty-somethings, Ebony and May. ",
  icons: {
    // Serve both, browsers will pick what they like
    icon: [
      { url: "/favicon.ico" },                    // ICO for tab
      { url: "/ruocake.png", type: "image/png", sizes: "32x32" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
