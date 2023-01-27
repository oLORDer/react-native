import { configureStore, combineReducers } from '@reduxjs/toolkit';
import dashboardSlice from './dashboard/dashboard-reducer';

import { authSlice } from './auth/auth-reducer';

// для примера разными способами
const rootReducer = combineReducers({
  [authSlice.name]: authSlice.reducer,
  dashboard: dashboardSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
