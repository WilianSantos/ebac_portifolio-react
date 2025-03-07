import styled from "styled-components";

import { props } from "./index";

export const Paragrafo = styled.p<props>`
  font-size: 14px;
  color: ${({ tipo }) => tipo === "primaria" ? "#282A35" : "#949494"};
  line-height: 22px;
  `
