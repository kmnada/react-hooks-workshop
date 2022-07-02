import { useState, useEffect, useLayoutEffect} from "react";

const iterations = 1000;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

// Example usage of useLayoutEffect -> useLayoutEffect starts the calculations before painting state update to the browser.
const UseLayoutExample2 = () => {
  const [color, setColor] = useState("red");
  const [time, setTime] = useState(0);
  useLayoutEffect(() => {
    if (color === "blue") {
      const time1 = new Date();
      calculatePrimes(iterations, multiplier);
      const time2 = new Date();
      setTime(time2 - time1);
    }
  }, [color]);

  useEffect(() => {
    if (color === "green") {
      const time1 = new Date();
      calculatePrimes(iterations, multiplier);
      const time2 = new Date();
      setTime(time2 - time1);
    }
  }, [color]);

  return (
    <div>
      <h1 style={{ color }}>Hello CodeSandbox</h1>
      <p>Took {time} ms</p>
      <button
      style={{ margin: 10}}
        onClick={() => {
          setColor("red");
          setTime(0);
        }}
      >
        Reset
      </button>
      <button style={{ margin: 10}} onClick={() => setColor("blue")}>useLayoutEffect</button>
      <button style={{ margin: 10}} onClick={() => setColor("green")}>useEffect</button>
    </div>
  );
};

export default UseLayoutExample2;