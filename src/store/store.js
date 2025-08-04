// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth-slice";
// import adminProductsSlice from "./admin/products-slice";
// import adminOrderSlice from "./admin/order-slice";

// import shopProductsSlice from "./shop/products-slice";
// import shopCartSlice from "./shop/cart-slice";
// import shopAddressSlice from "./shop/address-slice";
// import shopOrderSlice from "./shop/order-slice";
// import shopSearchSlice from "./shop/search-slice";
// import shopReviewSlice from "./shop/review-slice";
// import commonFeatureSlice from "./common-slice";

// const store = configureStore({
//   reducer: {
//     auth: authReducer,

//     adminProducts: adminProductsSlice,
//     adminOrder: adminOrderSlice,

//     shopProducts: shopProductsSlice,
//     shopCart: shopCartSlice,
//     shopAddress: shopAddressSlice,
//     shopOrder: shopOrderSlice,
//     shopSearch: shopSearchSlice,
//     shopReview: shopReviewSlice,

//     commonFeature: commonFeatureSlice,
    
//   },
// });

// export default store;

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // uses localStorage

// Import slices
import authReducer from "./auth-slice";
import adminProductsSlice from "./admin/products-slice";
import adminOrderSlice from "./admin/order-slice";

import shopProductsSlice from "./shop/products-slice";
import shopCartSlice from "./shop/cart-slice";
import shopAddressSlice from "./shop/address-slice";
import shopOrderSlice from "./shop/order-slice";
import shopSearchSlice from "./shop/search-slice";
import shopReviewSlice from "./shop/review-slice";
import commonFeatureSlice from "./common-slice";

// Configure persistence
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"], // only persist auth slice
};

// Combine all reducers
const rootReducer = combineReducers({
  auth: authReducer,

  adminProducts: adminProductsSlice,
  adminOrder: adminOrderSlice,

  shopProducts: shopProductsSlice,
  shopCart: shopCartSlice,
  shopAddress: shopAddressSlice,
  shopOrder: shopOrderSlice,
  shopSearch: shopSearchSlice,
  shopReview: shopReviewSlice,

  commonFeature: commonFeatureSlice,
});

// Persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor
export const persistor = persistStore(store);


