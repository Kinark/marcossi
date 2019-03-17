import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import renderHTML from 'react-render-html';

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { withContext } from '~/instances/context';

import styles from './styles.scss';

const options = {
   renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: node => `<img className="${styles.asset}" src="${node.data.target.fields.file.url}" alt="" />`
   },
}

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
      story: null,
      loading: true,
      goBackHome: false
   }

   componentDidMount = () => {
      document.body.style.marginRight = `${window.innerWidth - document.documentElement.clientWidth}px`
      document.body.style.overflowY = 'hidden'
      document.addEventListener('keydown', this.modalKeyPressHandler, false);
      this.getStoryFromContext()
   }

   componentDidUpdate = prevProps => {
      const { context } = this.props
      // If user change website language, fetch new data
      if (!prevProps.context.storiesData.length && context.storiesData.length) this.getStoryFromContext()
   }

   componentWillUnmount = () => {
      document.body.style.marginRight = null
      document.body.style.overflowY = null
      document.removeEventListener('keydown', this.modalKeyPressHandler, false);
   };

   getStoryFromContext = async () => {
      const { context, match } = this.props
      // Turn loading on
      await this.setState({ loading: true })
      if (!context.storiesData.length) return false;
      await this.setState({ story: context.storiesData.find(story => story.sys.id === match.params.id) })
      this.setState({ loading: false })
   }

   goBackHome = () => this.setState({ goBackHome: true })

   modalKeyPressHandler = (e) => { if (e.keyCode === 27) this.goBackHome() }

   render() {
      const { loading, story, goBackHome } = this.state
      // const { context } = this.props

      if (goBackHome) return <Redirect to="/" />
      if (loading) return <div>Loading...</div>
      return (
         <div className={styles.storyModalDim}>
            <button type="button" className={styles.dismiss} onClick={this.goBackHome} />
            <div className={styles.storyModal}>
               <div className="center">
                  <img src={story.fields.logo.fields.file.url} alt={story.fields.title} width="250" />
                  <h2 className="titles-color weight-medium">{story.fields.title}</h2>
               </div>
               <div className={`long-text ${styles.post}`}>
                  {renderHTML(documentToHtmlString(story.fields.post, options))}
               </div>
            </div>
         </div>
      );
   }
}

export default withContext(Story)
