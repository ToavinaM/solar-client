import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import Nav from '../Nav/Nav';
import Header from '../header/Header';
//redux
import { BeatLoader } from 'react-spinners';


export default function Projet() {
    const [projet, setProjet] = useState(null);

    let initiation = localStorage.getItem('users');



    //FUNCTION


    return (
        <Row className='container-fluid'>
            <Col>
                <Nav></Nav>
            </Col>
            <Col md={10} sm={8} className={'container'}>
                <Row>
                    <Header></Header>
                </Row>
                <Row>

                    <div className='bodyContainer bg-info'>
                        asd
                    </div>


                </Row>
            </Col>
        </Row >
    )
}
