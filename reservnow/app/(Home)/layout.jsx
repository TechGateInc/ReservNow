import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  return (
    <div>
        <Header />
        <div style={{ }}>
          {children}
        </div>
        <Footer />
    </div>
  );
}
