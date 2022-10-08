import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './App.css';
import {Load_users} from "./index";

function App() {

  let state = useSelector(state => state.userReducer);
  console.log(state);

  let dispatch = useDispatch();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(value => {
          dispatch({type:Load_users, payload: value})
        });
  }, []);

  console.log(dispatch);

  return (
      <div>

    </div>
  );
}

export default App;
