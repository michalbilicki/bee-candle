import styled from 'styled-components'
import { Palette } from 'styles/variables'

export const Content = styled.div`
  padding: 10rem 0;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Photo = styled.img``

export const Text = styled.span`
  text-align: center;
  animation: heartbeat 4s infinite;

  @keyframes heartbeat {
    0% {
      transform: scale(1);
    }
    10% {
      transform: scale(1.25);
    }
    20% {
      transform: scale(1);
    }
    100% {
      transform: scale(1);
    }
  }
`
