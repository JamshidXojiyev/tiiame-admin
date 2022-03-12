import React, { useEffect, useState } from "react";
import MyButton from "../../../components/my-button/my-button";
import MyTable from "../../../components/my-table/my-table";
import { MyDiv } from "../../../global-styles/my-div.s";
import { PageTitle, UserLimit } from "../../../global-styles/page-styles.s";
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg";
import { ReactComponent as EditIcon } from "../../../assets/icons/edit.svg";
import Dialog from "../../../components/dialog/dialog";
import DialogParentClass from "./dialog";
import { parentData } from "./parent-classes-data";
import { useAlert } from "react-alert";

function ParentClasses(props) {
  const alert = useAlert();

  const [dataBase, setDataBase] = useState(parentData);
  const [total, setTotal] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [newData, setNewData] = useState({
    header: ["Icon", "Name", "Join Date", "Description", ""],
    body: [],
    order: ["icon", "name", "join_date", "description", "btn"],
  });
  useEffect(() => {
    const data = dataBase.map((item) => {
      const testData = {
        icon: item.icon,
        name: item.name,
        join_date: item.join_date,
        description: item.description,
        btn: (
          <MyDiv display="flex">
            <MyButton
              icon={<DeleteIcon />}
              shadowAnime
              bgNone
              onClick={() => {
                alert.error(
                  "The database is being restored because it has malfunctions."
                );
              }}
            />
            <MyButton
              icon={<EditIcon />}
              shadowAnime
              bgNone
              onClick={() => {
                setDialog({ type: true, value: item });
              }}
            />
          </MyDiv>
        ),
      };
      return testData;
    });
    setNewData({ ...newData, body: data });
  }, [parentData]);
  const [dialog, setDialog] = useState({ type: false, value: [] });
  return (
    <>
      <MyDiv margin="0 0 16px 0" display="flex">
        <MyDiv line gap="12px">
          <PageTitle>Parent classes</PageTitle>
          <UserLimit>{newData.body.length} classes</UserLimit>
        </MyDiv>
        <MyButton
          text="+ Add New Class"
          width="160px"
          onClick={() => setDialog({ type: true, value: [] })}
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
      {dialog.type && (
        <Dialog
          close={(e) => setDialog({ type: e, value: [] })}
          title="Create parent class"
          body={
            <DialogParentClass
              value={dialog.value}
              close={(e) => setDialog({ type: e, value: [] })}
            />
          }
        />
      )}
    </>
  );
}

export default ParentClasses;
