import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Highlight = ({ children }) => <div className={styles.highlighted}>{children}</div>

Highlight.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
   ]).isRequired,
}

export default Highlight
