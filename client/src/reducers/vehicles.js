const initialState = {
    vehicles: []
}

export default function vehicles(state = initialState, action){
    switch (action.type) {
        case "GET_VEHICLES":
            return {
                ...state,
                vehicles: action.payload
            }
        default:
            return state
    }
}