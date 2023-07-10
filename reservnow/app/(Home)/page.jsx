"use client";
import HomeLayout from "./layout";
import CentreGallery from "@/components/CentreGallery/CentreGallery";
// import { AuthProvider } from "../../Context/context";
import { Provider } from "react-redux";

export default function Home() {
  return (
    // <Provider>
        <CentreGallery />
    // </Provider>
  );
}
