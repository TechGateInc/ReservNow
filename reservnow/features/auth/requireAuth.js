import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { useRouter } from "next/navigation";

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
