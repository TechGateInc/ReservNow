import LoginPageNavbar from "@/src/components/Login/Navbar/NavBar";
import { Providers } from "@/src/api/Provider";

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
