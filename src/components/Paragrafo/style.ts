import styled from "styled-components";

import { props } from "./index";

export const Paragrafo = styled.p<props>`
  font-size: ${({ fontSize }) => fontSize ? `${fontSize}px` : "14px"};
  color: ${({ tipo, theme }) => tipo === "primaria" ? theme.corPrincipal : theme.corSecundaria};
  line-height: 22px;
  `
