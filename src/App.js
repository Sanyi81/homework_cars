import './App.css';
import {
  Route, Link, Routes
} from "react-router-dom";

import {Albums, CommentDetail, Comments, Home, Todos} from "./components";


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
                <Route path={'/comments/:id'} element={<CommentDetail/>}/>
            </Route>
          </Routes>
        <hr/>
    </div>
  );
}

export default App;
