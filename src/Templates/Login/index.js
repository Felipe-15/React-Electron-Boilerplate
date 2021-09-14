import { useEffect, useState } from "react"
import "./styles.css"

import axios from "axios"
import { serverUrl } from "../../common/server-config"

import EmailIcon from "../../assets/login-icons/email-icon.svg"
import LoginInput from "../../components/Header/Login-comps/Inputs"

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [wrongInfo, setWrongInfo] = useState("")
    const [err, setErr] = useState("")

    const login = async () => {
        /*if (!email.trim().includes("@")) {
            setWrongInfo("@miss")
            setTimeout(() => {
                setWrongInfo("")
            }, 3500)
            return
        }*/

        console.log(`Email: ${email} Password: ${password}`)
        const res = await axios.post(`${serverUrl}/signin`, {email, password}).catch(err => {
            console.log(err.response, "\n", typeof err)
            setErr(err.response.data)
            setTimeout(() => {
                setErr("")
            }, 3000)
        })

        if (!res) {
            return
        }
        
        const user = res.data

        console.log("dados ", user)
        console.log(`${user.name ? `Sucesso, seja bem vindo ${user.name}` : "Error, data not found!"}`)
    }

    return (
        <div className="body-login">
            <div className="login-form-container">
                <h1>LOGIN</h1>
                <div className="login-inputs-container">
                    {/*wrongInfo === "@miss" ? <p className="line-error"></p> : null*/}
                    {err.match(/email/i)  ? <p className="line-error">{err}</p> : null}
                    <LoginInput first={true} value={email} onChange={(e) => setEmail(e.target.value)} />
                    {wrongInfo === "noPassword" ? <p className="line-error">Campo obrigatório, digite uma senha!</p> : null}
                    {err.match(/senha/i)  ? <p className="line-error">{err}</p> : null}
                    <LoginInput  value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
                </div>
                <div onClick={email || password ? login : null} className={`login-button ${!email.trim() || !password.trim() ? "disabled-button" : ""}`}>
                    <p>ACESSAR</p>
                </div>
            </div>
        </div>
    )
}

export default Login