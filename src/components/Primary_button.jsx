import React from 'react'
import Button from "react-bootstrap/Button";

function Primary_button({text}) {
  return (
    <Button className='primary-bg-color btn text-white primary-border'>{text}</Button>
  )
}

export default Primary_button