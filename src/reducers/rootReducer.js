import {combineReducers} from 'redux';
import { addUser } from "../reducers/addUser";
import { editProfile } from "../reducers/editProfile"

export const rootReducer = combineReducers({
    addUser: addUser,
    editProfile: editProfile,
});