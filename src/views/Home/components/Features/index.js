import React from 'react';
import PropTypes from 'prop-types';

import { AppContext } from '~/instances/context';

import SectionTitle from '~/components/SectionTitle'
import Highlight from '~/components/Highlight'
import { TwistsOnHover } from '~/components/Twists';

import World from './images/World.svg'
import Artboard from './images/Artboard.svg'
import Toolbox from './images/Toolbox.svg'

import styles from './styles.scss';

const Features = () => (
   <AppContext.Consumer>
      {({ data }) => (
         <div className="container center">
            <SectionTitle title={data.features.title} subtitle={data.features.subtitle} />
            <div className="row">
               <div className="col xs12 xl10 offset-xl1">
                  <div className="row xs-row">
                     <Feature img={World} title={data.features.site.title} description={data.features.site.subtitle} />
                     <Feature img={Artboard} title={data.features.branding.title} description={data.features.branding.subtitle} />
                     <Feature img={Toolbox} title={data.features.apps.title} description={data.features.apps.subtitle} />
                  </div>
               </div>
            </div>
         </div>
      )}
   </AppContext.Consumer>
)

export default Features

const Feature = ({ img, title, description }) => (
   <div className="col xs12 m4">
      <div className={styles.featureImgContainer}><img className="block" src={img} alt={title} /></div>
      <Highlight><h3 className="weight-medium">{title}</h3></Highlight>
      <p>{description}</p>
   </div>
)

Feature.propTypes = {
   img: PropTypes.string.isRequired,
   title: PropTypes.string.isRequired,
   description: PropTypes.string.isRequired
}
