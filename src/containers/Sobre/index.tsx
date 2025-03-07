import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus
      aliquid molestiae fugiat debitis accusamus voluptates praesentium tempore
      est officia, eum temporibus vitae, ducimus laborum consequuntur
      consequatur dicta rem modi magnam.
    </Paragrafo>
    <GithubSection>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=WilianSantos&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=WilianSantos&layout=compact&langs_count=7&theme=dracula"
      />
    </GithubSection>
  </section>
)

export default Sobre
