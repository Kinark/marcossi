import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { textLabel, textInput } from '~/components/formCommon'

const StyledLabel = styled.label`
   ${textLabel}
`

const StyledTextarea = styled.textarea`
   ${textInput}
   resize: vertical;
`

export default class Input extends PureComponent {
   static propTypes = {
      children: PropTypes.string.isRequired
   }

   render() {
      const { children, ...rest } = this.props
      return (
         <StyledLabel>
            {children} <StyledTextarea {...rest} />
         </StyledLabel>
      )
   }
}
