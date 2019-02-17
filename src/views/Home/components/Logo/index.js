import React from 'react';

import logoSvg from './images/Logo.svg'

import styles from './styles.scss';

const Logo = props => (
   <div className="center">
      <img src={logoSvg} alt="Marcossi" />
      <h1>Marcossi</h1>
      <h3 className="highlighted">Design as a story</h3>
   </div>
)

Logo.propTypes = {

}

export default Logo
