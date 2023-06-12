"use client"

import LoginModal from "@/modals/Login Modal/LoginModal";
import CentreGallery from "@/components/CentreGallery/CentreGallery";
import { AuthProvider } from '../Context/context';

export default function Home() {
  return (
    <AuthProvider>
    <CentreGallery />
    </AuthProvider>
  );
}
