//General
import Axios from 'axios';

//Consts
const GET_VEHICLES  = 'GET_VEHICLES';

//code..
export function getVehicles(){
    return dispatch => {
        return Axios.get('http://localhost:8000/api/vehicles')
        .then(res => res.data)
        .then(res => {
            dispatch({type:GET_VEHICLES, payload: res.data});
        })
    }
}