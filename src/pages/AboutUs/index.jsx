import { Photo, Content } from './AboutUs.styles.js'
import logoWithBg from 'assets/logo-with-bg.png'
import aboutUs from 'assets/about-us.png'
import whatWeOffer from 'assets/what-we-offer.png'
import { LayoutComponent } from 'components/Layout/index.jsx'

export const AboutUsComponent = () => {
  return (
    <LayoutComponent>
      <Content>
        <Photo src={whatWeOffer} alt="Bee with the project name" />
        <hr />
        <Photo src={aboutUs} alt="Bee with the project name" />
        <hr />
        <Photo src={logoWithBg} alt="Bee with the project name" />
      </Content>
    </LayoutComponent>
  )
}
