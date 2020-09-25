const initialState = {
    models: [],
    orderBy: 'id',
    orderDirection: 'asc',
    vehicleId: null,
    model: {},
    details: []
}

export default function models(state = initialState, action){
    switch (action.type) {
        case "GET_MODELS":
            return {
                ...state,
                models: action.payload
            }
        case "FILTER_VEHICLE":
            return {
                ...state,
                vehicleId: action.payload
            }
        case "APPLY_ORDER":
            return {
                ...state,
                orderBy: action.payload.orderBy,
                orderDirection: action.payload.orderDirection
            }
        case "GET_MODEL":
            return {
                ...state,
                model: action.payload
            }
        case "GET_DETAILS":
            return {
                ...state,
                details: action.payload
            }
        default:
            return state
    }
}