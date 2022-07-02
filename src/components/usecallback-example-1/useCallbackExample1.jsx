import { useState, useCallback } from "react";
import Todos from '../todo-use-callback';

// Example usage of useCallback -> without usecallback, child component rerenders even when count value is increased
const UseCallBackExample1 = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "new Todo"]);
  }, []);

  // const addTodo = () => {
  //   setTodos((t) => [...t, "New Todo"]);
  // };

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );
};

export default UseCallBackExample1;