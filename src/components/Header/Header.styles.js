import styled from 'styled-components'
import { Palette } from 'styles/variables'
import { ReactComponent as HoneycombBase } from 'assets/honeycomb.svg'

export const Header = styled.div`
  height: ${({ isOnTop }) => (isOnTop ? '8rem' : '4rem')};
  margin-bottom: ${({ isOnTop }) => (isOnTop ? '0' : '4rem')};
  transition: ease-in-out 0.5s;
  position: sticky;
  top: 0;
  background: rgb(251, 208, 101);
  background: linear-gradient(
    56deg,
    rgba(251, 208, 101, 1) 0%,
    rgba(255, 255, 255, 1) 90%,
    rgba(255, 255, 255, 1) 100%
  );
  overflow: hidden;
  box-shadow: 0px -5px 20px 0px ${Palette.GOLD_500};
`

export const Honeycomb = styled(HoneycombBase)`
  position: absolute;
  width: 30rem;
  height: 30rem;
  opacity: 0.2;
  left: -11rem;
  top: -7.5rem;
  transform: rotate(12deg);
  stroke: ${Palette.GOLD_500};

  @media only screen and (max-width: 1840px) {
    left: -15rem;
  }

  @media only screen and (max-width: 1710px) {
    left: -19rem;
  }

  @media only screen and (max-width: 1600px) {
    left: -21rem;
  }

  @media only screen and (max-width: 1500px) {
    display: none;
  }
`

export const Content = styled.div`
  height: ${({ isOnTop }) => (isOnTop ? '8rem' : '4rem')};
  transition: ease-in-out 0.5s;
  box-sizing: border-box;
  padding: 1rem 0;
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 1500px) {
    padding: 1rem 3rem;
  }
`

export const Logo = styled.img`
  transition: ease-in-out 0.5s;
  height: ${({ isOnTop }) => (isOnTop ? '8rem' : '4rem')};
`

export const Buttons = styled.div`
  display: flex;
  gap: 2rem;
`
