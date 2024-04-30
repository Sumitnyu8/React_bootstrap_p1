import React from 'react'

function Skill_card({icon, title}) {
  return (
    <>
    <div className='Skill-card col-6 px-3'>
        <p className=' d-flex justify-content-center fw-bold align-items-center'> <span className='secondary-color'>{icon}</span> {title}</p>
    </div>
    </>
  )
}

export default Skill_card