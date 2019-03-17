import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';


import styles from './styles.scss';

const Story = ({ data, to }) => (
   <div className="col xs12 l12 xl8">
      <Link to={to}>
         <div className={styles.story}>
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

Story.propTypes = {
   data: PropTypes.shape({}).isRequired,
   to: PropTypes.string.isRequired,
}


export default Story
