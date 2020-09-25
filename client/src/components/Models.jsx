//General
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getModels } from '../actions/models';

//Components
import ModelCard from './ModelCard';

//UI
import {Row} from 'react-bootstrap';

//code..
function Models({models, getModels, orderBy, orderDirection, vehicleId}){
    const [state, setState] = useState({
        models: []
    });

    useEffect(() => {
        getModels({orderBy, orderDirection, vehicleId});
    },[orderBy, orderDirection, vehicleId]);

    useEffect(() => {
        setState({
            ...state,
            models: models || []
        });
    },[models]);

    return (
        <Row>
            {state.models.map(item => (
                <ModelCard key={item.id} data={item} />
            ))}
        </Row>
    );
}

function mapStateToProps(state){
    return {
        orderBy: state.models.orderBy,
        orderDirection: state.models.orderDirection,
        vehicleId: state.models.vehicleId,
        models: state.models.models 
    }
}

function mapDispatchToProps(dispatch){
    return {
        getModels: data => dispatch(getModels(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Models)