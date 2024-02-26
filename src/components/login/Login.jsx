import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from './login.module.css'
import { useAuth } from "../auth/useAuth";
import MyMainButton from "../buttons/myMainButton/MyMainButton";

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { signin } = useAuth();

    const fromPage = location.state?.from?.pathname || '/cart';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const user = form.username.value;

        signin(user, () => navigate(fromPage, { replace: true }));
    }

    return (
        <div className={classes.login_page}>
            <div className={classes.login_form}>
                <h1>Login</h1>
                    <p>Don't have an account? <a>Creat Your Account</a> it takes less than a minute</p>
                <form onSubmit={handleSubmit} className={classes.form}>
                    <input className={classes.input} type="text" placeholder="Login" name='username' id='login' />
                    <input className={classes.input} type="password" placeholder="Password" id='password' />
                    <div className={classes.checkbox_form}>
                        <input className={classes.checkbox} type="checkbox" id='checkbox' name='checkbox' />
                        <span></span>
                        <label for='checkbox'>Remember me</label>
                    </div>
                    <MyMainButton type='submit'>Login</MyMainButton>
                </form>
            </div>
        </div>
    );
};

export default Login;