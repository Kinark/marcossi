import React from 'react';
import PropTypes from 'prop-types';

import Highlight from '~/components/Highlight'

// import styles from './styles.scss';

const SectionTitle = ({ title, subtitle }) => (
   <div className="section padded titles-color center">
      <h2 className="weight-medium">{title}</h2>
      <Highlight><h3>{subtitle}</h3></Highlight>
   </div>
)

SectionTitle.propTypes = {
   title: PropTypes.string.isRequired,
   subtitle: PropTypes.string.isRequired
}

export default SectionTitle
