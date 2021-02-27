import {combineReducers} from 'redux';
import { profile } from "../reducers/profile";

export const rootReducer = combineReducers({
    profile: profile,
});