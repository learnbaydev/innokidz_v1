import { Theme } from "@radix-ui/themes";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/navigation";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "InnoKidz - Future Entrepreneurs Program | AI & Coding for Kids 8-17",
  description:
    "Transform your child into an AI-powered entrepreneur. 8-week program teaching kids coding, AI skills, and startup creation. Build real apps, games, and launch actual businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} ${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        <Navigation />
        <Theme>{children}</Theme>
        <Footer />
      </body>
    </html>
  );
}
