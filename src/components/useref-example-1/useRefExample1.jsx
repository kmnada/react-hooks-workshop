import { useRef, useState } from 'react';
import './styles.css';

// Example usage of useRef -> useRef rules 1 and 2
const useRefExample1 = () => {
    const [toggle, setToggle] = useState(false);
    const counterRef = useRef(0);
    const inputRef = useRef(null);

    const handleOnClick = () => {
        counterRef.current++;
        console.log(`Clicked ${counterRef.current} times`);
    }

    console.log('I rendered!');
    
    const handleOnClickToggle = () => setToggle(!toggle);
    return (
        <div className='container'>
            <button onClick={handleOnClick}>
                Click me
            </button>
            <div style={{margin: 10}}>
                {`Clicked ${counterRef.current} times`}
            </div>
            <button onClick={handleOnClickToggle}>
                Toggle Button
            </button>
            <input style={{ margin:10 }} ref={inputRef} />
        </div>
    )
}

export default useRefExample1;