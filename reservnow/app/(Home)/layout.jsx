import "../globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer/Footer";
<<<<<<< HEAD
=======
// import { AuthProvider } from "@/Context/context";
>>>>>>> origin/feat-detailSlice
import Header from "@/components/Header/Header";
import { Providers } from "../../features/eventCentreHome/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function HomeLayout({ children }) {
  return (
    <div>
<<<<<<< HEAD
      <Providers>
        <Header />
        <div style={{ marginBottom: "100px" }}>
          {children}
        </div>
        <Footer />
      </Providers>
=======
      {/* <AuthProvider> */}
        <Header />
        <div style={{ marginTop: "100px", marginBottom: "100px" }}>
          {children}
        </div>
        <Footer />
      {/* </AuthProvider> */}
>>>>>>> origin/feat-detailSlice
    </div>
  );
}
