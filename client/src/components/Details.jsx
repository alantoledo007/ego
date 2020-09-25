//General
import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';

//actions
import {getDetails} from '../actions/models';

//components
import MainDetail from './MainDetail';
import DetailsCarousel from './DetailsCarousel';

//UI
import {Container} from 'react-bootstrap';


//code..
function Details({id, details, getDetails}){

    const [state, setState] = useState({
        details:[],
        mainDetails:[]
    });

    useEffect(() => {
        if(id){
            getDetails(id)
        }
    },[id]);

    useEffect(() => {
        let _details = [];
        let mainDetails = [];
        details.forEach(item => {
            if(item.is_main){
                mainDetails.push(item);
            }else{
                _details.push(item);
            }
        });
        setState({
            ...state,
            details:_details,
            mainDetails
        })
    },[details]);

    return (
        <React.Fragment>
            <DetailsCarousel details={state.details} />
            <Container>
                {state.mainDetails.map((item, index) => (
                    <MainDetail key={item.id} imageLeft={!!(index%2)} data={item} />
                ))}
            </Container>
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return {
        details: state.models.details
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDetails: id => dispatch(getDetails(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Details)