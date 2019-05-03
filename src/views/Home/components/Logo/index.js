import React from 'react'
import styled from 'styled-components'

import { AppContext } from '~/instances/context'

import Highlight from '~/components/Highlight'
import Socials from '~/components/Socials'

import logoSvg from './images/Logo.svg'

const LogoSection = styled.div`
   padding: 210px 0;
   text-align: center;
`

const Logo = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <LogoSection className="titles-color">
            <div className="container">
               <img src={logoSvg} alt="Marcossi" />
               <h1 className="weight-medium">{data.logo.title}</h1>
               <Highlight>
                  <h3>{data.logo.subtitle}</h3>
               </Highlight>
               <Socials />
            </div>
         </LogoSection>
      )}
   </AppContext.Consumer>
)

Logo.propTypes = {}

export default Logo
