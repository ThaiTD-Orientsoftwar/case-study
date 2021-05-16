import React, { useCallback } from "react";
import { useState } from "react";
import { Button } from "antd";
import styled from "styled-components";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  flex-direction: column;
`;

const NumberWrapper = styled("div")`
  border: solid 1px #e0e0e0;
  border-radius: 4px;
  padding: 20px 46px;
  margin-bottom: 10px;
  width: 100%;
  background-color: #b7b0d1;

  span {
    margin: 0 10px;
    font-size: 50px;
    font-weight: 600;
  }
`;

const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-around;
  width: 500px;
`;

const Counter = () => {
  const [counter, setCounter] = useState<number>(1);

  const handleIncrease = useCallback(() => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  }, [counter]);

  const handleReset = useCallback(() => {
    const newCounter = 1;
    setCounter(newCounter);
  }, [counter]);

  return (
    <Container>
      <NumberWrapper>
        <span>{counter}</span>
      </NumberWrapper>
      <ButtonWrapper>
        <Button
          type="primary"
          onClick={handleIncrease}
          size="large"
          id="increase"
        >
          Increase
        </Button>
        <Button onClick={handleReset} size="large" id="reset">
          Reset
        </Button>
      </ButtonWrapper>
    </Container>
  );
};

export default Counter;
