import React from 'react';

const Card = ({ id, img, categoria }) => {
  return (
    <div key={id} className="categoria__card_container">
        <img src={img} alt="img" />
        <h3>{categoria}</h3>
    </div>
  )
}

export default Card;