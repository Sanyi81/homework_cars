import {useEffect, useState} from "react";

import {Todo} from "../Todo/Todo";

function Todos () {
      const [todos, setTodos] = useState([]);

      useEffect(() => {
          fetch('https://jsonplaceholder.typicode.com/todos')
              .then(value => value.json())
              .then(value => {
                  setTodos(value)
              });
      }, []);

      return (
          <div>
              {todos.map(todo => <Todo todo={todo} key={todo.id}/>)}
          </div>
      )
}
export {Todos};