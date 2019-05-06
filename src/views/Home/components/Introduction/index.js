import React from 'react'
// import renderHTML from 'react-render-html'
import styled from 'styled-components'

import { AppContext } from '~/instances/context'

import { TwistsOnHover } from '~/components/Twists'

import Igor from './images/Igor.svg'

const IntroductionSection = styled.div`
   background-color: #ebedff;
   margin: 60px 0 45px 0;
`

const IgorIllustration = styled.img`
   margin: -40px 0 -30px 0;
   @media (max-width: 991px) {
      margin-bottom: 20px;
      margin-top: 30px;
   }
`

const Introduction = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <IntroductionSection>
            <div className="container">
               <div className="row">
                  <div className="col xs12 l5 xl4 offset-xl1 center">
                     <TwistsOnHover>
                        <IgorIllustration src={Igor} alt="Igor's Face" />
                     </TwistsOnHover>
                  </div>
                  <div className="col xs12 l7 xl6">
                     <h2 className="weight-medium titles-color" dangerouslySetInnerHTML={{ __html: data.introduction.title }} />
                     <h3 className="weight-light titles-color" dangerouslySetInnerHTML={{ __html: data.introduction.subtitle }} />
                     <div className="weight-light long-text" dangerouslySetInnerHTML={{ __html: data.introduction.text }} />
                  </div>
               </div>
            </div>
         </IntroductionSection>
      )}
   </AppContext.Consumer>
)

export default Introduction
