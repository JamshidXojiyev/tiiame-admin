import React, { useState } from "react";
import Dialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, UserLimit } from "../../global-styles/page-styles.s";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import CreateNews from "./create-news/create-news";

function News(props) {
  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: [
      "Id",
      "Title",
      "Video guide to object",
      "Object images limit",
      "Search hashtag",
      "",
    ],
    body: [
      {
        id: 1,
        title: "5 educational building",
        video_guide_to_object: "success",
        object_img_limit: "12 ",
        search_hashtag: "#5,  #5-o'quv binosi,  #5 educational building,  #YRB",
        btn: (
          <MyDiv lineRight>
            <MyButton icon={<DeleteIcon />} shadowAnime bgNone />
            <MyButton
              icon={<EditIcon />}
              shadowAnime
              bgNone
              onClick={() => setDialogOpen(true)}
            />
          </MyDiv>
        ),
      },
    ],
    order: [
      "id",
      "title",
      "video_guide_to_object",
      "object_img_limit",
      "search_hashtag",
      "btn",
    ],
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newsItem, setNewsItem] = useState();

  if (dialogOpen) {
    return (
      <>
        <CreateNews
          newsItem={newsItem ? newsItem : ""}
          close={(e) => {
            setDialogOpen(e);
          }}
        />
      </>
    );
  }

  return (
    <>
      <MyDiv margin="0 0 16px 0" display="flex">
        <MyDiv line gap="12px">
          <PageTitle>Parent classes</PageTitle>
          <UserLimit>274 classes</UserLimit>
          <MyInput icon search placeholder="Search classes" />
        </MyDiv>
        <MyButton
          text="+ Add New Class"
          width="160px"
          onClick={() => setDialogOpen(true)}
        />
      </MyDiv>
      <MyDiv block>
        <MyTable
          data={newData}
          total={total}
          set_page_limit={(e) => setPageLimit(e)}
          set_page={(e) => setPage(e)}
        />
      </MyDiv>
    </>
  );
}

export default News;
