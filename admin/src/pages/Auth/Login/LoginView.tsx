import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch  } from 'react-redux';
import { setCredentials } from '../../../store/features/auth/authSlice';
import { useLoginMutation } from '../../../store/features/auth/authApiSlice';

function LoginView() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [login, { isLoading }] = useLoginMutation();

    useEffect(() => {
        // TODO: if logged in navigate to homepage
    })

    async function handleSubmit(e:any) {
        e.preventDefault()
        try {
            const userData = await login({email: "admin@silverchip.com", password: "password" }).unwrap();
            dispatch(setCredentials({ ...userData }))
            if(userData.token) return navigate("/");
        } catch (error) {
            console.log("could not validate user")
        }
    }

    return (
        <div className="login-form-wrapper">
            <div className="login-form">
                <Link to="/admins">šsdsdsds</Link>
                Login
                <form onSubmit={(e) => handleSubmit(e)}>

                {/* <input 
                    onChange={email} 
                    name="email"
                    type="email"
                    value={formState?.email}
                />
                <input 
                    onChange={pwd} 
                    name="password"
                    type="password"
                    value={formState?.password}
                /> */}
                <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}


export default LoginView;
