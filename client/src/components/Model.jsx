//General
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';

//actions
import {getModel} from '../actions/models';

//components

//UI
import {Row,Col} from 'react-bootstrap';
import s from '../styles/model.module.scss';

//code..
function Model({id, model, getModel}){

    useEffect(() => {
        if(id){
            getModel(id)
        }
    },[id]);

    return (
        <Row>
            {/* La única forma que sean iguales es que sean undefined (id === undefined && model.model === undefined) */}
            {id === model.model && <Redirect to="/"/>}
            <Col md={6}>
                <img className={'img-fluid '+s['img-main']} src={model.main_image} alt={'Imagen principal de '+model.model} />
            </Col>
            <Col md={6}>
                <h2 className={s['model-title']}>{model.model} {model.version}</h2>
                <h1 className={s['main-title']}>{model.title}</h1>
                <p className={s['short-description']}>
                    {model.short_description}
                </p>
            </Col>
        </Row>
    );
}

function mapStateToProps(state) {
    return {
        model: state.models.model
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getModel: id => dispatch(getModel(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Model)