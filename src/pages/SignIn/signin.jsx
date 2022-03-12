import React from "react";
import { MyDiv } from "../../global-styles/my-div.s";
import { MyImg } from "../../global-styles/my-img.s";
import { H1, H2, Left, Right, SignInBlock } from "./signin.s";
import BrangIMG from "../../assets/brand-img.png";
import SignInIMG from "../../assets/signin-bg.png";
import MyInput from "../../components/my-input/my-input";
import MyButton from "../../components/my-button/my-button";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

function SignIn(props) {
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .test(
          "Start from letter",
          "This field should start from letter",
          (value) => Number.isNaN(Number(value[0]))
        )
        .max(30, "Maximum length 30 characters")
        .min(5, "Minimum length is 5 characters")
        .required("Required"),
      password: Yup.string()
        .max(30, "Maximum length 30 characters")
        .min(5, "Minimum length is 5 characters")
        .required("Required"),
    }),
    onSubmit: (val) => {
      console.log(val);
      history.push("/");
    },
  });
  return (
    <MyDiv height="100vh" center>
      <SignInBlock>
        <Left>
          <MyImg margin="0 0 0 36px" src={SignInIMG} />
        </Left>
        <Right>
          <form onSubmit={formik.handleSubmit}>
            <MyDiv padding="0 24px" center>
              <MyImg src={BrangIMG} margin="0 0 20px 0" />
              <H1>Sign In to Admin Panel</H1>
              <H2>Enter your username and password below</H2>
              <MyInput
                width="100%"
                label="USERNAME"
                darck
                placeholder="Enter your username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.username && formik.errors.username}
              />
              <MyDiv height="24px" />
              <MyInput
                width="100%"
                label="PASSWORD"
                icon
                darck
                placeholder="Enter your password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
              />
              <MyDiv height="24px" />
              <MyButton disabled={false} text="SignIn" darck />
            </MyDiv>
          </form>
        </Right>
      </SignInBlock>
    </MyDiv>
  );
}

export default SignIn;
