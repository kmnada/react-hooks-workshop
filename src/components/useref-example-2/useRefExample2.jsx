import { useEffect, useRef, useState } from 'react';
// import usePrevious from '../../hooks/usePrevious';
import './styles.css';

// Example usage of useRef -> using useRef to store previous state
const useRefExample2 = () => {
    const [count, setCount] = useState(0);

    // const previousValue = usePrevious(count);
    const ref = useRef(null);
    
    useEffect(() => {
        ref.current = count;
    });

    return (
        <>
        <h1> Now: {count}, Previous: {ref.current}</h1>
        <button onClick={() => setCount(count+1)}>Click here</button>
        </>
    )
}

export default useRefExample2;