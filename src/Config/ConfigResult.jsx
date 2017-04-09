import React from 'react'

const ConfigResult = ({store}) => (
  <div>
    <pre><code>
      {
        ["{\n", 
        "  context: " + store.context + ",\n",
        "  entry: '" + store.entry + "'\n",
        "}"]
      }
    </code></pre>
  </div>
)

export default ConfigResult