import { useRouter, usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import useAuth from "@/hooks/useAuth";
import AuthContext, { AuthProvider } from "@/context/AuthProvider";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  const isAuthenticated = auth?.token;
  console.log(isAuthenticated);
  const pathname = usePathname();
  const currentPath = pathname;

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(
        `/login?redirect=${encodeURIComponent(currentPath)}`,
        undefined,
        { shallow: true }
      );
    }
  }, [isAuthenticated, router, currentPath]);

  if (!isAuthenticated) {
    return null;
  }

  return <AuthProvider>{children}</AuthProvider>;
};

export default RequireAuth;
