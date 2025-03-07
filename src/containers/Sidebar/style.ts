import styled from 'styled-components'
import { Paragrafo } from '../../components/Paragrafo/style'

export const SidebarContainer = styled.div`
  text-align: center;
  position: sticky;
  top: 80px;

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
`

export const Descricao = styled(Paragrafo)`
  margin-top: 24px;
  margin-bottom: 40px;
`

export const BotaoTema = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${({ theme }) => theme.corFundo};
  font-size: 10px;
  font-weight: bold;
  background-color: ${({ theme }) => theme.corPrincipal};
  cursor: pointer;
`
