import React, { useState, useEffect } from "react";
import ListaCategorias from "./contenido/ListaCategorias";
import ListaProductos from "./contenido/ListaProductos";
import PRODUCTOS from "../../data/productos.json";
//import Button from "../global/Button";
//import ReactWhatsapp from "react-whatsapp";
//import { CarritoProvider } from "./CarritoContext"; // Corrección en la importación

const Productos = () => {
  const allCategories = [
    "Todos",
    ...new Set(PRODUCTOS.map((producto) => producto.categoria)),
  ];

  const [categorias, setCategorias] = useState(allCategories);
  const [productos, setProductos] = useState(PRODUCTOS);
  const [busqueda, setBusqueda] = useState("");

  const filtroCategoria = (categoria) => {
    if (categoria === "Todos") {
      setProductos(PRODUCTOS);
      return;
    }

    const productosFiltrados = PRODUCTOS.filter(
      (producto) => producto.categoria === categoria
    );
    setProductos(productosFiltrados);
  };

  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  useEffect(() => {
    const productosFiltrados = PRODUCTOS.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductos(productosFiltrados);
  }, [busqueda]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="productos__container">
      <div className="productos__cateogrias">
        <ListaCategorias
          categorias={categorias}
          filtroCategoria={filtroCategoria}
        />
      </div>
      <div className="productos__productos">
        <h2>Productos</h2>
        {/*
        <ReactWhatsapp className="header__whatsapp" number="+5493513582675" message="Hola! Me gustaría saber el precio de">
          <Button css="productos__btn" text="Pedí acá" />
        </ReactWhatsapp>
        */}
        <div className="productos_listaProductos">
          <input className="buscadorProductos"
            type="text"
            placeholder="Buscar producto"
            value={busqueda}
            onChange={handleBusqueda}
          />
          <ListaProductos productos={productos}  />
        </div>
      </div>
    </section>
  );
};

export default Productos;
