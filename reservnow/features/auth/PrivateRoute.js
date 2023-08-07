import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const router = useRouter();
  const pathname = usePathname();
  const currentPath = pathname;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(
        `/login?redirect=${encodeURIComponent(currentPath)}`,
        undefined,
        { shallow: true }
      );
    }
  }, [isAuthenticated, router]);

  return isAuthenticated ? <Component {...rest} /> : null;
};

export default PrivateRoute;
