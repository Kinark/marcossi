import React from 'react';
import PropTypes from 'prop-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';


import styles from './styles.scss';

const Storie = ({ data }) => (
   <div className={styles.storie}>
      <div className={styles.cover}>
         <img src={data.cover.fields.file.url} alt={data.cover.fields.title} />
      </div>
      <div className={styles.content}>
         <h2 className="titles-color weight-medium">{data.title}</h2>
         <div className="long-text">{renderHTML(documentToHtmlString(data.excerpt))}</div>
      </div>
   </div>
)

Storie.propTypes = {
   data: PropTypes.shape({}).isRequired,
}


export default Storie
