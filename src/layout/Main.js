import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {Outlet} from 'react-router-dom';
import LeftSideNav from '../Pages/Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col xl='2' className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col xl='7'>
                        <Outlet></Outlet>
                    </Col>
                    <Col xl='3'>
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;