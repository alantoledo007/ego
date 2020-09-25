//General
import React from 'react';

//UI
import {Container, Row, Col} from 'react-bootstrap';
import s from '../styles/home.module.scss';

//Components
import Filters from '../components/Filters';
import Models from '../components/Models';

//Code..
function Home(){
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className={s['page-title']}>
                        Descubrí todos los modelos
                    </h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Filters />
                </Col>
            </Row>
            <Models/>
        </Container>
    )
}

export default Home;