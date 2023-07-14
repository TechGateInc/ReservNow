import LoginPageNavbar from "@/components/Login/Navbar/NavBar";
import { AuthProvider } from "@/context/AuthProvider";

export default function LoginLayout({ children }) {
    return (
        <AuthProvider>
            <div style={{ height: "100vh" }}>
                <LoginPageNavbar />
                {children}
            </div>
        </AuthProvider>
    );
}
