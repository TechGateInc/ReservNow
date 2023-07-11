"use client";
import HomeLayout from "./layout";
import CentreGallery from "@/components/CentreGallery/CentreGallery";
<<<<<<< HEAD
// import { AuthProvider } from "../../Context/context";
import { Provider } from "react-redux";

export default function Home() {
  return (
    // <Provider>
        <CentreGallery />
    // </Provider>
  );
=======

export default function Home() {
  return <CentreGallery />;
>>>>>>> origin/feat-detailSlice
}
