import styled from "styled-components"

import Paragrafo from "../Paragrafo"
import Titulo from "../Titulo"

const Card = styled.div`
  border: 1px solid #c1c1c1;
  padding: 16px;
`

const ButtonLink = styled.a`
  color: #fff;
  background-color: #4476BF;
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
