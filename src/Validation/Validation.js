import React from 'react';

const validation = (props) => {
  let message = <p>Text too short</p>;

  if(props.length >= 5) {
    message = <p>Text long enough</p>
  }

  return (
    <div>
      {message}
    </div>
  )
}

export default validation;
