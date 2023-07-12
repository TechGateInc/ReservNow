import { useState } from "react"
import "./Login.css"
import { EmailForm } from "./EmailForm"
import { Provider } from "react-redux"
import { store } from "@/store"
import { LoginAuth } from "./LoginAuth"
import { RegistrationForm } from "./RegistrationForm"

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
          loginFormTrigger={isAuthStep}
          setLoginFormTrigger={setIsAuthStep}
          registrationFormTrigger={isRegistrationStep}
          setRegistrationFormTrigger={setIsRegistrationStep} />
        <LoginAuth
          emailFormTrigger={isEmailStep}
          setEmailFormTrigger={setIsEmailStep}
          email={email}
          setEmail={setEmail}
          trigger={isAuthStep}
          setTrigger={setIsAuthStep}
          registrationFormTrigger={isRegistrationStep}
          setRegistrationFormTrigger={setIsRegistrationStep} />
        <RegistrationForm
          trigger={isRegistrationStep}
          setTrigger={setIsRegistrationStep}
          email={email}
          setEmail={setEmail}
          emailFormTrigger={isEmailStep}
          setEmailFormTrigger={setIsEmailStep} />
      </div>
    </Provider>

  )
}

export default LoginForm