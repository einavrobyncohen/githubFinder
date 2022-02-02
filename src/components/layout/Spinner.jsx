import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

function Spinner() {
  return (
      <div className='mx-auto w-20'>
          <BallTriangle color="#AF4670" height={80} width={80} />
      </div>
      
  );
}

export default Spinner;
