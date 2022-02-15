import React, { useState } from "react";
import MyDropzone from "../../../components/my-dropzone/my-dropzone";
import MyInput from "../../../components/my-input/my-input";
import MyTextarea from "../../../components/my-textarea/my-textarea";

function DialogParentClass(props) {
  const token = localStorage.getItem("token");

  const [image, set_image] = useState();
  const [image_err, set_image_err] = useState(false);
  return (
    <>
      <MyInput
        width="370px"
        label="Parent class name:"
        placeholder="Enter your parent class name"
      />
      <MyDropzone
        set_file={(e) => set_image(e)}
        img={{
          url: ``,
          type: false,
        }}
        type="svg"
        formats={[".svg", ".png"]}
        error={image_err}
      />
      <MyTextarea label="Comment:" placeholder="Enter your comments" />
    </>
  );
}

export default DialogParentClass;
