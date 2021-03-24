import {combineReducers} from 'redux';
import {profile} from "../reducers/profile";
import {projects} from "../reducers/projects";
import {requests} from "../reducers/requests";

export const rootReducer = combineReducers({
    profile: profile,
    projects: projects,
    requests: requests,
});