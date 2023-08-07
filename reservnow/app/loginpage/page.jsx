"use client";
import React, { useEffect, useState } from "react";
import LoginPageHeader from "@/components/LoginPageHeader/LoginPageHeader";
import LoginVerification from "@/components/LoginPageComponents/LoginVerification";
import LoginForm from "@/components/LoginPageComponents/LoginForm";

const LoginPage = ({}) => {
  const [active, setActive] = useState("Verification");
  return (
    <div>
      <LoginPageHeader />
      <div className="loginPageHolder">
        <div className="host-content">
          {active === "Verification" && (
            <LoginVerification setActive={setActive} />
          )}
          {active === "Form" && <LoginForm />}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
