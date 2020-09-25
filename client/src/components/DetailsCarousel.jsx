//General
import React from 'react';

//components

//UI
import {Row,Col, Container, Card, Button} from 'react-bootstrap';
import s from '../styles/detailsCarousel.module.scss';
import Carousel, {consts} from 'react-elastic-carousel';

//code..
function DetailsCarousel({details}){
    
    
    return (
        <div className={s['details-content']}>
                        <Carousel
                            renderArrow={myArrow}
                            renderPagination={CustomPagination}
                            itemsToShow={4}
                            itemsToScroll={1}
                            itemPosition={consts.CENTER}
                            breakPoints={[
                                { width: 500, itemsToShow: 1.5 },
                                { width: 600, itemsToShow: 2.5 },
                                { width: 800, itemsToShow: 3.5 },
                                { width: 900, itemsToShow: 4.5 },
                            ]}
                        >
                                {details.map((item, index) => (  
                                    <Card className={s['card-carousel'] + ' border-0 bg-transparent'}>
                                        <Card.Body>
                                            <img className="img-fluid" key={item.id} src={item.image} />
                                            <h5 className={s['card-title']}>{item.detail}</h5>
                                            <p>{item.description}</p>
                                        </Card.Body>
                                    </Card>
                                ))}
                        </Carousel>           
 
                           
        </div>
    );
}


function CustomPagination({ pages, activePage, onClick }){

    return (
        <div className="d-flex w-100 justify-content-center">
        {pages.map(page => {
            const isActivePage = activePage === page
            return (
            <div
                className={s['pagination-item'] + (isActivePage ? ' ' + s['active'] : '')}
                key={page}
                onClick={() => onClick(page)}
            />
            )
        })}
        </div>
    );
}

function myArrow({ type, onClick, isEdge }) {
    const pointer = type === consts.PREV ? (<img className="arrow-img" src="/img/arrow-left.svg" />) : (<img className="arrow-img" src="/img/arrow-right.svg" />)
    return (
        <div className={s['arrow-container']} onClick={onClick} disabled={isEdge}>
            {pointer}
        </div>
    )
}

export default DetailsCarousel;