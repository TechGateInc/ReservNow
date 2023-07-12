import { useRouter, usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { selectCurrentToken, selectCurrentUser } from "./authSlice";

const RequireAuth = ({ children }) => {
  const router = useRouter();
  const isAuthenticated = useSelector(selectCurrentToken);
  const pathname = usePathname();
  const currentPath = pathname;

  if (!isAuthenticated) {
    router.replace(
      `/login?redirect=${encodeURIComponent(currentPath)}`,
      undefined,
      { shallow: true }
    );
    return null;
  }
  return children;
};
export default RequireAuth;
