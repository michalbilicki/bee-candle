import { LayoutComponent } from 'components/Layout/index.jsx'
import YouTube from 'react-youtube'
import { Content, Photo, Text } from './MassageTechniques.styles'
import hands from 'assets/hands.png'

export const MassageTechniquesComponent = () => {
  return (
    <LayoutComponent>
      <Content>
        <YouTube videoId="wunsbyF1XPA" />

        <Text>
          BeeCandle to marka, która daje Ci możliwość stworzenia w Twoim domu spa dla ciała oraz
          zmysłów. Dzięki naszej świecy do masażu oraz kilku prostym trikom, poczujesz na swojej
          skórze nowy poziom relaksu. Naszą świecę do masażu możesz stosować samodzielnie oraz w
          pojedynkę jako produkt nawilżający skórę całego ciała lub możesz zaprosić do wspólnego
          relaksu drugą osobę. Dlatego też zapraszamy do zapoznania się z technikami masażu
          relaksacyjnego różnych części ciała.
        </Text>

        <Photo src={hands} alt="Hands" />
      </Content>
    </LayoutComponent>
  )
}
