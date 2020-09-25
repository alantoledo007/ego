//general
import { createStore, applyMiddleware, combineReducers } from "redux";

//reducers
import models from '../reducers/models';
import vehicles from '../reducers/vehicles';

//middlwares
import thunk from "redux-thunk";


//code..
const store = createStore(
    combineReducers({
        models,
        vehicles
    }),
    applyMiddleware(thunk)
);

export default store;