import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postsService} from "../../servises";
import {LOAD_POSTS} from "../../redux/actions/action";
import {Post} from "../post/Post";

const Posts = () => {
  const {posts} = useSelector(state => state.postsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
      postsService.getAll().then(({data}) => dispatch({type: LOAD_POSTS, payload: data}))
  }, []);

  return (
      <div>
          {posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
  )
}

export {Posts};