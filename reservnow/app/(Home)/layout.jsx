import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { AuthProvider } from "@/context/AuthProvider";

export default function HomeLayout({ children }) {
  return (
    <AuthProvider>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </AuthProvider >
  );
}
