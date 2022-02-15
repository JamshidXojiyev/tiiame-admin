import React, { useState } from "react";
import MyButton from "../../../components/my-button/my-button";
import MyTable from "../../../components/my-table/my-table";
import { MyDiv } from "../../../global-styles/my-div.s";
import { PageTitle, UserLimit } from "../../../global-styles/page-styles.s";
import MyInput from "../../../components/my-input/my-input";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import Dialog from "../../../components/dialog/dialog";
import DialogParentClass from "./dialog";

function ParentClasses(props) {
  const [dataBase, setDataBase] = useState([]);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: ["Icon", "Name", "Description", ""],
    body: [
      {
        icon: (
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 15V12.5"
              stroke="#8C94B1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
            <path
              d="M8.39166 2.34998L2.61666 6.97498C1.96666 7.49164 1.55 8.58331 1.69166 9.39998L2.8 16.0333C3 17.2166 4.13333 18.175 5.33333 18.175H14.6667C15.8583 18.175 17 17.2083 17.2 16.0333L18.3083 9.39998C18.4417 8.58331 18.025 7.49164 17.3833 6.97498L11.6083 2.35831C10.7167 1.64164 9.275 1.64164 8.39166 2.34998Z"
              stroke="#8C94B1"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        ),
        name: "Educational buildings",
        description:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam placeat reiciendis, rem error suscipit autem minus!",
        btn: (
          <MyDiv display="flex">
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
    order: ["icon", "name", "description", "btn"],
  });
  const [dialogOpen, setDialogOpen] = useState(false);
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
      {dialogOpen && (
        <Dialog
          close={(e) => setDialogOpen(e)}
          title="Create parent class"
          body={<DialogParentClass />}
        />
      )}
    </>
  );
}

export default ParentClasses;
