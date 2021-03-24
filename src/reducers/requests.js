const initialState = {};

export const requests = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_REQUEST":
            return { ...state, ...action.payload }
        case "UPDATE_REQUEST":
            return { ...state, [action.payload.requestUid]: {...state[action.payload.requestUid], ...action.payload} }
        default:
            return state
    }
}