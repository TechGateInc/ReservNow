import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { eventCentreApi } from './features/eventCentreHome/EventCentreSlice';
import { searchCentreApi } from './features/eventCentreHome/SearchCentreSlice';


const store = configureStore({
  reducer: {
    [eventCentreApi.reducerPath]: eventCentreApi.reducer,
    [searchCentreApi.reducerPath]: searchCentreApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(eventCentreApi.middleware)
      .concat(searchCentreApi.middleware),
});

store.dispatch(eventCentreApi.middleware);
store.dispatch(searchCentreApi.middleware);

setupListeners(store.dispatch);

export default store;
