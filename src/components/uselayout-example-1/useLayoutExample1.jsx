import { useState, useEffect, useLayoutEffect} from "react";
import './styles.css';

// Example usage of useLayoutEffect -> useLayoutEffect is called before useEffect
const UseLayoutExample1 = () => {
  const [count, setCount] = useState(0);


  useEffect(() => {
    console.log("USE EFFECT FUNCTION TRIGGERED");
  });

  // change the hook below to `useLayoutEffect` to see a different log order.
  useEffect(() => {
    console.log("USE EFFECT SECOND FUNCTION TRIGGERED");
  });

  return (
    <>
     <div className="container">
      <h1 className="title">{count}</h1>
      <h2>
        <button onClick={() => setCount(count => count + 1)}>
          Update Count
        </button>
      </h2>
    </div>
    </>
  );
};

export default UseLayoutExample1;