import React from 'react';
import renderHTML from 'react-render-html';

import { AppContext } from '~/instances/context';

import { Twists } from '~/components/Twists';

import Igor from './images/Igor.svg'
import styles from './styles.scss';

const Introduction = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <div className={styles.introductionSection}>
            <div className="container">
               <div className="row">
                  <div className="col xs12 l5 xl4 offset-xl1 center">
                     <Twists><img className={styles.igorIllustration} src={Igor} alt="Igor's Face" /></Twists>
                  </div>
                  <div className="col xs12 l7 xl6">
                     <h2 className="weight-medium titles-color">{renderHTML(data.introduction.title)}</h2>
                     <h3 className="weight-light titles-color">{renderHTML(data.introduction.subtitle)}</h3>
                     <div className="weight-light long-text">{renderHTML(data.introduction.text)}</div>
                  </div>
               </div>
            </div>
         </div>
      )}
   </AppContext.Consumer>
)

export default Introduction
