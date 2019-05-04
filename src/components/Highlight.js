import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Highlighted = styled.div`
   display: inline-block;
   position: relative;
   ::before {
      content: '';
      position: absolute;
      width: calc(100% + 40px);
      height: calc(100% + 10px);
      top: 1px;
      left: -20px;
      right: 0;
      margin: auto;
      background-color: #fcf4b4;
      pointer-events: none;
      z-index: -1;
   }
`

const Highlight = ({ children }) => <div className="center titles-color"><Highlighted>{children}</Highlighted></div>

Highlight.propTypes = {
   children: PropTypes.element.isRequired,
}

export default Highlight
