import LoginPageNavbar from "@/components/Login/Navbar/NavBar";
import { Providers } from "@/Provider";

export default function LoginLayout({ children }) {
  return (
    <div style={{ height: "100vh" }}>
      <Providers>
        <LoginPageNavbar />
        {children}
      </Providers>
    </div>
  );
}
