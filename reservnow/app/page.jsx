import { AuthProvider } from "@/Context/context"
import CentreGallery from "@/components/CentreGallery/CentreGallery";
import { store } from "@/store";
import { Provider } from "react-redux";

export default function Home() {
  return (
    <Provider store={store}>
      <CentreGallery />
      </Provider>

  );
}
