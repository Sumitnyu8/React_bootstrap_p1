import React from 'react'
import home_banner from '../assets/home_banner.png'
import Description from '../components/Description'
import Secondary_button from '../components/Secondary_button'
import Section_heading from '../components/Section_heading'
import Section_name from '../components/Section_name'

function Hom() {
  return (
    <div>
      <div className='container d-flex home py-section'>
        <div className='col-6 title py-5 mt-5'>
          <Section_name name ='Hello' />
          <Section_heading text1='We Have' text2='Development' text3='Experience' />
          <Description text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur error fuga distinctio officiis ut! Quidem rem aliquam velit expedita? Corrupti nam delectus consequuntur" />
          <Secondary_button text="Let's make it"/>
        </div>
        <div className='col-6'>
          <img src={home_banner} alt="home img" />
        </div>
      </div>
    </div>
  )
}

export default Home;