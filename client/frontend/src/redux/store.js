import { createStore,applyMiddleware } from "redux";

import RootReducer from "./root-reducer";

import logger from 'redux-logger';

import { composeWithDevTools } from 'redux-devtools-extension';





export const store = createStore(RootReducer,composeWithDevTools(applyMiddleware(logger)));
