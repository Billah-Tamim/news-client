import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaReddit } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import './RightSideNav.css';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {googleLogIn} = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    

    const handleGoogle = () =>{
        googleLogIn(googleProvider)
        .then(result=>{
            const user = result.user;
            console.log(user);
        })
        .catch(error=> console.error(error));
    }
    return (
        <div>
            <ButtonGroup vertical className='mb-4'>
                <Button onClick={handleGoogle} className='mb-3 px-5' variant="outline-primary"> <FaGoogle></FaGoogle> Login with Google</Button>
                <Button className='px-5' variant="outline-dark"> <FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h6>Find us on</h6>
                <ListGroup>
                    <ListGroup.Item className='mb-3 list-right'><FaFacebook></FaFacebook>    Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3 list-right'><FaInstagram/> Instagram</ListGroup.Item>
                    <ListGroup.Item className='mb-3 list-right'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3 list-right'><FaLinkedin></FaLinkedin> Linked In</ListGroup.Item>
                    <ListGroup.Item className='mb-3 list-right'><FaReddit></FaReddit> Reddit</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;