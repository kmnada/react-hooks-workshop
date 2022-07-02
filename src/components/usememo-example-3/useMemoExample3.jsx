import "./styles.css";

import { useState } from "react";

// Example usage of useMemo -> Alternatives to useMemo
const UseMemoExample3 = () => {
    let [color, setColor] = useState("red");
    return (
      <>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
        <ExpensiveTree />
      </>
    );
}

// const UseMemoExample3 = () => {
//     return (
//         <>
//           <Form />
//           <ExpensiveTree />
//         </>
//       );
// }

// const UseMemoExample3 = () => {
//     let [color, setColor] = useState("red");
//     return (
//         <div style={{ color }}>
//         <input value={color} onChange={(e) => setColor(e.target.value)} />
//         <p>Hello, world!</p>
//         <ExpensiveTree />
//       </div>
//     );
// }

// const UseMemoExample3 = () => {
//     return (
//         <ColorPicker>
//           <p>Hello, world!</p>
//           <ExpensiveTree />
//         </ColorPicker>
//       );
// }

// function ColorPicker({ children }) {
//     let [color, setColor] = useState("red");
//     return (
//       <div style={{ color }}>
//         <input value={color} onChange={(e) => setColor(e.target.value)} />
//         {children}
//       </div>
//     );
//   }

function Form() {
    let [color, setColor] = useState("red");
    return (
      <>
        <input value={color} onChange={(e) => setColor(e.target.value)} />
        <p style={{ color }}>Hello, world!</p>
      </>
    );
  }

function ExpensiveTree() {
    let now = performance.now();
    while (performance.now() - now < 100) {
      // Artificial delay -- do nothing for 100ms
    }
    console.log('here');
    return <p>I am a very slow component tree.</p>;
  }
  

export default UseMemoExample3;