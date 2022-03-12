import React from "react";
import MyInput from "../../../components/my-input/my-input";
import FilesDropzone from "../../../components/files-dropzone/files-dropzone";
import MyTextarea from "../../../components/my-textarea/my-textarea";
import MyButton from "../../../components/my-button/my-button";
import { MyDiv } from "../../../global-styles/my-div.s";
import { useAlert } from "react-alert";

function NewsDialog(props) {
  const alert = useAlert();

  return (
    <>
      <MyInput width="370px" label="Title:" placeholder="Enter your title" />
      <MyInput
        width="370px"
        label="Video guide to object:"
        placeholder="Enter your video url"
      />
      <FilesDropzone
        formats={[".jpg", ".png"]}
        set_file={(e) => console.log(e)}
        // images={props.driver.car_images}
      />
      {/* <MyTextarea label="Search hashtag:" placeholder="#hashtag" /> */}
      <MyDiv lineRight>
        <MyButton
          text="Save"
          width="120px"
          onClick={() => {
            // console.log("I`ts mee");
            alert.error(
              "The database is being restored because it has malfunctions."
            );
          }}
        />
      </MyDiv>
    </>
  );
}

export default NewsDialog;
