import React from 'react'

function Description({text, style}) {
  return (
    <p className='description pe-5 mb-4 text-muted' style={style}>{text} </p>
  )
}

export default Description