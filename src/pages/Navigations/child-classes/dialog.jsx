import { useFormik } from "formik";
import React, { useState } from "react";
import MyInput from "../../../components/my-input/my-input";
import MyTextarea from "../../../components/my-textarea/my-textarea";
import SelectSearch from "../../../components/select-search/select-search";
import { parentData } from "../parent-classes/parent-classes-data";
import * as Yup from "yup";
import MyButton from "../../../components/my-button/my-button";
import { MyDiv } from "../../../global-styles/my-div.s";
import { MyForm } from "../../../global-styles/my-form.s";
import { useAlert } from "react-alert";

function DialogChildClass(props) {
  const alert = useAlert();

  const formik = useFormik({
    initialValues:
      Object.keys(props.value).length > 0
        ? {
            name: props.value.name,
            parent: props.value.parent,
            comment: props.value.description,
          }
        : {
            name: "",
            parent: "",
            comment: "",
          },
    validationSchema: Yup.object({
      name: Yup.string().required("Required !"),
    }),
    onSubmit: (val) => {
      alert.error(
        "The database is being restored because it has malfunctions."
      );
      props.close(false);
      console.log(val);
    },
  });

  return (
    <MyForm onSubmit={formik.handleSubmit}>
      <MyInput
        width="370px"
        label="Parent class name:"
        placeholder="Enter your parent class name"
        name="name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && formik.errors.name ? true : false}
        errorMessage={formik.touched.name && formik.errors.name}
      />
      <SelectSearch
        label="Select Parent Class"
        name="parent"
        values={parentData.map((item) => [item.name])}
        value={formik.values.parent}
        onChange={(e) => formik.setFieldValue("parent", e.target.value)}
      />
      <MyTextarea
        label="Comment:"
        placeholder="Enter your comments"
        name="comment"
        value={formik.values.comment}
        onChange={formik.handleChange}
      />
      <MyDiv lineRight>
        <MyButton
          disabled={!formik.values.name || !formik.values.parent}
          type="submit"
          text="Save"
          width="150px"
        />
      </MyDiv>
    </MyForm>
  );
}

export default DialogChildClass;
