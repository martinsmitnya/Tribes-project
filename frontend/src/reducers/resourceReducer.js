const initialState = {
  food: null,
  gold: null,
  isLoaded: false,
  error: null,
  user: 0,
};

const resourceReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESOURCES':
      return {
        ...state,
        food: action.food,
        gold: action.gold,
        isLoaded: true,
      };
    case 'RESOURCE_ERROR':
      return {
        ...state,
        error: action.error,
      };
    case 'CLEAR_ALL':
      return {
        ...state,
        food: null,
        gold: null,
        isLoaded: false,
        error: null,
        user: 0,
      };
    default:
      return state;
  }
};

export default resourceReducer;
