import React, { useState, useEffect } from "react";
import ListaCategorias from "./contenido/ListaCategorias";
import ListaProductos from "./contenido/ListaProductos";
import PRODUCTOS from "../../data/productos.json";

//import Button from "../global/Button";
//import ReactWhatsapp from "react-whatsapp";
//import { CarritoProvider } from "./CarritoContext"; // Corrección en la importación

const Productos = () => {
  // Obtener todas las categorías únicas de los productos
  const allCategories = [
    "Todos",
    ...new Set(PRODUCTOS.map((producto) => producto.categoria)),
  ];

  // Estado para almacenar las categorías seleccionadas
  const [categorias, setCategorias] = useState(allCategories);

  // Estado para almacenar los productos filtrados
  const [productos, setProductos] = useState(PRODUCTOS);

  // Estado para almacenar el término de búsqueda
  const [busqueda, setBusqueda] = useState("");

  // Filtrar productos por categoría seleccionada
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

  // Manejar cambios en el campo de búsqueda
  const handleBusqueda = (event) => {
    setBusqueda(event.target.value);
  };

  // Filtrar productos por término de búsqueda
  useEffect(() => {
    const productosFiltrados = PRODUCTOS.filter((producto) =>
      producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    setProductos(productosFiltrados);
  }, [busqueda]);

  // Scroll al inicio de la página al cargar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="productos__container">
      <div className="productos__cateogrias">
        {/* Componente para mostrar la lista de categorías */}
        <ListaCategorias
          categorias={categorias}
          filtroCategoria={filtroCategoria}
        />
      </div>
      <div className="productos__productos">
        <h2>Productos</h2>
        {/* Botón para pedir por WhatsApp */}
        {/* 
        <ReactWhatsapp className="header__whatsapp" number="+5493513582675" message="Hola! Me gustaría saber el precio de">
          <Button css="productos__btn" text="Pedí acá" />
        </ReactWhatsapp>
        */}
        <div className="productos_listaProductos">
          {/* Campo de búsqueda de productos */}
          <input
            className="buscadorProductos"
            type="text"
            placeholder="Buscar producto"
            value={busqueda}
            onChange={handleBusqueda}
          />
          {/* Componente para mostrar la lista de productos */}
          <ListaProductos productos={productos} />
        </div>
      </div>
    </section>
  );
};

export default Productos;
