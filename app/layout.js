import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
const open_san = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open_san",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "LifeWork",
  description: "LifeWork Website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${open_san.variable}`}>
      <body className="flex flex-col justify-between h-screen">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
