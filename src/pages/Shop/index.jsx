import { Content, Photo, Text } from './Shop.styles.js'
import { LayoutComponent } from 'components/Layout/index.jsx'
import shoppingCart from 'assets/shopping-cart.png'

export const ShopComponent = () => {
  return (
    <LayoutComponent>
      <Content>
        <Photo src={shoppingCart} alt="Shopping cart" />
        <Text>Coming soon...</Text>
      </Content>
    </LayoutComponent>
  )
}
