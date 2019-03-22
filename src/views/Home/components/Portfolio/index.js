import React from 'react';
import PropTypes from 'prop-types';

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import SectionTitle from '~/components/SectionTitle'
import Story from './components/Story'

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { withContext } from '~/instances/context';
import contentfulClient from '~/instances/contentfulClient';

// import styles from './styles.scss';

class Portfolio extends React.Component {
   static propTypes = {
      context: PropTypes.shape({
         storiesData: PropTypes.array,
         setStoriesData: PropTypes.func,
         locale: PropTypes.string,
      }).isRequired,
   }

   componentDidMount = () => {
      this.fetchAndSetStories()
   }

   componentDidUpdate = prevProps => {
      const { context } = this.props
      // If user change website language, fetch new data
      if (prevProps.context.locale !== context.locale) this.fetchAndSetStories()
   }

   fetchAndSetStories = () => {
      const { context } = this.props
      // Contact contentfulClient to get the pages entries
      contentfulClient.getEntries({ content_type: 'storie', locale: context.locale })
         // If found, proceed
         .then(({ items: stories }) => context.setStoriesData(stories.sort((a, b) => a.fields.order - b.fields.order)))
         // Catch any error
         .catch(console.error)
   }

   render() {
      const { context } = this.props
      if (!context.storiesData.length) return <div>Loading...</div>
      return (
         <div className="container">
            <div className="center">
               <SectionTitle title={context.data.portfolio.title} subtitle={context.data.portfolio.subtitle} />
            </div>
            <div className="row">
               {context.storiesData.map(story => <Story key={story.sys.id} data={story.fields} />)}
            </div>
         </div>
      );
   }
}

export default withContext(Portfolio)
