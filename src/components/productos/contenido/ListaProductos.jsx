import React from "react";

const ListaProductos = ({ productos }) => {
  return (
    <div className="productos">
      {productos &&
        productos.map((producto) => (
          <div className="producto__card" key={producto.id}>
            <div className="producto__img_container">
              <img src={producto.img} alt="img" loading="lazy"/>
            </div>
            <div className="producto__title">
              <h3>{producto.nombre}</h3>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ListaProductos;
