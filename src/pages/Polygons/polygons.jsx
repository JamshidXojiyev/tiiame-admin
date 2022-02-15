import React, { useState } from "react";
import Dialog from "../../components/dialog/dialog";
import MyButton from "../../components/my-button/my-button";
import MyInput from "../../components/my-input/my-input";
import MyTable from "../../components/my-table/my-table";
import { MyDiv } from "../../global-styles/my-div.s";
import { PageTitle, UserLimit } from "../../global-styles/page-styles.s";
import { ReactComponent as DeleteIcon } from "../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../assets/icons/edit.svg";
import CreatePolygon from "./create-polygon/create-polygon";
// import CreateNews from "./create-news/create-news";

function Polygons(props) {
  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: [
      "Id",
      "Polygon Title",
      "Polygon position",
      "Polygon Latitude and Longitude",
      "",
    ],
    body: [
      {
        id: 1,
        polygon_title: "5 educational building",
        polygon_position: "Educational buildings  5 educational buildings ",
        polygon_lat_lng: "54.32156165, 46.32156165",
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
      "polygon_title",
      "polygon_position",
      "polygon_lat_lng",
      "btn",
    ],
  });
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newsItem, setNewsItem] = useState();

  if (dialogOpen) {
    return (
      <>
        <CreatePolygon
          // newsItem={newsItem ? newsItem : ""}
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

export default Polygons;
