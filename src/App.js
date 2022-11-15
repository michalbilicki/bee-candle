import { AppWrapper, Logo } from './App.styles.js'
import beeCandleLogo from 'assets/bee-candle-logo.png'

const App = () => (
  <AppWrapper>
    <Logo src={beeCandleLogo} alt="Bee with the project name" />
  </AppWrapper>
)

export default App
