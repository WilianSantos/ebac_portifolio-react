import FotoPerfil from "../../components/Avatar"
import Paragrafo from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { Descricao, BotaoTema, SidebarContainer } from "./style"


const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <FotoPerfil />
    <Titulo fontSize={20}>Wilian Santos</Titulo>
    <Paragrafo tipo="secundaria" fontSize={16}>WilianSantos</Paragrafo>
    <Descricao tipo="primaria" fontSize={12}>Desenvolvedor FullStack Python</Descricao>
    <BotaoTema>Alterar Tema</BotaoTema>
  </SidebarContainer>
  </aside>
)

export default Sidebar
