import React, { useContext, useState } from "react";
//import { CarritoContext } from "../CarritoContext";
import { CarritoContext } from "../CarritoContext";

const ListaProductos = ({ productos }) => {
  const { agregarItemAlCarrito } = useContext(CarritoContext); // Obtiene la función de manejo del carrito desde el contexto
  const [carrito, setCarrito] = useState([]);
  const [botonTexto, setBotonTexto] = useState('Agregar');

  const agregarAlCarrito = (event, producto) => {
    agregarItemAlCarrito(producto.nombre, producto.img, producto.precio); // Llama a la función de manejo del carrito con el producto
    event.target.innerHTML = 'Agregado al carrito';
    event.target.classList.add('added');

    setTimeout(() => {
      event.target.innerHTML = 'Agregar';
      event.target.classList.remove('added');
    }, 800);

    //console.log("Nombre:", producto.nombre);
    //console.log("IMG:", producto.img);
    //console.log("Precio:", producto.precio);
    //console.log("Producto agregado al carrito:", producto);
  };
  


  return (
    <div className="productos">
      {productos &&
        productos.map((producto) => (
          <div className="producto__card" key={producto.id}>
            <div className="producto__img_container">
              <img src={producto.img} alt="img" />
            </div>
            <div className="producto__title">
              <h3>{producto.nombre}</h3>
              <h3 style={{color: '#ffe1c7'}}>${producto.precio}</h3>
            </div>
            {/*
            <button className="productos__btn" onClick={() => agregarAlCarrito(producto)}>
              Comprar
        </button>*/}
            <button className="productos__btn" onClick={(event) => agregarAlCarrito(event, producto)}>
              {botonTexto}
            </button>
          </div>
        ))}
    </div>
  );
};

export default ListaProductos;
