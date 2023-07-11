import { combineReducers } from "redux";
import { eventCentreApi } from './features/searchEventCentre/EventCentreSlice';
import { searchCentreApi } from './features/searchEventCentre/SearchCentreSlice';

const rootReducer = combineReducers({
      eventCentre: eventCentreApi,
      serachCentre: searchCentreApi,
})

export default rootReducer;