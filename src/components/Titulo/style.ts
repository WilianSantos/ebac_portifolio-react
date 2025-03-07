import styled from "styled-components";

import { props } from "./index";

export const Titulo = styled.h3<props>`
  color: ${({ theme }) => theme.corPrincipal};
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
  font-weight: bold;
  margin-bottom: 16px;
  `
