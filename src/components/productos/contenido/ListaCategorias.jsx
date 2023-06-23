import React from "react";
import { NavLink } from "react-router-dom";

const ListaCategorias = ({ categorias, filtroCategoria }) => {
  return (
    <div className="categorias__container">
      {categorias &&
        categorias.map((categoria) => (
          <NavLink
            className="categorias__btn"
            onClick={() => filtroCategoria(categoria)}
            key={categoria}
          >
            <p>{categoria}</p>
          </NavLink>
        ))}
    </div>
  );
};

export default ListaCategorias;
// {
//   "id": 5,
//   "categoria": "Snacks",
//   "img": "/images/promo_5.jpg" 
// },
// {
//   "id": 6,
//   "categoria": "Juegos",
//   "img": "/images/promo_6.jpg" 
// }