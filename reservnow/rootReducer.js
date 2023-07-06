import { combineReducers } from "redux";
import { eventCentreApi } from './features/eventCentreHome/EventCentreSlice';
import { searchCentreApi } from './features/eventCentreHome/SearchCentreSlice';

const rootReducer = combineReducers({
      eventCentre: eventCentreApi,
      serachCentre: searchCentreApi,
})

export default rootReducer;