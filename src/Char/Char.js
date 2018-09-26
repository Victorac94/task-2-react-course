import React from 'react';

const char = (props) => {
  const styleP = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '6px',
    border: '1px solid black',
    borderRadius: '3px',
    verticalAlign: 'middle',
    cursor: 'pointer'
  }

  return (
      <span style={styleP} onClick={props.clicked}>
        {props.char}
      </span>
  )
}

export default char;
