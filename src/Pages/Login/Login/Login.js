

import React, { useRef } from 'react';
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../hooks/useToken';
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const navigate = useNavigate()
    const location = useLocation()

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user)
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    if (error) {

        errorElement = <p className='text-danger text-center'>Error:{error?.message}</p>

    }
    const handleRegister = event => {
        navigate('/register')
    }

    const handleSubmit = async event => {

        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password)
 }




    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email')
        }
        else {
            toast('Please enter your email address')
        }
    }

    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h3 className='text-center text-primary'>Please Login</h3>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>

                    <button type="submit" className='btn btn-info w-100 my-3 '>
                        Login
                    </button>
                </Form>
                {errorElement}
                <p className='text-center'>New to genius car? <Link to='/register'
                    className='text-primary pe-auto text-decoration-none ' onClick={handleRegister}>Please register</Link></p>
                <p className='text-center'>Forget Password? <button
                    className='btn btn-link text-primary pe-auto text-decoration-none' onClick={handleResetPassword}>Reset Password</button>
                </p>
            </div>
            <SocialLogin></SocialLogin>

        </div>

    );
};

export default Login;