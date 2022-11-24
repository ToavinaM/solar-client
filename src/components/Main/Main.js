import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';


import Nav from '../Nav/Nav';
import Header from '../header/Header';
//redux
import { BeatLoader } from 'react-spinners';
//service
import { Service } from './service';
export default function Projet() {
    const [projet, setProjet] = useState(null);
    const [ticket, setticket] = useState([]);

    let initiation = localStorage.getItem('users');


    useEffect(() => {
        Service.getTicket()
            .then(rep => {
                setticket(rep.data);
            })
            .catch(err => {

            })
    }, [])



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
                        {
                            ticket.map(rep => {
                                return (
                                    <p>{rep.contenus}</p>
                                )
                            })
                        }
                    </div>


                </Row>
            </Col>
        </Row >
    )
}
