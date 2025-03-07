import styled from "styled-components";
import { Paragrafo } from "../../components/Paragrafo/style";


export const SidebarContainer = styled.div`
  display: block;
  justify-content: center;
  text-align: center;
  position: sticky;
  top: 80px;
`

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: #eee;
  font-size: 10px;
  font-weight: bold;
  background-color: #282A35;
  cursor: pointer;
`
