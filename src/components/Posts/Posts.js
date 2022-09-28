import {useEffect, useState} from "react";

import {Post} from "../Post/Post";

function Posts () {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });
    }, []);

    return (
        <div>
            {posts.map(post => <Post post={post} key={post.id}/>)}
        </div>
    )
}
export {Posts};