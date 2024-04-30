import React from 'react';

function Section_name({ name, style }) {
  // const style = {
  //   transform: 'rotate(-15deg)', // Corrected rotation value
  // };

  return (
    <h6>
      <span className='py-2 px-4 SectionName fw-bold' style={style}>
        {name}
      </span>
    </h6>
  );
}

export default Section_name;
