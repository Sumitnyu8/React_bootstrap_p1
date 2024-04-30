import React from 'react'

function Section_heading({name,style}) {
  return (
    <h1 className='SectionHeading fw-bold' style={style}><p>{name}</p></h1>
  )
}

export default Section_heading