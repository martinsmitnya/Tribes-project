const initialState = {
  errormessage: '',
  kingdomName: 'Tribes of Gymnocercus'
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MISSING_USERNAME_OR_PASSWORD':
      return {
        ...state,
        errormessage: 'Missing username or password!',
      };
    case 'PASSWORD_UNDER_8_CHARACTERS':
      return {
        ...state,
        errormessage: 'Password must be at least 8 characters!',
      };
    case 'BACKEND_ERROR':
      return {
        ...state,
        errormessage: action.errormessage,
      };
    case 'CLEAR_FIELDS':
      return {
        ...state,
        errormessage: '',
      };
    case 'SET_NEW_KINGDOMNAME':
      return {
        ...state, 
        kingdomName: action.kingdomName,
      }
    default:
      return state;
  }
}

export default userReducer;
