import React from 'react';

import Highlight from '~/components/Highlight'

import logoSvg from './images/Logo.svg'
import styles from './styles.scss';

const Logo = props => (
   <div className={styles.logoSection}>
      <img src={logoSvg} alt="Marcossi" />
      <h1 className="weight-medium">Marcossi</h1>
      <Highlight><h3>Design as a story</h3></Highlight>
   </div>
)

Logo.propTypes = {

}

export default Logo
