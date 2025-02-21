import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import ModalReducer from "./modalSlice";
import Products from "./productsSlice";
import cart from "./cartSlice";
import auth from "./authSlice"

const persistConfig = {
  key: "kalit",
  storage,
};

const rootReducer = combineReducers({
  modal: ModalReducer,
  products: Products,
  cart: cart,
  auth: auth
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(thunk),
});

export const persistor = persistStore(store);
