import { Providers } from "@/src/api/Provider";
import { isUserLoggedIn } from "@/src/api/auth";
import CentreGallery from "@/src/components/CentreGallery/CentreGallery";

export default function Home() {
  return (
    <Providers>
      <CentreGallery />
    </Providers>
  );
}
