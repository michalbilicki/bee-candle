import { FooterComponent } from 'components/Footer'
import { HeaderComponent } from 'components/Header'
import PropTypes from 'prop-types'
import { Content, Layout } from './Layout.styles'

export const LayoutComponent = ({ children }) => {
  return (
    <Layout>
      <HeaderComponent />
      <Content>{children}</Content>
      <FooterComponent />
    </Layout>
  )
}

LayoutComponent.propTypes = {
  children: PropTypes.node
}
