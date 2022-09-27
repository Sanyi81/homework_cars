import './App.css';
import {
  BrowserRouter, Routes, Route, Link, Outlet
} from "react-router-dom";

import {Albums, Comments, CommentsDetail, Home, Todos} from "./components";


function App() {
  return (
      <div>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/todos'}>Todos</Link></li>
          <li><Link to={'/albums'}>Albums</Link></li>
          <li><Link to={'/comments'}>Comments</Link></li>
        </ul>
        <hr/>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path={'todos'} element={<Todos/>}/>
            <Route path={'albums'} element={<Albums/>}/>
            <Route path={'comments'} element={<Comments/>}>
                <Route path={'?postId=:id'} element={<CommentsDetail/>}/>
            </Route>
          </Routes>
        <hr/>
    </div>
  );
}

export default App;
