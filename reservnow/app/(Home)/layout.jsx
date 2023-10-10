import { Providers } from "@/Provider";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function HomeLayout({ children }) {
  return (
    <div>
      <Header />
      <Providers>{children}</Providers>
      <Footer />
    </div>
  );
}
