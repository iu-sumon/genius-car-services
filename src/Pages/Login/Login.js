
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()

    const navigate = useNavigate()
    const handleRegister = event => {
        navigate('/register')
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password);
    }

   
    return (
        <div className='container w-50 mx-auto'>
            <h3 className='text-center text-primary'>Please Login</h3>
            <Form onClick={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New to genius car? <Link to='/register'
                className='text-danger pe-auto text-decoration-none ' onClick={handleRegister}>Please register</Link></p>
        </div>
    );
};

export default Login;