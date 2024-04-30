import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';

function Secondary_button({text, style}) {
  return (
    <div className='secondary-bg-color btn text-white secondary-border' style={style}>{text}</div>
  )
}

export default Secondary_button