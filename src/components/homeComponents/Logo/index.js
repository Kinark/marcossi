import React from 'react'
import styled from 'styled-components'

// import { AppContext } from '~/instances/context'

import Highlight from '~/components/Highlight'
import Socials from '~/components/Socials'

import logoSvg from './images/Logo.svg'

const LogoSection = styled.div`
   padding: 210px 0;
   text-align: center;
`

const Logo = () => (
   <LogoSection className="titles-color">
      <div className="container">
         <img src={logoSvg} alt="Marcossi" />
         <h1 className="weight-medium">Marcossi</h1>
         <Highlight>
            <h3>Design como uma história</h3>
         </Highlight>
         <Socials />
      </div>
   </LogoSection>
)

Logo.propTypes = {}

export default Logo
