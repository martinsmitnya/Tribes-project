const initialState = {
  buildings: null,
  isLoaded: false,
  error: '',
  buildingCount: 0,
}

const buildingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_BUILDINGS':
      return {
        ...state,
        buildings: action.buildings,
        isLoaded: true,
      };
    case 'INCREASE_BUILDING_COUNT':
      return {
        ...state,
        buildingCount: state.buildingCount + 1,
      };
    case 'ERROR':
      return {
        ...state,
        error: action.errormessage,
      }
    default:
      return state;
  }
}

export default buildingReducer;
