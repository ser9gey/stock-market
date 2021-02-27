const initialState = {};

export const editProfile = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_PROFILE':
      return { ...state, ...action.payload }
    default:
      return state
  }
}