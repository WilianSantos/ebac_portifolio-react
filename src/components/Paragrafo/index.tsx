import { Paragrafo as ParagrafoStyled } from "./style";

export type props = {
  children: string;
  tipo?: 'primaria' | 'secundaria';
};

const Paragrafo = ({ children, tipo = 'primaria' }: props) => (
  <ParagrafoStyled
    tipo={tipo}
  >
    { children }
  </ParagrafoStyled>
)

export default Paragrafo;
