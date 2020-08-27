import React from 'react'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Nav from 'react-bootstrap/Nav';

const BaseLayout = (props) => {
    return (
        <>
        <Container fluid>
            <div>
                <Row>
                    <div>
                    <Image src="" fluid />
                    </div>
                </Row>
            </div>
        </Container>
        <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
                <Nav.Link href="/home">Back</Nav.Link>
            </Nav.Item>
        </Nav>
        <Container fluid>
            <Row>
                {props.children}
            </Row>
        </Container>

        </>
    )
}

export default BaseLayout