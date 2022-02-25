import React, { useState } from "react";
import { MyDiv } from "../../../global-styles/my-div.s";
import { BackPage } from "../../../global-styles/page-styles.s";
import { ReactComponent as BottomIcon } from "../../../assets/icons/bottom.svg";
import MyButton from "../../../components/my-button/my-button";
import SelectSearch from "../../../components/select-search/select-search";
import PolygonMap from "./map/polygon-map";

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
        <MyDiv lineRight gap="12px">
          <SelectSearch
            width="230px"
            name="asd"
            values={["jon", "dou", "alisa"]}
          />
          <MyButton
            text="Next"
            width="120px"
            onClick={() => {
              setDialog(true);
            }}
          />
        </MyDiv>
      </MyDiv>
      <MyDiv block>
        <PolygonMap
          width="100%"
          height="calc(100vh - 180px)"
          layer={(e) => console.log(e)}
        />
      </MyDiv>
    </>
  );
}

export default CreatePolygon;
