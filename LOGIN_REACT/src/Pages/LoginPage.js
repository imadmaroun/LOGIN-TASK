import React, { useState } from 'react'
import '../Styles/LoginPage.css'
import { useLogin } from '../Utilities/Authentication'


function LoginPage() {
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const { login } = useLogin()

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const [showPass, setShowPass] = useState(false)
    const handleShowPass = () => {
        setShowPass(!showPass)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    return (
        <div>
            <div className="Login" onSubmit={handleSubmit}>
                <form className="login-content">
                    <div className="email-field">
                        <label className="email-label">Email</label>
                        <input className="email-input" type="text" name="email" onChange={handleChange} required />
                    </div>

                    <div className="password-field">
                        <label className="password-label">Password</label>
                        <input className="password-input" name="password" type={showPass ? "text" : "password"} onChange={handleChange} required />
                    </div>

                    <div className="show-pass-field">
                        <input className="show-pass-check" type="checkbox" onClick={handleShowPass} />
                        <label className="show-pass-label">Show password</label>
                    </div>

                    <div className="submit-field">
                        <button className="login-btn" type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPage