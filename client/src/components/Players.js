import React from 'react';

function Players(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.country}</h2>
      <h3>{props.searches}</h3>
    </div>
  )
}

export default Players;