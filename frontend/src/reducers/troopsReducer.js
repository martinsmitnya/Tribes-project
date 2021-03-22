const initialState = {
  troops: null,
  isLoaded: false,
  error: '',
};

const troopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TROOPS':
      return {
        ...state,
        troops: action.troops,
        isLoaded: true,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.errormessage,
      };
    default:
      return state;
  }
};

export default troopsReducer;
