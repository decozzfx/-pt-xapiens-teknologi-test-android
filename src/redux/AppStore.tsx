import React from "react";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { Provider, useDispatch } from "react-redux";
import { reducer as dataUserReducer } from "./reducers/DataUserReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ActivityIndicator } from "react-native";
import colors from "@/configs/colors";
import { createLogger } from "redux-logger";

const logger = createLogger({
  level: {
    prevState: false,
    nextState: false,
  },
  colors: {
    title: () => "inherit",
    prevState: () => "#9E9E9E",
    action: () => "#03A9F4",
    nextState: () => "#4CAF50",
    error: () => "#F20404",
  },
});

const persistConfigDatauser = {
  key: "persistConfigDataUser",
  storage: AsyncStorage,
};

const persistedDataUserReducer = persistReducer(
  persistConfigDatauser,
  dataUserReducer
);

const combinedReducers = combineReducers({
  dataUser: persistedDataUserReducer,
});

export const store = configureStore({
  reducer: combinedReducers,
  middleware: (defaultMiddleware) =>
    defaultMiddleware({ serializableCheck: false }).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export function withAppStore<T>(WrappedComponent: React.FC<T>) {
  const ComponentWithStore = (props: T) => {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<ActivityIndicator size="large" color={colors.base.grey} />}
          persistor={persistStore(store)}
        >
          <WrappedComponent {...(props as T as any)} />
        </PersistGate>
      </Provider>
    );
  };

  return ComponentWithStore;
}
