import React, { useRef, useState, useEffect } from 'react';
import './styles.css';

const UseRefExample = () => {
const obj = useRef(100);
const [counter, setCounter] = useState(0);
const renders = useRef(0);

useEffect(() => {
    console.log('effect ran!');
}, [obj]);

useEffect(() => {
    renders.current +=1;
});

useEffect(() => {
    obj.current*= 5;
    console.log('counter value', counter);
    console.log('new object ref', obj);
}, [counter]);

    return (
        <div className="container">
            <h1 onClick={() => setCounter(val => val+1)}>Hello World {counter} </h1>
            <h2>Current renders: {renders.current}</h2>
        </div>
    )
}

export default React.memo(UseRefExample);