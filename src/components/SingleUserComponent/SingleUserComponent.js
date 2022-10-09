import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {LOAD_SINGLE_USER} from "../../redux/actions/action";
import {SingleUserDetails} from "../SingleUserDetails/SingleUserDetails";

const SingleUserComponent = () => {
  const {user} = useSelector(state => state.usersReducers);
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
      dispatch({type: LOAD_SINGLE_USER, payload: +id})
  }, [id]);
  return (
      <div>
          {user && (<SingleUserDetails user={user}/>)}
      </div>
  );
};

export {SingleUserComponent};