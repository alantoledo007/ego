//General
import React from 'react';

//UI
import {Row,Col} from 'react-bootstrap';
import s from '../styles/mainDetail.module.scss';

//code..
function MainDetail({data, imageLeft}){
    const {detail, image, description} = data;
    return (
        <div className={s['container'] + ' d-flex align-items-center justify-content-between'}>
            {imageLeft && (
                <React.Fragment>
                    <Image image={image} detail={detail} />
                    <Detail detail={detail} description={description} />
                </React.Fragment>
            )}
            {!imageLeft && (
                <React.Fragment>
                    <Detail detail={detail} description={description} />
                    <Image image={image} detail={detail} />
                </React.Fragment>
            )}
        </div>
    );
}

function Detail({detail, description}){
    return (
        <Col>
            <div className={s['details-container']}>
                <h3 className={s['title']}>{detail}</h3>
                <p className={s['description']}>{description}</p>
            </div>
        </Col>
    );
}

function Image({image, detail}){
    return (
        <Col>
            <img src={image} className="img-fluid rounded" alt={'Imagen de ' + detail} />
        </Col>
    );
}

export default MainDetail;