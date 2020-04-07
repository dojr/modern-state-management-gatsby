
// example Layout.js
import React from 'react'

export default ({ children }) => (
  <div
    style={{
      overflow: 'auto',
      marginBottom: '100px'
    }}>
    {children}
  </div>
)