"use client";

import Image from "next/image";
import styles from "./page.module.css";
import LoginModal from "@/modals/Login Modal/LoginModal";

export default function Home() {
  return (
    <main style={{ backgroundColor: "white", color: "black" }}>
      <div>
        <LoginModal />
      </div>
    </main>
  );
}
