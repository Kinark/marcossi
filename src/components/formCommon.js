export const textLabel = props => `
   color: inherit;
`

export const textInput = props => `
   display: block;
   border-radius: 22px;
   border: solid 2px;
   border-color: #E1E2EA;
   background: transparent;
   padding: 10px 20px;
   outline: none;
   color: inherit;
   width: 100%;
   transition: border-color 300ms ease-out;
   &:hover {
      border-color: #D5D7DF;
   }
   &:active, &:focus {
      border-color: #CBCCD4;
   }
`
