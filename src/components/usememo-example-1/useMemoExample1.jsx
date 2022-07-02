import { useState } from "react";
import Child from "../child-component";
import "./styles.css";

// Example usage of useMemo -> Function result is memoized inorder to prevent expensive calculation.
const UseMemoExample1 = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  console.log("Parent render");
  return (
    <div className="App">
      <button onClick={handleClick}>Increment</button>
      <h2>{count}</h2>
      <Child name={"joe"} />
    </div>
  );
}
  

export default UseMemoExample1;