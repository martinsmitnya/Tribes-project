const initialState = {
  troops: null,
  isLoaded: false,
  error: '',
  stats: { attack: 0, defence: 0, sustenance: 0 },
  levels: {};
};

const troopsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TROOPS':
      return {
        ...state,
        troops: action.troops,
        isLoaded: true,
      };
    case 'SET_STATS':
      return {
        ...state,
        stats: action.stats
      };

    case 'SET_LEVELS':
        return {
            ...state,
            levels: action.levels
        }
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
