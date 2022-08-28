import { SaveOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "../../global-styles/container.s";
import { HeaderContainer } from "../objects/object.s";
import { ObjectInfoComponent } from "./object-info.s";

const ObjectInfo = () => {
  const history = useHistory();
  return (
    <ObjectInfoComponent>
      <HeaderContainer>
        <Button
          onClick={() => history.push("/object-info")}
          type="primary"
          icon={<SaveOutlined />}
        >
          Save polygon
        </Button>
      </HeaderContainer>
      <Container>
        <h1>this is object info page</h1>
      </Container>
    </ObjectInfoComponent>
  );
};

export default ObjectInfo;
