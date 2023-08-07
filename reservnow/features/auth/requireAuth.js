import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./authSlice";
import { useEffect } from "react";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector(selectCurrentToken);
  const user = useSelector(selectCurrentUser)
  console.log(user);
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
  }, [isAuthenticated, currentPath, router]);

  if (!isAuthenticated) {
    return null; // or render a loading state if desired
  }

  return children;
};

export default RequireAuth;
