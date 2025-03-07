import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { List } from './style'

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>

    <List>
      {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
        <li>
          <Projeto />
        </li>
      ))}
    </List>
  </section>
)

export default Projetos
