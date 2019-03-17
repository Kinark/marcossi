import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Twists = ({ children, className }) => <div className={`${styles.twists} ${className}`}>{children}</div>
export const TwistsOnHover = ({ children, className }) => <div className={`${styles.twistsOnHover} ${className}`}>{children}</div>
export const TwistsForeverOnHover = ({ children, className }) => <div className={`${styles.twistsForeverOnHover} ${className}`}>{children}</div>

const commonPropTypes = {
   children: PropTypes.element.isRequired,
   className: PropTypes.string
}

const commonDefaultProps = {
   className: ''
}

Twists.propTypes = commonPropTypes
TwistsOnHover.propTypes = commonPropTypes
TwistsForeverOnHover.propTypes = commonPropTypes

Twists.defaultProps = commonDefaultProps
TwistsOnHover.defaultProps = commonDefaultProps
TwistsForeverOnHover.defaultProps = commonDefaultProps
