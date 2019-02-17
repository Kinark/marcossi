import React from 'react';

export const AppContext = React.createContext({
   data: {},
   title: 'Marcossi Design',
   locale: 'en-US',
   setTitle: () => { },
   setLocale: () => { },
});

export const withContext = Component => props => (
   <AppContext.Consumer>
      {context => <Component {...props} context={context} />}
   </AppContext.Consumer>
)
