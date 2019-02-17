import React from 'react';
import { hot } from 'react-hot-loader'
import { Route, Switch } from 'react-router-dom'

import { Metas } from '~/components/Metas';
import Favicon from '~/components/Favicon';

import Home from '~/views/Home';
import Story from '~/views/Story';

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
      if (prevState.locale !== locale) this.fetchAndSetAppData()
   }

   fetchAndSetAppData = () => {
      const { locale } = this.state
      this.setState({ loading: true })
      contentfulClient.getEntries({ content_type: 'page', locale })
         .then(({ items }) => {
            const data = {}
            items.forEach(entry => { data[entry.fields.pageName] = entry.fields.data });
            return this.setState({ data, loading: false });
         })
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
            <Metas title={title} description={description} />
            <Favicon />
            Hey
               <button type="button" onClick={() => setLocale('pt-BR')}>Change pt-BR</button>
            <button type="button" onClick={() => setLocale('en-US')}>Change en-US</button>
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
