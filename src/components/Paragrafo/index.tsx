import { Paragrafo as ParagrafoStyled } from './style'

export type props = {
  children: string
  tipo?: 'primaria' | 'secundaria'
  fontSize?: number
}

const Paragrafo = ({ children, tipo = 'primaria', fontSize }: props) => (
  <ParagrafoStyled tipo={tipo} fontSize={fontSize}>
    {children}
  </ParagrafoStyled>
)

export default Paragrafo
