import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const RequireAuth = ({ children }) => {
  const token = useSelector(selectCurrentToken);
  const router = useRouter();

  if (!token) {
    router.push("/login", undefined, { shallow: true });
    return null;
  }

  return children;
};

export default RequireAuth;
