import styled, { keyframes } from 'styled-components'

const twists = keyframes`
   0% {
      transform: rotate3d(1, 1, 1, 2.5deg);
   }
   100% {
      transform: rotate3d(1, 1, 1, -2.5deg);
   }
`

const Twists = styled.div`
   animation: ${twists} 2s linear infinite alternate;
`

const TwistsOnHover = styled.div`
   transform: rotate3d(1, 1, 1, 0deg);
   transition: transform 0.5s ease;
   :hover {
      transform: rotate3d(1, 1, 1, 2.5deg);
   }
`

const TwistsForeverOnHover = styled.div`
   transform: rotate3d(1, 1, 1, 0deg);
   transition: transform 1.5s linear;
   :hover {
      animation: ${twists} 2s ease-out infinite alternate;
   }
`

export { Twists, TwistsOnHover, TwistsForeverOnHover }
