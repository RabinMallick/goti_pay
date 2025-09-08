import { configureStore } from "@reduxjs/toolkit";

import { apiSlice } from "./api/apiSlice";
import languageReducer from "./slice/languageSlice"; 
import paymentReducer from "./slice/paymentSlice"; 

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    language: languageReducer, 
    payment: paymentReducer, 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware,),
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
