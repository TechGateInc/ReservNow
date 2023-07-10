import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Providers } from "../../features/eventCentreHome/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  return (
    <div>
      <Providers>
        <Header />
        <div style={{ marginBottom: "100px" }}>
          {children}
        </div>
        <Footer />
      </Providers>
    </div>
  );
}
