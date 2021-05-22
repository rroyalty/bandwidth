import React from 'react'
import SignupButton from "../../components/Login/Signup-button"
import AuthNav from "../../components/Login/Auth-nav";
import './styles.css';

const SignupUserButton = () => {
    return (
        <div className="login-duo">
            <SignupButton />
            <AuthNav />
        </div>
    )
}

export default SignupUserButton
