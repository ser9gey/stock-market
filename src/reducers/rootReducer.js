import {combineReducers} from 'redux';
import { initialReducer } from "../reducers/InitialReducer";

export const rootReducer = combineReducers({
    initialReducer: initialReducer,
});