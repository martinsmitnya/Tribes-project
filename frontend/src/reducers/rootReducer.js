import userReducer from './userReducer';
import buildingReducer from './buildingReducer';
import resourceReducer from './resourceReducer';
import troopsReducer from './troopsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  userReducer: userReducer,
  buildingReducer: buildingReducer,
  resourceReducer: resourceReducer,
  troopsReducer: troopsReducer,
});

export default rootReducer;
