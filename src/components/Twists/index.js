import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

export const Twists = ({ children }) => <div className={styles.twists}>{children}</div>
export const TwistsOnHover = ({ children }) => <div className={styles.twistsOnHover}>{children}</div>
export const TwistsForeverOnHover = ({ children }) => <div className={styles.twistsForeverOnHover}>{children}</div>

const commonPropTypes = {
   children: PropTypes.element.isRequired,
}

Twists.propTypes = commonPropTypes
TwistsOnHover.propTypes = commonPropTypes
TwistsForeverOnHover.propTypes = commonPropTypes
