import React, { useState, useRef, forwardRef } from 'react';
// import useDocumentTitle from '../../hooks/useDocumentTitle';

const Input = forwardRef((props, ref) => {
  return <input ref={ref} {...props} />;
});

const ForwardRefExample = () => {
  const inputRef = useRef(null);
  const [value, setValue] = useState('');
  // const [title, setTitle] = useState('');

  // useDocumentTitle(title);

  const onInputChange = (e) => {
    e.preventDefault();
    setValue(e.target.value);
  };

  const focus = () => {
    inputRef.current?.focus();
  };

  return (
    <>
    <div className='input-wrapper'>
      <Input value={value} onChange={onInputChange} ref={inputRef} />
      {/* <button style={{ marginLeft:20 }} onClick={() => setTitle(value)}>Set title</button> */}
    </div>
      <button style={{ marginTop: 20 }} onClick={focus}>Focus</button>
    </>
  );
};

export default ForwardRefExample;