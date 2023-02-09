import { configureStore, } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { DataApi } from '../RTKQuery/Data';
// import trackerReducer from "../redux/CoronaTrackerSlice";


export const store = configureStore({
  reducer: {
    [DataApi.reducerPath]:DataApi.reducer
    
    // tracker:trackerReducer,
  },
  middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware().concat(DataApi.middleware),
})

setupListeners(store.dispatch);