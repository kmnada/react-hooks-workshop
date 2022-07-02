import { useState } from 'react';
import './styles.css';
import useDocumentTitle from '../../hooks/useDocumentTitle';

const CustomHook3 = () => {
const [count, setCount] = useState(0);
const increment = () => setCount(count + 1);
const title = `You clicked ${count} times.`;
useDocumentTitle(title);

    return (
        <div>
          <h3>{count}</h3>
          <button onClick={increment}>Increment</button>
        </div>
    )
}

export default CustomHook3;