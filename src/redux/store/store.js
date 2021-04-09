import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../../redux/reducers/rootReducer";
import logger from 'redux-logger';

export const store = createStore(rootReducer, applyMiddleware(logger));