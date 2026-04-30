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
  weight: [ "400","500", "700",],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portofolio | Imam Muttaqin",
  description: "Imam muttaqin Portfolio Website",
  google: "k-lF5231cugE4C2-Ab1onv28F5SdaI3NmCp9vFifK3g"
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
