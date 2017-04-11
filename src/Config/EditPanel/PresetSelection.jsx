import React from 'react'
import ExpandedDiv from '../../Components/ExpandedDiv'

const PresetSelection = ({store}) => (
  <ul>
    <li>
      <button>Clear</button>
    </li>
    <li>
      <button>Simple ES2015</button>
    </li>
    <li>
      <button>Simple React</button>
    </li>
  </ul>
)

export default PresetSelection