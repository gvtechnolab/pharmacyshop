import { configureStore, combineReducers } from "@reduxjs/toolkit";
import wishlistReducer from "./src/redux/reducers/wishlistReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// ==> without using persist store
// export const store = configureStore({
//   reducer: combineReducers({
//     wishlist: wishlistReducer,
//   }),
// });

// ==> using persist store
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  wishlist: wishlistReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
