import {
  EditOutlined,
  EllipsisOutlined,
  FileAddOutlined,
  SelectOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import { Container } from "../../global-styles/container.s";
import {
  HeaderContainer,
  ObjectCardContainer,
  ObjectPageComponent,
} from "./object.s";
import ObjectCard from "../../components/object-card/object-card";
import { ObjectsData } from "../../server/objects-data";

const ObjectPage = () => {
  const [objects, setObjects] = useState(ObjectsData);
  return (
    <ObjectPageComponent>
      <HeaderContainer>
        <Button type="primary" icon={<SelectOutlined />}>
          Attach object
        </Button>
        <Button type="primary" icon={<FileAddOutlined />}>
          Create new object
        </Button>
      </HeaderContainer>
      <Container>
        <ObjectCardContainer>
          {objects.map((item, key) => (
            <ObjectCard
              key={key}
              title={item.en.name}
              description={item.en.deskription}
              on_action={(e) => console.log(e)}
            />
          ))}
        </ObjectCardContainer>
      </Container>
    </ObjectPageComponent>
  );
};

export default ObjectPage;
