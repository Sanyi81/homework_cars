import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from "redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


export const Load_users = "Load_users";
const userReducer = ((state = {users: [], user: null}, action) => {
    switch (action.type) {
        case Load_users:
            return {...state, users: action.payload};
        case "Choose_user":
            let id = action.payload;
            let user = state.users.find(value => value.id === id);
            return {...state, user: user}

        default:
            return state;
    }

});

const postReducer = ((state = {posts: [], post: null}, action) => {
    switch (action.type) {
        case "Load_posts":
            return {...state, posts: action.payload};
        case "Choose_post":
            let id = action.payload;
            let post = state.posts.find(value => value.id === id);
            return {...state, post}

        default:
            return state;
    }

});

const commentReducer = ((state = {comments: [], comment: null}, action) => {
    switch (action.type) {
        case "Load_comments":
            return {...state, comments: action.payload};
        case "Choose_comment":
            let id = action.payload;
            let comment = state.comments.find(value => value.id === id);
            return {...state, comment}

        default:
            return state;
    }

});

let reducer = combineReducers({
        userReducer,
        postReducer,
        commentReducer
})

let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
