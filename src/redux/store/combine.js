import {combineReducers} from "redux";
import {commentsReducers, postsReducers, usersReducers} from "../reducers";

const reducer = combineReducers({
    usersReducers,
    postsReducers,
    commentsReducers
});

export {reducer};