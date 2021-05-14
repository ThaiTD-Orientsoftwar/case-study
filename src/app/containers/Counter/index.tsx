import { useState } from "react";
import { Button } from "antd";

const Counter = () => {
  const [counter, setCounter] = useState(1);

  const handleIncrease = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };

  const handleReset = () => {
    const newCounter = 1;
    setCounter(newCounter);
  };

  return (
    <div>
      <div>{counter}</div>
      <Button type="primary" onClick={handleIncrease}>
        Increase
      </Button>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  );
};

export default Counter;
