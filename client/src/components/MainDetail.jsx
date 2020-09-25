//General
import React, { useEffect, useState } from 'react';

//UI
import {Row,Col} from 'react-bootstrap';
import s from '../styles/mainDetail.module.scss';

//code..
function MainDetail({data, imageLeft}){
    const {detail, image, description} = data;

    const [width,setWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize',handleResize);
        return() => {
            window.removeEventListener('resize',handleResize);
        }
    }, [])

    return (
        <Row className={s['container'] + ' d-flex align-items-center justify-content-between'}>
            {((imageLeft || width <= 800) && (
                <React.Fragment>
                    <Image image={image} detail={detail} />
                    <Detail detail={detail} description={description} />
                </React.Fragment>
            )) || (
                <React.Fragment>
                    <Detail detail={detail} description={description} />
                    <Image image={image} detail={detail} />
                </React.Fragment>
            )}
        </Row>
    );
}

function Detail({detail, description}){
    return (
        <Col md={6}>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{detail}</h3>
                <p className={s['description']}>{description}</p>
            </div>
        </Col>
    );
}

function Image({image, detail}){
    return (
        <Col className="my-4" md={6}>
            <img src={image} className="img-fluid rounded" alt={'Imagen de ' + detail} />
        </Col>
    );
}

export default MainDetail;