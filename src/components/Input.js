import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { textLabel, textInput } from '~/components/formCommon'

const StyledLabel = styled.label`
   ${textLabel}
`

const StyledInput = styled.input`
   ${textInput}
`

export default class Input extends PureComponent {
   static propTypes = {
      children: PropTypes.string.isRequired
   }

   render() {
      const { children, ...rest } = this.props
      return (
         <StyledLabel>
            {children} <StyledInput {...rest} />
         </StyledLabel>
      )
   }
}
