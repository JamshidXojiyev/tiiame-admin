import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorStyle, LabelStyle } from "../my-input/my-input.s";
import {
  DatalistStyle,
  OptionStyle,
  SearchInputStyle,
} from "./select-search.s";

function SelectSearch(props) {
  return (
    <MyDiv>
      <LabelStyle>{props.label}</LabelStyle>
      <SearchInputStyle list={props.name} {...props} />
      <DatalistStyle width={props.width} id={props.name}>
        {props.values.map((item, index) => (
          <OptionStyle value={item.value ? item.value : item} key={index} />
        ))}
      </DatalistStyle>
      {props.error && <ErrorStyle>{props.error}</ErrorStyle>}
    </MyDiv>
  );
}

export default SelectSearch;

// values = ["jon","dou","alisa"]
// values = [
//   {
//     id: 1,
//     ...
//     value: "jon",
//   },
//   {
//     id: 2,
//     ...
//     value: "alisa",
//   },
// ]
