import React from 'react'

function Section_heading({text1, text2, text3}) {
  return (
    <h1 className='mb-4'><p>{text1}</p> <p>{text2}</p> <p>{text3}</p></h1>
  )
}

export default Section_heading