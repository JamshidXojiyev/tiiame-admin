import styled from "styled-components";
import { Card } from "antd";

export const CardComponent = styled(Card)`
  && {
    width: calc(25% - 4px);
    img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }
    .ant-card-body {
      padding: 16px;
    }
    .ant-card-meta-description {
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
  }
`;
