import React from 'react'
import styled from 'styled-components'
import PaddedDiv from 'Components/PaddedDiv'

const GitHub = styled.span`
  font-weight: bold;
  color: orange;

  &:hover {
    color: white
  }
`

const Footer = ({}) => (
  <footer>
    <PaddedDiv>

      <span>© PeerHenry 2017</span>
      
      <div style={{display: 'inline-block', float: 'right'}}>
        <span style={{padding: '10px'}}>Check me out on
          <a href="https://github.com/peerhenry/ph-webpack-config-generator" style={{textDecoration: 'none'}}>
            <GitHub> GitHub</GitHub>
          </a>
        </span>
      </div>
      
    </PaddedDiv>
  </footer>
)

export default Footer