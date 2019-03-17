import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Card = ({ children, className, style }) => <div className={`${styles.card} ${className}`} style={style}>{children}</div>

Card.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   style: PropTypes.shape({}),
}

Card.defaultProps = {
   className: '',
   style: {},
}

export const CardContent = ({ children, className, style }) => (
   <div className={`${styles.cardContentWrapper} ${className}`} style={style}>{children}</div>
)

CardContent.propTypes = {
   children: PropTypes.node.isRequired,
   className: PropTypes.string,
   style: PropTypes.shape({}),
}

CardContent.defaultProps = {
   className: '',
   style: {},
}
