import React, { useState } from "react";
import MyDropzone from "../../../components/my-dropzone/my-dropzone";
import MyInput from "../../../components/my-input/my-input";
import MyTextarea from "../../../components/my-textarea/my-textarea";
import * as Yup from "yup";
import MyButton from "../../../components/my-button/my-button";
import { MyDiv } from "../../../global-styles/my-div.s";
import { MyForm } from "../../../global-styles/my-form.s";
import { useAlert } from "react-alert";
import { useFormik } from "formik";

function DialogParentClass(props) {
  const alert = useAlert();

  const [image, set_image] = useState();

  const formik = useFormik({
    initialValues:
      Object.keys(props.value).length > 0
        ? {
            name: props.value.name,
            icon: [],
            comment: props.value.description,
          }
        : {
            name: "",
            icon: null,
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
      />
      <MyDropzone accept={"image/svg+xml"} fileResponse={(e) => set_image(e)} />
      <MyTextarea
        label="Comment:"
        placeholder="Enter your comments"
        name="comment"
        value={formik.values.comment}
        onChange={formik.handleChange}
      />
      <MyDiv lineRight>
        <MyButton
          disabled={!formik.values.name || !image}
          type="submit"
          text="Save"
          width="150px"
        />
      </MyDiv>
    </MyForm>
  );
}

export default DialogParentClass;
