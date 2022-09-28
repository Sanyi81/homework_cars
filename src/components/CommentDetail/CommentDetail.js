import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function CommentDetail () {
    const {id} = useParams();
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
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
export {CommentDetail};