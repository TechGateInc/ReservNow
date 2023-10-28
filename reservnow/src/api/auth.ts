import { selectCurrentToken } from "./features/auth/authSlice";
import { useAppSelector } from "./hook";

export const isUserLoggedIn = () => {
  const accessToken = useAppSelector(selectCurrentToken);

  return !!accessToken;
};
