import contentfulClient from '~/instances/contentfulClient'

export default locale =>
   contentfulClient
      .getEntries({ content_type: 'page', locale })
      // If found, proceed
      .then(({ items }) => {
         // Create an empty object
         const data = {}
         // Extracts each page for it's own object
         items.forEach(entry => {
            data[entry.fields.pageName] = entry.fields.data
         })
         // Set pages data and loading off
         return data
      })
      // Catch any error
      .catch(err => new Error(err))
