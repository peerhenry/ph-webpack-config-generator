import React from 'react'
import styled from 'styled-components'
import PaddedDiv from 'Components/PaddedDiv'
import generateConfig from '../Logic/Config/ConfigGenerator'

const StyledDiv = styled.div`
  background-color: white;
  color: black;
  height: 100%;
  width: 100%;
  display: table-cell;
`

const StyledButton = styled.button`
  color: #aaa;
  border: 1px solid #aaa;
  transition: 0.3s;
  border-radius: 5px;
  outline: none;

  &:hover{
    color: #333;
    border: 1px solid #333;
    transition: 0.3s;
  }
`

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

const ConfigResult = ({store}) => {
  const config = generateConfig(store)

  return (
    <StyledDiv><PaddedDiv>    
      
      <pre><code>
        { config }
      </code></pre>
      <br/>
      <StyledButton onClick={e => download('webpack.config.js', config)}>Download</StyledButton>

    </PaddedDiv></StyledDiv>
)}

export default ConfigResult