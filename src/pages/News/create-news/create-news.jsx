import React, { useEffect, useRef, useState } from "react";
import MyButton from "../../../components/my-button/my-button";
import { MyDiv } from "../../../global-styles/my-div.s";
import { BackPage } from "../../../global-styles/page-styles.s";
import JoditEditor from "jodit-react";
import { ReactComponent as BottomIcon } from "../../../assets/icons/bottom.svg";
import Dialog from "../../../components/dialog/dialog";
import NewsDialog from "./news-dialog";
function CreateNews(props) {
  const [dialog, setDialog] = useState(false);
  const [textEditor, setTextEditor] = useState("");

  const editorRef = useRef(null);
  const [l, setl] = useState(false);
  const config = {
    readonly: false,
    height: 400,
  };
  useEffect(() => {
    // editorRef.current.value = props.newsItem.content || "";
    // setl(true);
  }, []);
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
            setTextEditor(editorRef.current.value);
            setDialog(true);
          }}
        />
      </MyDiv>
      <MyDiv block>
        <JoditEditor ref={editorRef} config={config} />
      </MyDiv>
      {dialog && (
        <Dialog
          title="Create News"
          body={
            <NewsDialog
            //   newsItem={props.newsItem}
            //   close={(e) => {
            //     setDialog(e);
            //     props.close(e);
            //   }}
            />
          }
          close={(e) => {
            setDialog(e);
          }}
        />
      )}
    </>
  );
}

export default CreateNews;
