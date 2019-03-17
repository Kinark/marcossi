import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';

import { Card, CardContent } from '~/components/Card'

import styles from './styles.scss';

const Story = ({ data, to }) => (
   <div className={`col xs12 l12 ${data.type === 'tale' ? 'xl4' : 'xl8'}`}>
      <Link to={to}>
         <Card className={`${styles.story} ${data.type === 'tale' ? styles.tale : ''}`}>
            <div className={styles.cover}>
               <img src={data.cover.fields.file.url} alt={data.cover.fields.title} />
            </div>
            <CardContent className={styles.content}>
               <h2 className="titles-color weight-medium">{data.title}</h2>
               <div className="long-text">{renderHTML(documentToHtmlString(data.excerpt))}</div>
            </CardContent>
         </Card>
      </Link>
   </div>
)

Story.propTypes = {
   data: PropTypes.shape({}).isRequired,
   to: PropTypes.string.isRequired,
}


export default Story
