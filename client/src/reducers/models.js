const initialState = {
    models: [],
    orderBy: 'id',
    orderDirection: 'asc',
    vehicleId: null
}

export default function models(state = initialState, action){
    switch (action.type) {
        case "GET_MODELS":
            console.log(action.payload);
            return {
                ...state,
                models: action.payload
            }
        default:
            return state
    }
}