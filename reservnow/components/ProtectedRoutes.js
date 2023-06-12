import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();

  if (!isAuthenticated) {
    // Redirect to login page if not authenticated
    router.push("/login");
    return null;
  }

  // Render the protected content if authenticated
  return <>{children}</>;
};

export default ProtectedRoute;
