import React from 'react';
import renderHTML from 'react-render-html';

import { AppContext } from '~/instances/context';

import { TwistsOnHover } from '~/components/Twists';

import LetterSvg from './images/Letter.svg'
// import styles from './styles.scss';

const Letter = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <div className="container">
            <div className="row xs-middle">
               <div className="col xs12 l7 xl6">
                  <h2 className="weight-medium titles-color">{data.letter.title}</h2>
                  <div className="weight-light long-text">{renderHTML(data.letter.text)}</div>
                  <div className="right-align">{data.letter.credits}</div>
               </div>
               <div className="col xs12 l5 xl6 xs-first l-last center">
                  <TwistsOnHover><img src={LetterSvg} alt="A Letter" /></TwistsOnHover>
               </div>
            </div>
         </div>
      )}
   </AppContext.Consumer>
)

Letter.propTypes = {

}

export default Letter
