import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';
import Carousel from 'nuka-carousel';

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { withContext } from '~/instances/context';

import styles from './styles.scss';

class Story extends React.Component {
   static propTypes = {
      context: PropTypes.shape({
         storiesData: PropTypes.array,
         locale: PropTypes.string,
      }).isRequired,
      match: PropTypes.shape({
         params: PropTypes.shape({
            id: PropTypes.string,
         }),
      }).isRequired,
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
      document.addEventListener('keydown', this.modalKeyPressHandler, false);
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
      document.removeEventListener('keydown', this.modalKeyPressHandler, false);
   };

   getStoryFromContext = async () => {
      const { context, match } = this.props
      // Stops if context.storiesData is empty
      if (!context.storiesData.length) return false;
      // Finds the right Story ID
      await this.setState({ storyIndex: context.storiesData.findIndex(story => story.sys.id === match.params.id) })
      // Turns loading false
      this.setState({ loading: false })
   }

   goBackHome = () => this.setState({ goBackHome: true })

   // Handles clicks on the background to dismiss the modal
   modalDismissClickHandler = (e) => { if (e.target.getAttribute('role') === 'button') return this.goBackHome() }

   // Handles Esc press to dismiss the modal
   modalKeyPressHandler = (e) => { if (e.keyCode === 27) this.goBackHome() }

   render() {
      const { loading, storyIndex, goBackHome } = this.state
      const { context } = this.props

      if (goBackHome) return <Redirect to="/" />
      if (loading) return <div>Loading...</div>
      return (
         // eslint-disable-next-line jsx-a11y/click-events-have-key-events
         <div role="button" tabIndex="-1" className={styles.storyModalDim} onClick={this.modalDismissClickHandler}>
            <div className={styles.storyModal}>
               {context.storiesData[storyIndex].fields.type === 'story'
                  ? <StoryContent data={context.storiesData[storyIndex].fields} />
                  : <TaleContent data={context.storiesData[storyIndex].fields} />
               }
            </div>
         </div>
      );
   }
}

export default withContext(Story)

const storyRenderOptions = {
   renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => `<img className="${styles.asset}" src="${node.data.target.fields.file.url}" alt="" />`
   },
}

const StoryContent = ({ data }) => (
   <React.Fragment>
      <div className="center">
         <img src={data.logo.fields.file.url} alt={data.title} width="250" />
         <h2 className="titles-color weight-medium">{data.title}</h2>
      </div>
      <div className={`long-text ${styles.post}`}>
         {renderHTML(documentToHtmlString(data.post, storyRenderOptions))}
      </div>
   </React.Fragment>
)

StoryContent.propTypes = {
   data: PropTypes.shape({}).isRequired,
}

const TaleContent = ({ data }) => (
   <React.Fragment>
      <div className="center">
         <img src={data.logo.fields.file.url} alt={data.title} width="250" />
         <h2 className="titles-color weight-medium">{data.title}</h2>
      </div>
      <div className={`long-text ${styles.post}`}>
         {renderHTML(documentToHtmlString(data.excerpt))}
      </div>
      <Carousel>
         {data.gallery.map(picture => <img onLoad={() => { window.dispatchEvent(new Event('resize')); }} key={picture.sys.id} src={picture.fields.file.url} alt="" />)}
      </Carousel>
   </React.Fragment>
)

TaleContent.propTypes = {
   data: PropTypes.shape({}).isRequired,
}
