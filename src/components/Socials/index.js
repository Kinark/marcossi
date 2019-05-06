import React, { PureComponent } from 'react'
import styled from 'styled-components'

// import { AppContext } from '~/instances/context'

import facebook from './images/facebook.svg'
import github from './images/github.svg'
import instagram from './images/instagram.svg'

const SocialIcon = styled.img`
   display: inline-block;
   margin-right: 10px;
   opacity: 0.75;
   transition: opacity 300ms ease-out;
   &:hover {
      opacity: 0.5;
   }
`

export default class Socials extends PureComponent {
   render() {
      return (
         <div className="section padded">
            <a href="aaa" target="_blank" rel="noopener noreferrer">
               <SocialIcon src={facebook} alt="Facebook" />
            </a>
            <a href="aaa" target="_blank" rel="noopener noreferrer">
               <SocialIcon src={github} alt="Github" />
            </a>
            <a href="aaa" target="_blank" rel="noopener noreferrer">
               <SocialIcon src={instagram} alt="Instagram" />
            </a>
         </div>
      )
   }
}
