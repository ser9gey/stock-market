const initialState = {};

export const projects = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_PROJECT":
            return { ...state, ...action.payload }
        default:
            return state
    }
}