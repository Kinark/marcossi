import React, { PureComponent } from 'react'
import styled from 'styled-components'

import locales from '~/constants/locales'
import Pill from '~/components/Pill'
import { AppContext } from '~/instances/context'

const Wrapper = styled.div`
   position: fixed;
   bottom: 0px;
   right: 0px;
   z-index: 1;
   height: 100px;
   width: 125px;
`

const ActivePill = styled(Pill)`
   position: absolute;
   text-align: center;
   width: 125px;
   bottom: 10px;
   right: 10px;
   cursor: pointer;
`

const HiddenPill = styled(ActivePill)`
   position: absolute;
   transition: bottom 300ms ease-out;
   &.active {
      bottom: 60px;
   }
`

export default class ChangeLocaleBtns extends PureComponent {
   state = {
      open: false
   }

   openOptions = () => this.setState({ open: true })

   closeOptions = () => this.setState({ open: false })

   render() {
      const { open } = this.state
      const { PT_BR, EN_US } = locales
      return (
         <Wrapper onMouseEnter={this.openOptions} onMouseLeave={this.closeOptions}>
            <AppContext.Consumer>
               {({ locale, setLocale }) => (
                  <React.Fragment>
                     <HiddenPill onClick={() => setLocale(locale === EN_US ? PT_BR : EN_US)} className={open ? 'active' : ''}>
                        {locale === EN_US ? 'Português' : 'English'}
                     </HiddenPill>
                     <ActivePill>{locale === EN_US ? 'English' : 'Português'}</ActivePill>
                  </React.Fragment>
               )}
            </AppContext.Consumer>
         </Wrapper>
      )
   }
}
