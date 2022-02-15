import React, { useState } from "react";
import MyButton from "../my-button/my-button";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import {
  DialogBody,
  DialogContainer,
  DialogHeader,
  DialogStyle,
  Title,
  DialogClose,
} from "./dialog.s";

function Dialog(props) {
  return (
    <DialogStyle>
      <DialogClose onClick={() => props.close(false)} />
      <DialogContainer>
        <DialogHeader>
          <Title>{props.title}</Title>
          <MyButton
            icon={<CloseIcon />}
            shadowAnime
            bgNone
            onClick={() => props.close(false)}
          />
        </DialogHeader>
        <DialogBody>{props.body}</DialogBody>
      </DialogContainer>
    </DialogStyle>
  );
}

export default Dialog;
