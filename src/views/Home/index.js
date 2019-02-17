import React from 'react';
import PropTypes from 'prop-types';

import Logo from './components/Logo'
import Introduction from './components/Introduction'
import Letter from './components/Letter'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

import styles from './styles.scss';

const Home = props => (
   <div>
      Home
      <Logo />
      <Introduction />
      <Letter />
      <Features />
      <Portfolio />
      <Contact />
   </div>
)

Home.propTypes = {

}

export default Home
