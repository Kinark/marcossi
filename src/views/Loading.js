import React, { PureComponent } from 'react'
import CSSTransitionGroup from 'react-transition-group'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const appearDuration = 500
const transitionName = 'fadeIn'

const LoadingWrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   &.${transitionName}-appear {
      opacity: 0.01;
   }
   &.${transitionName}-appear-active {
      opacity: 1;
      transition: opacity ${appearDuration}ms ease-out;
   }
`

export default class Loading extends PureComponent {
   render() {
      return (
         <CSSTransitionGroup transitionName={transitionName} transitionAppear transitionAppearTimeout={appearDuration}>
            <LoadingWrapper>
               <Loader type="MutatingDot" color="#000" height="80" width="80" />
            </LoadingWrapper>
         </CSSTransitionGroup>
      )
   }
}
