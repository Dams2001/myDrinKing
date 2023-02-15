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
