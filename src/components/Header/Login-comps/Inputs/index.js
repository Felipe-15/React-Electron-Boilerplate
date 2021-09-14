import "./styles.css"
import EmailIcon from "../../../../assets/login-icons/email-icon.svg"
import PadlockIcon from "../../../../assets/login-icons/padlock-icon.svg"

const LoginInput = ({ type, onChange, value, first }) => {
    const isPass = type === "password"

    return (
        <div className={`login-input-container ${first ? "first" : null}`}>
            <img src={!isPass ? EmailIcon : PadlockIcon} alt={!isPass ? "E-mail" : "Senha"} />
            <input spellCheck="false" value={value} onChange={onChange} type={type} placeholder={!isPass ? "E-mail" : "Senha"} className="login-input" />
        </div>
    )
}

export default LoginInput