const initialState = {
  errormessageLogin: '',
  errormessageRegister: '',
  kingdomName: 'Tribes of Gymnocercus',
  tempKingdomName: 'Tribes of Gymnocercus',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_MISSING_USERNAME_OR_PASSWORD':
      return {
        ...state,
        errormessageRegister: 'Missing username or password!',
      };
    case 'LOGIN_MISSING_USERNAME_OR_PASSWORD':
      return {
        ...state,
        errormessageLogin: 'Missing username or password!',
      };
    case 'PASSWORD_UNDER_8_CHARACTERS':
      return {
        ...state,
        errormessageRegister: 'Password must be at least 8 characters!',
      };
    case 'LOGIN_ERROR':
      return {
        ...state,
        errormessageLogin: action.errormessage,
      };
    case 'REGISTER_ERROR':
      return {
        ...state,
        errormessageRegister: action.errormessage,
      };
    case 'CLEAR_FIELDS':
      return {
        ...state,
        errormessageLogin: '',
        errormessageRegister: '',
      };
    case 'SET_NEW_KINGDOMNAME':
      return {
        ...state,
        kingdomName: action.kingdomName,
      };
    case 'SET_TEMP_KINGDOMNAME':
      return {
        ...state,
        tempKingdomName: action.kingdomName,
      };
    default:
      return state;
  }
};

export default userReducer;
