import React from 'react'

import { AppContext } from '~/instances/context'

import SectionTitle from '~/components/SectionTitle'
import Input from '~/components/Input'
import Textarea from '~/components/Textarea'
import Pill from '~/components/Pill'

import letter from './images/Letter.svg'

export default class Contact extends React.PureComponent {
   render() {
      return (
         <AppContext.Consumer>
            {({ data }) => (
               <div className="row">
                  <div className="col xs12 xl8 offset-xl2">
                     <div className="section padded container">
                        <div className="center">
                           <img src={letter} height="117" alt="Contact" />
                        </div>
                        <SectionTitle title={data.contact.title} subtitle={data.contact.subtitle} />
                        <form name="contact" method="post">
                           <div className="row">
                              <div className="col xs12 m4">
                                 <Input type="text" name="name">
                                    {data.contact.inputs.name}
                                 </Input>
                              </div>
                              <div className="col xs12 m4">
                                 <Input type="email" name="email">
                                    {data.contact.inputs.email}
                                 </Input>
                              </div>
                              <div className="col xs12 m4">
                                 <Input type="text" name="phone">
                                    {data.contact.inputs.phone}
                                 </Input>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col xs12">
                                 <Textarea type="text" name="message">
                                    {data.contact.inputs.message}
                                 </Textarea>
                              </div>
                           </div>
                           <div className="right-align">
                              <Pill type="submit">{data.contact.inputs.send}</Pill>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            )}
         </AppContext.Consumer>
      )
   }
}
