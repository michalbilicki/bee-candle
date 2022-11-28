import { SocialIcon } from 'react-social-icons'
import { Content, Footer } from './Footer.styles'

export const FooterComponent = () => {
  return (
    <Footer>
      <Content>
        <SocialIcon url="https://www.tiktok.com/@beecandle.balm" />
        <SocialIcon url="https://www.instagram.com/beecandle.balm/" />

        <span>
          Projekt zrealizowany w ramach przedmiotu Projektowanie Produktu Kosmetycznego -
          Politechnika Łódzka
        </span>
      </Content>
    </Footer>
  )
}
