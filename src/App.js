import React from 'react';
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import { Metas } from '~/components/Metas';
import Favicon from '~/components/Favicon';

//
// ─── VIEWS ──────────────────────────────────────────────────────────────────────
//
import Home from '~/views/Home';
import Story from '~/views/Story';

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { AppContext } from '~/instances/context';
import contentfulClient from '~/instances/contentfulClient';

const description = 'A sample website.';
// const cover = "";

class App extends React.Component {
   state = {
      data: {},
      title: 'Marcossi Design',
      locale: 'en-US',
      loading: true
   }

   componentDidMount = () => {
      this.fetchAndSetAppData()
   }

   componentDidUpdate = (prevProps, prevState) => {
      const { locale } = this.state
      // If user change website language, fetch new data
      if (prevState.locale !== locale) this.fetchAndSetAppData()
   }

   fetchAndSetAppData = () => {
      const { locale } = this.state
      // Turn loading on
      this.setState({ loading: true })
      // Contact contentfulClient to get the pages entries
      contentfulClient.getEntries({ content_type: 'page', locale })
         // If found, proceed
         .then(({ items }) => {
            // Create an empty object
            const data = {}
            // Extracts each page for it's own object
            items.forEach(entry => { data[entry.fields.pageName] = entry.fields.data });
            // Set pages data and loading off
            return this.setState({ data, loading: false });
         })
         // Catch any error
         .catch(console.error)
   }

   setTitle = title => this.setState({ title })

   setLocale = locale => this.setState({ locale })

   render() {
      const { setTitle, setLocale, state } = this;
      const { data, title, locale, loading } = state
      if (loading) return <div>Loading...</div>
      return (
         <AppContext.Provider value={{ data, title, locale, setTitle, setLocale }}>
            {/* <Metas title={title} description={description} /> */}
            {/* <Favicon /> */}
            <div style={{ position: 'fixed', top: 0 }}>
               <button type="button" onClick={() => setLocale('pt-BR')}>Change pt-BR</button>
               <button type="button" onClick={() => setLocale('en-US')}>Change en-US</button>
            </div>
            <Switch>
               <Route exact path="/" component={Home} />
               <Route exact path="/story" component={Story} />
            </Switch>
            <div className="screen-detector" />
         </AppContext.Provider>
      )
   }
}

export default hot(module)(App)
