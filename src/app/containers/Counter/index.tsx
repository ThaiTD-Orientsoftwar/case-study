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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          border: "solid 1px #e0e0e0",
          borderRadius: "4px",
          padding: "20px 46px",
          marginBottom: "10px",
          width: "100%",
          backgroundColor: "#b7b0d1",
        }}
      >
        <span style={{ margin: "0 10px", fontSize: "50px", fontWeight: 600 }}>
          {counter}
        </span>
      </div>
      <div>
        <Button type="primary" onClick={handleIncrease} size="large">
          Increase
        </Button>
        <Button onClick={handleReset} style={{ margin: "0 10px" }} size="large">
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
