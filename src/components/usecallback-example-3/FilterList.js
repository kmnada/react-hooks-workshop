import React, { useCallback, useState } from "react";
import { throttle } from 'lodash';
// import copyIcon from '../../images/copyIcon.png';
// import tickIcon from '../../images/tickIcon.png';
// import useCopyToClipboard from '../../hooks/useCopytoClipboard';
import './styles.css';

export function FilterList({ names }) {
  const [query, setQuery] = useState("");
  // const [isCopied, handleCopy] = useCopyToClipboard(2000);

  let filteredNames = names;

  if (query !== "") {
    filteredNames = names.filter((name) => {
      return name.toLowerCase().includes(query.toLowerCase());
    });
  }

  const changeHandler = (event) => {
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  // syntax
  // const debouncedCallback = debounce(callback, waitTime);
  // const throttledChangedHandler = throttle(changeHandler, 1000);

  // const throttledChangedHandler = useCallback(
  //   throttle(changeHandler, 1000)
  // , []);

  return (
    <div>
      <input
        onChange={changeHandler}
        type="text"
        placeholder="Type a query..."
        style={{width: 'auto'}}
      />
      {filteredNames.map((name) => (
        <div
        key={name}
        // style={{cursor: 'pointer'}}
        // onClick={() => handleCopy(name)}
        >
          
        {name}
        </div>
      ))}
      <div>{filteredNames.length === 0 && query !== "" && "No matches..."}</div>
      {/* {isCopied && <div className="copy-text">
        <h1>Name copied ...</h1>
      </div>} */}
    </div>
  );
}