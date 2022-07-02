import "./styles.css";

import { useState, useMemo } from "react";

// Example usage of useMemo -> Function result is memoized inorder to prevent expensive calculation.
const UseMemoExample2 = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);

  // const factorial = factorialOf(number);
  
  const factorial = useMemo(() => factorialOf(number), [number]);

  const onChange = (event) => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc((i) => i + 1);

  return (
    <div>
      Factorial of
      <input type="number" value={number} onChange={onChange} className="number-input"/>
      is {factorial}
      <button className="button-class" onClick={onClick}>Re-render</button>
      <div style={{display: 'none'}}>{inc}</div>
    </div>
  );
}

function factorialOf(n) {
  console.log("factorialOf(n) called!");
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}

export default UseMemoExample2;