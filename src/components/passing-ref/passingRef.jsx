import React, { useRef } from 'react';
import InputComponent from '../input-component';
import './styles.css';

const PassingRef = () => {
    const inputRef = useRef(null);

    const handleOnClickFocus = () => {
        if(!!inputRef) {
            inputRef.current.focus();
        }
    }

    return (
        <div className='container'>
            <InputComponent ref={inputRef} />
            <button onClick={handleOnClickFocus}> Focus on input</button>
        </div>
        
    )
}

export default PassingRef;