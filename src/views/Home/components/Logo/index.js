import React from 'react';

import { AppContext } from '~/instances/context';

import Highlight from '~/components/Highlight'

import logoSvg from './images/Logo.svg'
import styles from './styles.scss';

const Logo = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <div className={`${styles.logoSection} titles-color`}>
            <div className="container">
               <img src={logoSvg} alt="Marcossi" />
               <h1 className="weight-medium">{data.logo.title}</h1>
               <Highlight><h3>{data.logo.subtitle}</h3></Highlight>
            </div>
         </div>
      )}
   </AppContext.Consumer>
)

Logo.propTypes = {

}

export default Logo
