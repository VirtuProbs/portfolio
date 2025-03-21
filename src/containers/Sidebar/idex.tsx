import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descrição, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
    <Avatar />
    <Titulo fontSize={20}>Victhor Gabriel</Titulo>
    <Paragrafo tipo="secundario" fontSize={16}>
      VirtuProbs
    </Paragrafo>
    <Descrição tipo='principal' fontSize={12}>Engenheiro front-end</Descrição>
    <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
