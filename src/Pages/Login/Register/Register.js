import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Register = () => {

    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);

    const { createUser, updateUserProfile, emailVerification } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoUrl, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                handleUserProfile(name, photoUrl);
                verifiedEmail();
                toast.success('Please Verify your Email');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            });
    }

    const handleUserProfile = (name, photoUrl)=>{
        const profile ={ displayName: name, photoURL: photoUrl}
        updateUserProfile(profile)
        .then(()=>{})
        .catch(error=> console.error(error));
    }

    const verifiedEmail = () =>{
        emailVerification()
        .then(()=>{})
        .catch(error=> console.error(error));
    }

    const handleCheckBox = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control name='name' type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='photoURL' type="text" placeholder="Enter your Photo URL" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control name='email' type="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name='password' type="password" placeholder="Password" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    type="checkbox"
                    onClick={handleCheckBox}
                    label={<>Accept <Link to='/terms'>this terms and conditions</Link></>} />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
                Register
            </Button>
            <Form.Text className="text-danger ms-3">
                {error}
            </Form.Text>
        </Form>
    );
};

export default Register;