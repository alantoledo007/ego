//General
import Axios from 'axios';
import queryString from 'query-string';

//Actions
const GET_MODELS = 'GET_MODELS';

//Conts
const API_URI = 'http://localhost:8000/api/models';

//code..
export function getModels(data){ //{vehicleId, orderBy, orderDirection}
    let uriParams = queryString.stringify(data); // se combierte el objeto un string url.
    return dispatch => {
        Axios.get(API_URI + '?' + uriParams)
        .then(res => res.data)
        .then(res => {
            dispatch({type:GET_MODELS,payload:res.data});
        })
    }
}