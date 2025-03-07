import styled from "styled-components"

import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.corBorda};
  padding: 16px;
`

const ButtonLink = styled.a`
  color: ${({ theme }) => theme.corFundo};
  background-color: ${({ theme }) => theme.corFundoBotao};
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`

const Projeto = () => (
  <Card>
    <Titulo>Projeto lista de tarefas</Titulo>
    <Paragrafo tipo="secundaria">
      Lista de tarefas
    </Paragrafo>
    <ButtonLink href="">Ver projeto</ButtonLink>
  </Card>
)

export default Projeto
