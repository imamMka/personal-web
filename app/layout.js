import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loading from "./components/loading";
import { LanguageProvider } from "./context/LanguageContext";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700",],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://imammka.my.id'), // Replace with actual domain
  title: {
    default: "Imam Muttaqin | Fullstack Developer & UI/UX Designer",
    template: "%s | Imam Muttaqin",
  },
  description: "Portfolio of Imam Muttaqin, a Fullstack Developer and UI/UX Designer specializing in building scalable web applications and intuitive interfaces.",
  keywords: ["Imam Muttaqin", "Fullstack Developer", "UI/UX Designer", "Web Developer", "React", "Next.js", "Portfolio", "Software Engineer"],
  authors: [{ name: "Imam Muttaqin", url: "https://imammka.my.id" }],
  creator: "Imam Muttaqin",
  publisher: "Imam Muttaqin",
  openGraph: {
    title: "Imam Muttaqin | Fullstack Developer & UI/UX Designer",
    description: "Portfolio of Imam Muttaqin, a Fullstack Developer and UI/UX Designer.",
    url: "https://imammka.my.id",
    siteName: "Imam Muttaqin Portfolio",
    images: [
      {
        url: "/hero.png", // Replace with an actual OpenGraph image if you have one
        width: 1200,
        height: 630,
        alt: "Imam Muttaqin Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Imam Muttaqin | Fullstack Developer & UI/UX Designer",
    description: "Portfolio of Imam Muttaqin, a Fullstack Developer and UI/UX Designer.",
    images: ["/hero.png"],
    creator: "@imammuttaqin",
  },
  verification: {
    google: "k-lF5231cugE4C2-Ab1onv28F5SdaI3NmCp9vFifK3g",
  },
};


export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} antialiased overflow-x-hidden`}
      >
        <LanguageProvider>
          <ThemeProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
