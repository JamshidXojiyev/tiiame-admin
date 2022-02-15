import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorStyle, LabelStyle, TextareaStyle } from "./my-textarea.s";

function MyTextarea(props) {
  return (
    <MyDiv>
      <LabelStyle>{props.label}</LabelStyle>
      <TextareaStyle {...props}>{props.value}</TextareaStyle>
      {props.error && <ErrorStyle>{props.error}</ErrorStyle>}
    </MyDiv>
  );
}

export default MyTextarea;
