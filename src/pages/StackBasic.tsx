/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from "react";
import { css } from "@emotion/react";

// components
import Button from "components/Button";

// structures
import Stack from "structures/Stack";

const box = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const dataBox = css`
  flex: 1;
  display: flex;
  flex-direction: column-reverse;
  padding: 1rem;
`;

const dataItem = css`
  margin-top: 0.5rem;
  padding: 0.5rem;
  background: #333;
  border-radius: 1rem;
  color: #fff;
  width: 100%;
  text-align: center;
`;

const formBox = css`
  display: flex;
  flex-direction: row;
  padding: 1rem;
  width: 100%;

  & > *:not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const stack = new Stack<number>();
let stackNumber = 0;

const StackBasic = () => {
  const [data, setData] = useState(stack.getItems());

  useEffect(() => {
    return () => {
      stack.clear();
    };
  }, []);

  const handlePush = () => {
    stack.push(stackNumber++);
    setData(stack.getItems());
  };

  const handlePop = () => {
    stack.pop();
    setData(stack.getItems());
  };

  const handlePeak = () => {
    console.log(stack.getPeek());
  };

  const handleGetSize = () => {
    console.log(stack.getSize());
  };

  const handlePrint = () => {
    console.log(stack.getItems());
  };

  const handleClear = () => {
    stack.clear();
    setData(stack.getItems());
  };

  return (
    <div css={box}>
      <div css={dataBox}>
        {data.map((item) => (
          <div key={item} css={dataItem}>
            STACK[{item}]
          </div>
        ))}
      </div>
      <form
        css={formBox}
        onSubmit={(e) => {
          e.preventDefault();
          handlePush();
        }}
      >
        <Button type="submit">PUSH</Button>
        <Button type="button" onClick={handlePop}>
          POP
        </Button>
        <Button type="button" onClick={handlePeak}>
          PEAK
        </Button>
        <Button type="button" onClick={handleGetSize}>
          SIZE
        </Button>
        <Button type="button" onClick={handlePrint}>
          PRINT
        </Button>
        <Button type="button" onClick={handleClear}>
          CLEAR
        </Button>
      </form>
    </div>
  );
};

export default StackBasic;
