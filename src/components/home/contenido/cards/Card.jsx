import React from 'react';

const Card = ({ id, img, categoria }) => {
  return (
    <div key={id}>
        <img src={img} alt="img" />
        <h3>{categoria}</h3>
    </div>
  )
}

export default Card;