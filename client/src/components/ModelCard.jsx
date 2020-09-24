
import React from 'react';

//UI
import {Col, Card} from 'react-bootstrap';

export default function ModelCard({data}){
    const {model, card_image, year, price} = data;
    return (
        <Col lg={3}>
            <Card className="border-0">
                <Card.Body className="text-center">
                    <Card.Title className="text-center">{model}</Card.Title>
                    <span>{year} | </span>
                    <img src={card_image} width="100%" alt={'Imagen de: ' + model} />
                </Card.Body>
            </Card>
        </Col>
    );
}