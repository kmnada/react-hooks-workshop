import { useEffect, useState, useCallback } from "react";

// Example usage of useCallback -> when function is used as dependency to useEffect
const UseCallBackExample2 = () => {

  const [count, setCount] = useState(0);

  const innerFunction = () => {
    console.log('Inner function is called');
    // setCount((value) => value + 1);
  }

//   const innerFunction = useCallback(() => {
//     console.log('Inner function is called');
//     setCount((value) => value + 5);
// }, [])

  useEffect(() => {
    innerFunction();
  },[innerFunction]);
  

  return (
    <>
    <div>
     Toggle is now: <h1>{count} </h1>
    </div>
     <button onClick={() => setCount((value) => value + 1)}>Click me</button>
    </>
  );
};

export default UseCallBackExample2;