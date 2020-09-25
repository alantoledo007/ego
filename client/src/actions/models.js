//General
import Axios from 'axios';
import queryString from 'query-string';

//Actions
const GET_MODELS = 'GET_MODELS';
const FILTER_VEHICLE = 'FILTER_VEHICLE';
const APPLY_ORDER = 'APPLY_ORDER';
const GET_MODEL = 'GET_MODEL';
const GET_DETAILS = 'GET_DETAILS';

//Conts
const API_URI = 'http://localhost:8000/api/models';
const API_DETAILS = 'http://localhost:8000/api/details';

//code..
export function getModels(data){ //{vehicleId, orderBy, orderDirection}
    let uriParams = queryString.stringify(data); // se combierte el objeto un string url.
    console.log(uriParams)
    return dispatch => {
        Axios.get(API_URI + '?' + uriParams)
        .then(res => res.data)
        .then(res => {
            dispatch({type:GET_MODELS,payload:res.data});
        })
    }
}

export function filterVehicle(id){
    return dispatch => {
        dispatch({type:FILTER_VEHICLE, payload:id})
    }
}

export function applyOrder(data){// {orderBy, orderDirection}
    return dispatch => {
        dispatch({type:APPLY_ORDER, payload:data});
    }
}

export function getModel(id) {
    return dispatch => {
        return Axios.get(API_URI + '/' + id)
        .then(res => res.data)
        .then(res => {
            dispatch({type: GET_MODEL, payload:res.data});
        })
    }
}

export function getDetails(id) {
    return dispatch => {
        return Axios.get(API_DETAILS + '/model/' + id)
        .then(res => res.data)
        .then(res => {
            dispatch({type: GET_DETAILS, payload:res.data});
        })
    } 
}