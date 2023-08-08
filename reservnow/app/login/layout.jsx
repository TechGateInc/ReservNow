import LoginPageNavbar from "@/components/Login/Navbar/NavBar";

export default function LoginLayout({ children }) {
    return (
            <div style={{ height: "100vh" }}>
                <LoginPageNavbar />
                {children}
            </div>
    );
}
