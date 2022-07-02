import { useState } from 'react';

function useCounter(initialValue) {
    const [count, setCount] = useState(initialValue);
    const add = () => setCount(c => c + 1);
    const sub = () => setCount(c => c - 1);

    return { count, add, sub }

}

export default useCounter;