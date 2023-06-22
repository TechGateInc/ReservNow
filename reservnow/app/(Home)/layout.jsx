import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
import { AuthProvider } from "@/Context/context";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  return (
        <div>
          <AuthProvider>
          <Header />
          <div style={{ marginTop: "100px", marginBottom: "100px" }}>
            {children}
          </div>
          <Footer />
        </AuthProvider>
        </div>
   
  );
}