import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                if(user.emailVerified){
                    navigate(from, {replace: true});
                }
                else{
                    toast.error('Your email is not verified');
                }
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });

    }

    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            <Form.Text className="text-danger ms-3">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Login;