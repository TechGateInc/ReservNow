"use client"

import CentreGallery from "@/components/CentreGallery/CentreGallery";
import { AuthProvider } from '../Context/context';

export default function Home() {
  return (
    <AuthProvider>
    <CentreGallery />
    </AuthProvider>
  );
}
