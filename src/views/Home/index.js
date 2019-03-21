import React from 'react';
import PropTypes from 'prop-types';

import Logo from './components/Logo'
import Introduction from './components/Introduction'
import Letter from './components/Letter'
import Features from './components/Features'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const Home = () => (
   <React.Fragment>
      <Logo />
      <Introduction />
      <Letter />
      <Features />
      <Portfolio />
      <Contact />
   </React.Fragment>
)

Home.propTypes = {

}

export default Home
