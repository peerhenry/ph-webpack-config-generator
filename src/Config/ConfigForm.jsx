import React from 'react'

const ConfigForm = ({store}) => {

  return (
  <form action="">

    <input 
      type="text" 
      value={ store.entry } 
      onChange={e => store.entry = e.target.value}/>

    <input 
      type="text" 
      value={ store.outputPath } 
      onChange={e => store.outputPath = e.target.value}/>

    <input 
      type="text" 
      value={ store.outputFilename } 
      onChange={e => store.outputFilename = e.target.value}/>

  </form>
)}

export default ConfigForm