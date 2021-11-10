import React from "react";
import { Btn } from "./my-button.s";

function MyButton({ ...rest }) {
  const { icon, text } = rest;
  return (
    <>
      <Btn {...rest}>
        {icon}
        {text}
      </Btn>
    </>
  );
}

export default MyButton;
