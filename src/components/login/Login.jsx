import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import './login.module.css'
import { useAuth } from "../auth/useAuth";
import MyMainButton from "../buttons/myMainButton/MyMainButton";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {signin} = useAuth();

    const fromPage = location.state?.from?.pathname || '/cart';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target; 
        const user = form.username.value;
        
        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div id="form">
            <h1>Get Started!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter your login" name='username' id='login'/>
                <input type="password" placeholder="Enter your password" id='password' />
                <MyMainButton type='submit'>Submit</MyMainButton>
            </form>
        </div>
    );
};

export default Login;