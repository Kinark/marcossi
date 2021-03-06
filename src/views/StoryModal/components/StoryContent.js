import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { BLOCKS } from '@contentful/rich-text-types'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import renderHTML from 'react-render-html'
// import Carousel from 'nuka-carousel'

const Post = styled.div`
   margin-top: 40px;
   text-align: justify;
   img {
      width: 100%;
      border-radius: 10px;
      margin: 15px 0;
   }
`

const RoundedImg = styled.img`
   border-radius: 10px;
   width: 100%;
`

const storyRenderOptions = {
   renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => `<img src="${node.data.target.fields.file.url}" alt="" />`
   }
}

const StoryContent = ({ data }) => (
   <React.Fragment>
      <div className="center">
         {!!data.logo && <img src={data.logo.fields.file.url} alt={data.title} width="250" />}
         <h2 className="titles-color weight-medium">{data.title}</h2>
      </div>
      <Post
         className="long-text"
         dangerouslySetInnerHTML={{ __html: documentToHtmlString(data.type === 'story' ? data.post : data.excerpt, storyRenderOptions) }}
      />
      {data.type === 'tale' &&
         data.gallery.map(picture => (
            <RoundedImg onLoad={() => window.dispatchEvent(new Event('resize'))} key={picture.sys.id} src={picture.fields.file.url} alt="" />
         ))
      // <Carousel>
      //    {data.gallery.map(picture => (
      //       <RoundedImg onLoad={() => window.dispatchEvent(new Event('resize'))} key={picture.sys.id} src={picture.fields.file.url} alt="" />
      //    ))}
      // </Carousel>
      }
   </React.Fragment>
)

StoryContent.propTypes = {
   data: PropTypes.shape({}).isRequired
}

export default StoryContent
