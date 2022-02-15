import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { MyImg } from "../../global-styles/my-img.s";
import { H1, H2, Left, Right, SignInBlock } from "./signin.s";
import BrangIMG from "../../assets/brand-img.png";
import SignInIMG from "../../assets/signin-bg.png";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";

function SignIn(props) {
  return (
    <MyDiv height="100vh" center>
      <SignInBlock>
        <Left>
          <MyImg margin="0 0 0 36px" src={SignInIMG} />
        </Left>
        <Right>
          <MyDiv padding="0 24px" center>
            <MyImg src={BrangIMG} margin="0 0 20px 0" />
            <H1>Sign In to Admin Panel</H1>
            <H2>Enter your username and password below</H2>
            <MyInput
              width="100%"
              label="USERNAME"
              darck
              placeholder="Enter your username"
            />
            <MyDiv height="24px" />
            <MyInput
              width="100%"
              label="PASSWORD"
              icon
              darck
              placeholder="Enter your password"
            />
            <MyDiv height="24px" />
            <MyButton disabled={false} text="SignIn" darck />
          </MyDiv>
        </Right>
      </SignInBlock>
    </MyDiv>
  );
}

export default SignIn;
