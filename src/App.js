import React from 'react'
import { hot } from 'react-hot-loader'
import { Route } from 'react-router-dom'

//
// ─── CONSTANTS ──────────────────────────────────────────────────────────────────
//
import locales from '~/constants/locales'

//
// ─── SERVICES ───────────────────────────────────────────────────────────────────
//
import fetchAppLocale from '~/services/fetchAppLocale'

//
// ─── COMPONENTS ─────────────────────────────────────────────────────────────────
//
import { Metas } from '~/components/Metas'
import Favicon from '~/components/Favicon'
import ChangeLocaleBtns from '~/components/ChangeLocaleBtns'

//
// ─── VIEWS ──────────────────────────────────────────────────────────────────────
//
import Home from '~/views/Home'
import StoryModal from '~/views/StoryModal'
import Loading from '~/views/Loading'

//
// ─── INSTANCES ──────────────────────────────────────────────────────────────────
//
import { AppContext } from '~/instances/context'

import cover from './images/cover.png'

class App extends React.Component {
   state = {
      data: {},
      storiesData: [],
      title: 'Marcossi Design',
      locale: locales.EN_US,
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

   fetchAndSetAppData = async () => {
      const { locale } = this.state
      try {
         // Contact contentfulClient to get the pages entries
         const data = await fetchAppLocale(locale)
         // Set pages data and loading off
         return this.setState({ data, loading: false })
      } catch (error) {
         console.error(error)
      }
   }

   setStoriesData = storiesData => this.setState({ storiesData })

   setTitle = title => this.setState({ title })

   setLocale = locale => this.setState({ locale })

   render() {
      const { setStoriesData, setTitle, setLocale, state } = this
      const { data, storiesData, title, locale, loading } = state
      if (loading) return <Loading />
      return (
         <AppContext.Provider value={{ data, storiesData, title, locale, setStoriesData, setTitle, setLocale }}>
            <Metas title="Marcossi Design" cover={cover} description="Branding, Sites & Apps :D" />
            <Favicon />
            <ChangeLocaleBtns />
            <Route path="/" component={Home} />
            <Route exact path="/story/:name" component={StoryModal} />
            {/* <div className="screen-detector" /> */}
         </AppContext.Provider>
      )
   }
}

export default hot(module)(App)
