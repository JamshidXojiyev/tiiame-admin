import React, { useState } from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { ErrorStyle, IconStyle, InputStyle, LabelStyle } from "./my-input.s";
import { ReactComponent as ShowIcon } from "../../assets/icons/show.svg";
import { ReactComponent as HideIcon } from "../../assets/icons/hide.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
function MyInput(props) {
  const [typeBtn, setTypeBtn] = useState(
    props.label === "PASSWORD" ? true : false
  );

  return (
    <MyDiv width={props.width ? props.width : "auto"}>
      <LabelStyle>{props.label}</LabelStyle>
      <MyDiv width={props.search && "230px"} position="relative">
        <InputStyle type={typeBtn ? "password" : "text"} {...props} />
        {props.icon && (
          <IconStyle
            onClick={() => {
              !props.search && setTypeBtn(!typeBtn);
            }}
            icon={
              props.search ? (
                <SearchIcon />
              ) : typeBtn ? (
                <ShowIcon />
              ) : (
                <HideIcon />
              )
            }
          />
        )}
      </MyDiv>
      {props.error && <ErrorStyle>{props.error}</ErrorStyle>}
    </MyDiv>
  );
}

export default MyInput;
