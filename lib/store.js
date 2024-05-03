import { configureStore } from "@reduxjs/toolkit";
import { ApiCallServices } from "./services/apiCallServices";
import { setupListeners } from "@reduxjs/toolkit/query";
import formSlice from "../lib/reducers/reducer"
export const store = configureStore({
  reducer: {
    form:formSlice,
    [ApiCallServices.reducerPath]: ApiCallServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiCallServices.middleware),
});

setupListeners(store.dispatch)