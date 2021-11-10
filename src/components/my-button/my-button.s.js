import { ButtonBase } from "@material-ui/core";
import styled, { css } from "styled-components";

const primaryStyles = css`
  background: red;
`;
const secondaryStyles = css`
  background: black;
`;

export const Btn = styled(ButtonBase)`
  && {
    ${({ primary, secondary }) =>
      primary
        ? primaryStyles
        : secondary
        ? secondaryStyles
        : css`
            background: blue;
          `}
    padding: ${({ large }) => (large ? "20px" : "10px")};
  }
`;

