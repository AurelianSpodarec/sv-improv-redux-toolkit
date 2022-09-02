import { useState } from 'react';

import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';

import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Title from 'lib/src/components/typography/Title';

import { CustomValidateFunction } from 'lib/src/types/shared/formValidation';

import { useDispatch  } from 'react-redux';
import { setCredentials } from './../../redux-toolkit/features/auth/authSlice';
import { useLoginMutation } from './../../redux-toolkit/features/auth/authApiSlice';

function LoginForm() {
    const dispatch = useDispatch()
    const [login, { isLoading }] = useLoginMutation();

    async function handleSubmit(e:any) {
        e.preventDefault()

        try {
            const userData = await login({email: "admin@silverchip.com", password: "password" }).unwrap();
            dispatch(setCredentials({ ...userData}))
            
            console.log("userData", userData)
        } catch (error) {
            // if(!error?.response) {
            //     console.log("No error response")
            // } else if(error.response.status === 400) )
            console.log("could not validate user")
        }
    }

    return (
        <div className="login-form-wrapper">
            <div className="login-form">

                <Title>Login</Title>
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

// interface LoginFormProps {
//     handleChange?: <T>(name: 'email' | 'password', value: T) => void;
//     handleSubmit?: () => void;
//     isPosting?: boolean;
//     customValidate?: CustomValidateFunction<string>;
//     formState?: {
//         email: string;
//         password: string;
//     };
// }

export default LoginForm;
