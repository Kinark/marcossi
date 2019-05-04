import React, { PureComponent } from 'react'
import Loader from 'react-loader-spinner'
import styled from 'styled-components'

const LoadingWrapper = styled.div`
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
`

export default class Loading extends PureComponent {
   render() {
      return (
         <LoadingWrapper>
            <Loader type="MutatingDot" color="#000" height="80" width="80" />
         </LoadingWrapper>
      )
   }
}
