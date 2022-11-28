import styled from 'styled-components'
import { Link as LinkBase } from 'react-router-dom'
import { Palette } from 'styles/variables'

export const Link = styled(LinkBase)`
  font-size: 1.25rem;
  text-decoration: none;
  color: ${Palette.GOLD_400};
  transition: ease-in-out 0.5s;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: ${Palette.BLACK};
  }
`
