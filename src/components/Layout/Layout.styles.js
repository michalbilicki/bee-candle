import styled from 'styled-components'

export const Layout = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    56deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(251, 208, 101, 0.02) 20%,
    rgba(251, 208, 101, 0.02) 80%,
    rgba(255, 255, 255, 1) 100%
  );
`

export const Content = styled.div`
  min-height: calc(100vh - 20rem);
  margin-left: auto;
  margin-right: auto;
  max-width: 75rem;
  padding: 4rem;
`
