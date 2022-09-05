import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import { useDispatch  } from 'react-redux';
import { setCredentials } from '../../../store/features/auth/authSlice';
import { useLoginMutation } from '../../../store/features/auth/authApiSlice';

import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import { CustomValidateFunction } from 'lib/src/types/shared/formValidation';


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
                {/* <Form onSubmit={handleSubmit} isPosting={isPosting} omitButtons>
                    <FormRow>
                        <TextInput
                            name="email"
                            type="email"
                            value={email}
                            label="Email address"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="password"
                            value={password}
                            label="Password"
                            onChange={handleChange}
                            type="password"
                            required
                            customValidate={customValidate}
                        />
                    </FormRow>
                    <ButtonRow alignment="right">
                        <ActionButton icon="sign-in" isPosting={isPosting}>
                            Login
                        </ActionButton>
                    </ButtonRow>
                </Form>
                */}
            </div>
        </div>
    )
}

// interface LoginViewProps {
//     handleChange?: <T>(name: 'email' | 'password', value: T) => void;
//     handleSubmit?: () => void;
//     isPosting?: boolean;
//     customValidate?: CustomValidateFunction<string>;
//     formState?: {
//         email: string;
//         password: string;
//     };
// }

export default LoginView;
