import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentsService} from "../../servises";
import {LOAD_COMMENTS} from "../../redux/actions/action";
import {Comment} from "../comment/Comment";

const Comments = () => {
  const {comments} = useSelector(state => state.commentsReducers);
  const dispatch = useDispatch();

  useEffect(() => {
      commentsService.getAll().then(({data}) => dispatch({type: LOAD_COMMENTS, payload: data}))
  }, []);
  return (
      <div>
          {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
      </div>
  );
};

export {Comments};