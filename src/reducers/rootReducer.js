import {combineReducers} from 'redux';
import {profile} from "../reducers/profile";
import {projects} from "../reducers/projects"

export const rootReducer = combineReducers({
    profile: profile,
    projects: projects,
});