"use client"

import { useState } from "react";
import "./login.css";
import CheckEmailCard from "@/components/Login/CheckEmailCard";
import SignInCard from "@/components/Login/SignInCard";
import SignUpCard from "@/components/Login/SignUpCard";

export default () => {
    const [email, setEmail] = useState('')
    const [showEmailCard, setShowEmailCard] = useState(true)
    const [showSignInCard, setShowSignInCard] = useState(false)
    const [showSignUpCard, setShowSignUpCard] = useState(false)
    return (
        <div className="login-root">
            <CheckEmailCard
                trigger={showEmailCard}
                setTrigger={setShowEmailCard}
                email={email}
                setEmail={setEmail}
                triggerSignInCard={setShowSignInCard} />
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
                triggerEmailCard={setShowEmailCard} />
        </div>
    );
}