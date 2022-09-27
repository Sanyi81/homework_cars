import {useNavigate} from "react-router-dom"

import css from "./Comment.module.css";

function Comment ({comment}) {
const navigate = useNavigate;
    return (
        <div className={css.Comment}>

            <div>Id: {comment.id}</div>
            <div>Name: {comment.name}</div>
            <div>Body: {comment.body}</div>

            <button onClick={() => {
                navigate(comment.id.toString())
            }}>
                Comment
            </button>

        </div>
    )
}

export {Comment};