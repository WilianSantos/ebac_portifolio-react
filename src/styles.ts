import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './themes/ligtht'

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  list-style: none;
  text-decoration: none;
}

body {
padding-top: 80px;
padding-bottom: 80px;
background-color: ${({ theme }) => (theme as Theme).corFundo};

@media (max-width: 768px) {
  padding-top: 16px;
}
`

export default GlobalStyle

const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  gap: 56px;

  @media (max-width: 768px) {
    display: block;
    padding: 0 16px;
  }
`
export { Container }
