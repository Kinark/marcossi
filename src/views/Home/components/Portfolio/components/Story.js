import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
// import renderHTML from 'react-render-html'
import speakingurl from 'speakingurl'

import { Card, CardContent } from '~/components/Card'

const Story = ({ data }) => (
   <div className={`col xs12 ${data.type === 'tale' ? 'l4' : 'l8'}`}>
      <Link to={`/story/${speakingurl(data.title)}`}>
         <StoryCard tale={data.type === 'tale'}>
            <Cover>
               <img src={data.cover.fields.file.url} alt={data.cover.fields.title} />
            </Cover>
            <StoryCardContent>
               <h2 className="titles-color weight-medium no-mrg-top">{data.title}</h2>
               <div className="long-text" dangerouslySetInnerHTML={{ __html: documentToHtmlString(data.excerpt) }} />
            </StoryCardContent>
         </StoryCard>
      </Link>
   </div>
)

Story.propTypes = {
   data: PropTypes.shape({}).isRequired
}

const StoryCard = styled(Card)`
   display: flex;
   flex-direction: ${props => (props.tale ? 'column' : 'row')};
   height: 550px;
   margin: 15px 0;
   position: relative;
   top: 0;
   transition: top 250ms ease-out;
   :hover {
      top: -5px;
   }
   @media (max-width: 767px) {
      flex-direction: column;
   }
   ${props =>
      props.tale &&
      css`
         ${Cover} {
            img {
               width: 100%;
               bottom: 0;
               left: 0;
               margin: auto;
            }
         }
      `}
`

const Cover = styled.div`
   position: relative;
   flex-basis: 45%;
   overflow: hidden;
   img {
      position: absolute;
      object-fit: cover;
      height: 100%;
      top: 0;
      right: 0;
   }
   @media (max-width: 767px) {
      img {
         width: 100%;
         bottom: 0;
         left: 0;
         margin: auto;
      }
   }
`

const StoryCardContent = styled(CardContent)`
   flex-basis: 55%;
`

export default Story
