import { Titulo as TituloStyled } from './style'

export type props = {
  children: string
  fontSize?: number
}

const Titulo = ({ children, fontSize }: props) => (
  <TituloStyled fontSize={fontSize}>{children}</TituloStyled>
)

export default Titulo
