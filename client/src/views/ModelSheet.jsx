//General
import { useParams } from 'react-router-dom';
import React from 'react';

//UI
import {Container, Row, Col} from 'react-bootstrap';
//import s from '../styles/details.module.scss';

//Components
import Model from '../components/Model';
import Details from '../components/Details';

//Code..
function ModelSheet(){
    const {id} = useParams();
    return (
        <React.Fragment>
            <Container>
                <Model id={id} />
            </Container>
            <Details id={id} />
        </React.Fragment>
    )
}

export default ModelSheet;