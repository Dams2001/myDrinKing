import React, { useState, useEffect } from "react";
import ListaCategorias from "./contenido/ListaCategorias";
import ListaProductos from "./contenido/ListaProductos";
import PRODUCTOS from "../../data/productos.json";

const Productos = () => {
  const allCategories = [
    "Todos",
    ...new Set(PRODUCTOS.map((producto) => producto.categoria)),
  ];

  const [categorias, setCategorias] = useState(allCategories);
  const [productos, setProductos] = useState(PRODUCTOS);

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
        <div className="productos_listaProductos">
          <ListaProductos productos={productos} />
        </div>
      </div>
    </section>
  );
};

export default Productos;
