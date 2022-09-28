import {useNavigate} from "react-router-dom"

import css from "./Comment.module.css";

function Comment ({comment}) {
    const navigate = useNavigate();

return (
        <div className={css.Comment}>

            <div>ID: {comment.id}</div>
            <div>Name: {comment.name}</div>

            <button onClick={() => {
                navigate(comment.id.toString(), {state: {...comment}})
            }}>
                Comment
            </button>

        </div>
    )
}

export {Comment};