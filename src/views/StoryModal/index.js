import React from 'react'
import styled, { keyframes } from 'styled-components'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import speakingurl from 'speakingurl'

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { withContext } from '~/instances/context'

import StoryContent from './components/StoryContent'

class Story extends React.Component {
   static propTypes = {
      context: PropTypes.shape({
         storiesData: PropTypes.array,
         locale: PropTypes.string
      }).isRequired,
      match: PropTypes.shape({
         params: PropTypes.shape({
            id: PropTypes.string
         })
      }).isRequired
   }

   state = {
      storyIndex: null,
      loading: true,
      goBackHome: false
   }

   componentDidMount = () => {
      // Hides the body scrollbar gracefully
      document.body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`
      document.body.style.overflowY = 'hidden'
      // Adds a listener to keydown event to enable Esc to dismiss the modal
      document.addEventListener('keydown', this.modalKeyPressHandler, false)
      this.getStoryFromContext()
   }

   componentDidUpdate = prevProps => {
      const { context } = this.props
      // Wait for the context.storiesData to be loaded
      if (!prevProps.context.storiesData.length && context.storiesData.length) this.getStoryFromContext()
   }

   componentWillUnmount = () => {
      // Brings back the body scrollbar
      document.body.style.marginRight = null
      document.body.style.overflowY = null
      // Removes the listener from the keydown event
      document.removeEventListener('keydown', this.modalKeyPressHandler, false)
   }

   getStoryFromContext = async () => {
      const { context, match } = this.props
      // Stops if context.storiesData is empty
      if (!context.storiesData.length) return false
      // Finds the right Story ID
      this.setState(
         {
            storyIndex: context.storiesData.findIndex(story => speakingurl(story.fields.title) === match.params.name)
         },
         // Turns loading false
         () => this.setState({ loading: false })
      )
   }

   goBackHome = () => this.setState({ goBackHome: true })

   // Handles clicks on the background to dismiss the modal
   modalDismissClickHandler = e => {
      if (e.target.getAttribute('role') === 'button') return this.goBackHome()
   }

   // Handles Esc press to dismiss the modal
   modalKeyPressHandler = e => {
      if (e.keyCode === 27) this.goBackHome()
   }

   render() {
      const { loading, storyIndex, goBackHome } = this.state
      const { context } = this.props

      if (goBackHome) return <Redirect to="/" />
      if (loading) return <div>Loading...</div>

      return (
         // eslint-disable-next-line jsx-a11y/click-events-have-key-events
         <StoryModalDimWrapper role="button" tabIndex="-1" onClick={this.modalDismissClickHandler}>
            <StoryModal>
               <StoryContent data={context.storiesData[storyIndex].fields} />
            </StoryModal>
         </StoryModalDimWrapper>
      )
   }
}

export default withContext(Story)

const fadeIn = keyframes`
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
`

const StoryModalDimWrapper = styled.div`
   position: fixed;
   width: 100%;
   height: 100%;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: rgba(0, 0, 0, 0.5);
   overflow-y: auto;
   animation: ${fadeIn} 0.3s ease-out;
`

const StoryModal = styled.div`
   position: absolute;
   width: 90%;
   max-width: 960px;
   background-color: #f6f6fa;
   border-radius: 15px;
   overflow: hidden;
   left: 0;
   right: 0;
   top: 0;
   margin: 90px auto;
   padding: 45px;
   box-shadow: 0px 10px 25px 0px rgba(32, 33, 44, 0.1);
`
