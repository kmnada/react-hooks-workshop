import { useState, useEffect, useLayoutEffect } from 'react';


const Counter = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
      // perform side effect
      debugger;
      console.log('count', count);
    }, [count])

    return (
    <div>
        <h1> {`The current count is ${count}`} </h1>
        <button onClick={() => setCount(count => count + 1)}>
            Update Count
        </button>
    </div>
    )
 }

 export default Counter;
