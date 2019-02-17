import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Highlight = ({ children }) => <div className="center titles-color"><div className={styles.highlighted}>{children}</div></div>

Highlight.propTypes = {
   children: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node,
   ]).isRequired,
}

export default Highlight
