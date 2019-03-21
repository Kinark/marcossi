import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import renderHTML from 'react-render-html'
import Carousel from 'nuka-carousel'

const Post = styled.div`
   margin-top: 40px;
   img {
      width: 100%;
      border-radius: 10px;
      margin: 15px 0;
   }
`

const storyRenderOptions = {
   renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => `<img src="${node.data.target.fields.file.url}" alt="" />`
   }
}

const StoryContent = ({ data }) => (
   <React.Fragment>
      <div className="center">
         <img src={data.logo.fields.file.url} alt={data.title} width="250" />
         <h2 className="titles-color weight-medium">{data.title}</h2>
      </div>
      <Post className="long-text">
         {data.type === 'story' ? renderHTML(documentToHtmlString(data.post, storyRenderOptions)) : renderHTML(documentToHtmlString(data.excerpt))}
      </Post>
      {data.type === 'tale' && (
         <Carousel>
            {data.gallery.map(picture => (
               <img onLoad={() => window.dispatchEvent(new Event('resize'))} key={picture.sys.id} src={picture.fields.file.url} alt="" />
            ))}
         </Carousel>
      )}
   </React.Fragment>
)

StoryContent.propTypes = {
   data: PropTypes.shape({}).isRequired
}

export default StoryContent
