import { useState, useEffect, useLayoutEffect, useRef} from "react";

// Example usage of useLayoutEffect -> useLayoutEffect starts the calculations before painting state update to the browser.
const UseLayoutExample3 = () => {
const [showLine, setShowLine] = useState(true);
const lineRef = useRef();
const buttonRef = useRef();

// useEffect(() => {
//   if(lineRef.current == null || buttonRef.current == null) return;
//   const { bottom } = buttonRef.current.getBoundingClientRect();
//   lineRef.current.style.top = `${bottom + 125}px`;
// }, [showLine]);


useLayoutEffect(() => {
  if(lineRef.current == null || buttonRef.current == null) return;
  const { bottom } = buttonRef.current.getBoundingClientRect();
  lineRef.current.style.top = `${bottom + 125}px`;
}, [showLine]);

  return (
    <>
    <button ref={buttonRef} onClick={() => setShowLine(prev => !prev)}>
      Click Here
    </button>
    {showLine && (
      <div style={{ position: "absolute", top: 150 }} ref={lineRef}>
        This is a popup
      </div>
    )

    }
    </>
  );
};

export default UseLayoutExample3;