const initialState = {};

export const addUser = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_USER':
      return { ...state, ...action.payload }
    default:
      return state
  }
}