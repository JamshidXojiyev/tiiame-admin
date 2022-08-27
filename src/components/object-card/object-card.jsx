import React from "react";
import { CardComponent } from "./object-card.s";
import CardImg from "../../assets/card-img.png";

import { Card } from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  FolderViewOutlined,
  SelectOutlined,
} from "@ant-design/icons";
const { Meta } = Card;

const ObjectCard = (props) => {
  return (
    <CardComponent
      hoverable
      cover={<img src={CardImg} />}
      actions={[
        <SelectOutlined
          key="attach"
          onClick={(e) => props.on_action("attach")}
        />,
        <FolderViewOutlined
          key="view"
          onClick={(e) => props.on_action("view")}
        />,
        <EditOutlined key="edit" onClick={(e) => props.on_action("edit")} />,
        <DeleteOutlined
          key="delete"
          onClick={(e) => props.on_action("delete")}
        />,
      ]}
      activeTabKey={(e) => console.log(e)}
      onTabChange={(e) => console.log(e)}
    >
      <Meta title={props.title} description={props.description} />
    </CardComponent>
  );
};

export default ObjectCard;
