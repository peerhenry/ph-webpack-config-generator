import React from 'react'

const ConfigForm = ({store}) => {

  return (
  <form action="">

    <input 
      type="text" 
      value={ store.entry } 
      onChange={e => store.entry = e.target.value}/>

  </form>
)}

export default ConfigForm