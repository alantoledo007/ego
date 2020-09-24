//general
import { createStore, applyMiddleware, combineReducers } from "redux";

//reducers
import models from '../reducers/models';

//middlwares
import thunk from "redux-thunk";


//code..
const store = createStore(
    combineReducers({
        models
    }),
    applyMiddleware(thunk)
);

export default store;