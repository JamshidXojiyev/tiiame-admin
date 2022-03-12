import React, { useState } from "react";
import { MyDiv } from "../../../global-styles/my-div.s";
import { BackPage } from "../../../global-styles/page-styles.s";
import { ReactComponent as BottomIcon } from "../../../assets/icons/bottom.svg";
import MyButton from "../../../components/my-button/my-button";
import SelectSearch from "../../../components/select-search/select-search";
import PolygonMap from "./map/polygon-map";
import { useAlert } from "react-alert";

function CreatePolygon(props) {
  const alert = useAlert();
  const [dialog, setDialog] = useState(false);
  const [searchName, setSearchName] = useState("");
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
            values={[
              "5 educational building",
              "11 educational building",
              "B educational building",
              "G educational building",
              "V educational building",
              "1 lecture halls",
              "2 lecture halls",
            ]}
            placeholder="Select building name"
            onChange={(e) => setSearchName(e.target.value)}
          />
          <MyButton
            text="Save"
            width="120px"
            disabled={searchName.length > 3 ? false : true}
            onClick={() => {
              // setDialog(true);
              alert.error(
                "The database is being restored because it has malfunctions."
              );
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
