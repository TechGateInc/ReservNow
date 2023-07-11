import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Provider } from "react-redux";

export default function HomeLayout({ children }) {
  return (
    
    <div>
      <Header />
      {children}
      <Footer />
    </div>

  );
}
