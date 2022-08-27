import React from "react"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import portfolio from './redux/portfolio'

interface IProps {
    children:React.ReactNode
}

//Create Our Store
const store = configureStore({
  reducer: {
    portfolio,
  },
  devTools: process.env.NODE_ENV !== 'production',
});
//State Provider To Provide store state in our application
const StoreProvider = ({ children }: IProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export type RootState = ReturnType<typeof store.getState>

export default StoreProvider;