"use client"

import { useState } from "react";
import "./login.css";
import CheckEmailCard from "@/components/Login/CheckEmailCard";
import SignInCard from "@/components/Login/SignInCard";
import SignUpCard from "@/components/Login/SignUpCard";
import { Providers } from "@/Provider";
import LoginVerification from "@/components/Login/LoginVerification";

export default () => {
    const [active, setActive] = useState(1);
    const [email, setEmail] = useState('')
    const [showEmailCard, setShowEmailCard] = useState(true)
    const [showSignInCard, setShowSignInCard] = useState(false)
    const [showSignUpCard, setShowSignUpCard] = useState(false)
    return (
        <Providers>
            <div className="login-root">
                {active === 1 && (
                    <LoginVerification setActive={setActive} />
                )}
                {active === 2 && <>
                    <CheckEmailCard
                        trigger={showEmailCard}
                        setTrigger={setShowEmailCard}
                        email={email}
                        setEmail={setEmail}
                        triggerSignInCard={setShowSignInCard}
                        triggerSignUpCard={setShowSignUpCard} />
                    <SignInCard
                        trigger={showSignInCard}
                        setTrigger={setShowSignInCard}
                        email={email}
                        setEmail={setEmail}
                        triggerEmailCard={setShowEmailCard} />
                    <SignUpCard
                        trigger={showSignUpCard}
                        setTrigger={setShowSignUpCard}
                        email={email}
                        setEmail={setEmail}
                        triggerEmailCard={setShowEmailCard}
                    />
                </>}
            </div>
        </Providers>

    );
}