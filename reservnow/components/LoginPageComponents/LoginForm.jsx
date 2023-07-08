import { useState } from "react"
import "./Login.css"
import { EmailForm } from "./EmailForm"
import { Provider } from "react-redux"
import { store } from "@/store"
import { LoginAuth } from "./LoginAuth"

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [isEmailStep, setIsEmailStep] = useState(true)
  const [isAuthStep, setIsAuthStep] = useState(false)
  const [isRegistrationStep, setIsRegistrationStep] = useState(false)

  return (
    <Provider store={store}>
      <div className="login-page-root">
        <EmailForm
          trigger={isEmailStep}
          setTrigger={setIsEmailStep}
          email={email}
          setEmail={setEmail}
          loginModalTrigger={isAuthStep}
          setLoginModalTrigger={setIsAuthStep}
          registrationModalTrigger={isRegistrationStep}
          setRegistrationModalTrigger={setIsRegistrationStep} />
        <LoginAuth
          emailModalTrigger={isEmailStep}
          setEmailModalTrigger={setIsEmailStep}
          email={email}
          setEmail={setEmail}
          trigger={isAuthStep}
          setTrigger={setIsAuthStep}
          registrationModalTrigger={isRegistrationStep}
          setRegistrationModalTrigger={setIsRegistrationStep} />
      </div>
    </Provider>

  )
}

export default LoginForm