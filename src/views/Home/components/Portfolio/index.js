import React from 'react';
import PropTypes from 'prop-types';
import speakingurl from 'speakingurl';

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import SectionTitle from '~/components/SectionTitle'
import Storie from './components/Storie'
import Tale from './components/Tale'

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { withContext } from '~/instances/context';
import contentfulClient from '~/instances/contentfulClient';

// import styles from './styles.scss';

class Portfolio extends React.Component {
   static propTypes = {
      context: PropTypes.shape({
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
         .then(({ items: stories }) => context.setStoriesData(stories))
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
               {context.storiesData.map(storie => (storie.fields.type === 'storie'
                  ? <Storie to={`/story/${speakingurl(storie.fields.title)}/${storie.sys.id}`} key={storie.sys.id} data={storie.fields} />
                  : <Tale to={`/story/${speakingurl(storie.fields.title)}/${storie.sys.id}`} key={storie.sys.id} data={storie.fields} />
               ))
               }
            </div>
         </div>
      );
   }
}

export default withContext(Portfolio)
