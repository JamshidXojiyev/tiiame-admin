import React, { useState } from "react";
import MyMap from "../../../components/my-map/my-map";
import { MyDiv } from "../../../global-styles/my-div.s";
import { BackPage } from "../../../global-styles/page-styles.s";
import { ReactComponent as BottomIcon } from "../../../assets/icons/bottom.svg";
import MyButton from "../../../components/my-button/my-button";

function CreatePolygon(props) {
  const [dialog, setDialog] = useState(false);
  const [textEditor, setTextEditor] = useState("");

  return (
    <>
      <MyDiv margin="0 0 16px 0" display="flex">
        <MyDiv line gap="12px">
          <BackPage onClick={() => props.close(false)}>
            <BottomIcon /> News go back
          </BackPage>
        </MyDiv>
        <MyButton
          text="Next"
          width="120px"
          onClick={() => {
            setDialog(true);
          }}
        />
      </MyDiv>
      <MyDiv block>
        <MyMap
          setPolygon={(e) => {
            console.log(e);
          }}
          polygon={[]}
          width="100%"
          height="calc(100vh - 290px)"
        />
      </MyDiv>
    </>
  );
}

export default CreatePolygon;
