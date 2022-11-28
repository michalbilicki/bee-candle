import styled from 'styled-components'
import { Palette } from 'styles/variables'

export const Footer = styled.div`
  height: 4rem;
  position: sticky;
  bottom: 0;
  overflow: hidden;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    56deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 208, 101, 1) 16%,
    rgba(252, 219, 136, 1) 33%,
    rgba(255, 255, 255, 0) 100%
  );
  backdrop-filter: blur(10px);
`

export const Content = styled.div`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  height: 100%;
  gap: 0.5rem;

  span {
    margin-left: 1rem;
    font-size: 1rem;
    font-family: 'Roboto', sans-serif;
    color: ${Palette.GOLD_500};
  }
`
