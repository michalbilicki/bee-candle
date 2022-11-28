import { Buttons, Content, Header, Honeycomb, Logo } from './Header.styles'
import logo from 'assets/logo.png'
import { Link } from 'components/Button'
import { Pathnames } from 'routes/pathnames'
import { useEffect, useRef, useState } from 'react'

export const HeaderComponent = () => {
  const [isOnTop, setIsOnTop] = useState(true)

  const handleScroll = () => {
    if (document.documentElement.scrollTop <= 50) {
      setIsOnTop(true)
    } else {
      setIsOnTop(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Header isOnTop={isOnTop}>
      <Honeycomb />
      <Content isOnTop={isOnTop}>
        <Logo isOnTop={isOnTop} src={logo} alt="Bee with the project name" />

        <Buttons>
          <Link to={Pathnames.ABOUT_US}>O nas</Link>
          <Link to={Pathnames.MASSAGE_TECHNIQUES}>Techniki Masażu</Link>
          <Link to={Pathnames.SHOP}>Shop</Link>
        </Buttons>
      </Content>
    </Header>
  )
}
