import {combineReducers} from 'redux';
import {profile} from "./profile";
import {projects} from "./projects";
import {requests} from "./requests";

export const rootReducer = combineReducers({
    profile,
    projects,
    requests,
});