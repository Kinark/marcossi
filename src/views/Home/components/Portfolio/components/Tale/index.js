import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';


import styles from './styles.scss';

const Tale = ({ data, to }) => (
   <div className="col xs12 l12 xl4">
      <Link to={to}>
         <div className={styles.tale}>
            <div className={styles.cover}>
               <img src={data.cover.fields.file.url} alt={data.cover.fields.title} />
            </div>
            <div className={styles.content}>
               <h2 className="titles-color weight-medium">{data.title}</h2>
               <div className="long-text">{renderHTML(documentToHtmlString(data.excerpt))}</div>
            </div>
         </div>
      </Link>
   </div>
)

Tale.propTypes = {
   data: PropTypes.shape({}).isRequired,
   to: PropTypes.string.isRequired,
}

export default Tale
