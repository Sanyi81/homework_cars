import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";



function CommentsDetail () {
    const {id} = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
            .then(value => value.json())
            .then(value => {
                setComment({...value})
            });
    }, [id]);

    return (
        <div>
            {JSON.stringify(comment)}
        </div>
    )
}
export {CommentsDetail};