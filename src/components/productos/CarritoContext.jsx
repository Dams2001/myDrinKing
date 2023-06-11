import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carritoItems, setCarritoItems] = useState([]);
  const [total, setTotal] = useState(0);

  const agregarItemAlCarrito = (titulo, imagenSrc, precio) => {
    // Comprueba si el artículo ya está en el carrito
    const itemExistente = carritoItems.find(item => item.titulo === titulo);
    if (itemExistente) {
      alert('El artículo ya está en el carrito');
      return;
    }

    const nuevoItem = {
      titulo: titulo,
      imagenSrc: imagenSrc,
      precio: precio,
      cantidad: 1
    };
    //console.log("Console log desde el contexto",nuevoItem)

    const nuevosItems = [...carritoItems, nuevoItem];
    setCarritoItems(nuevosItems);
    
    actualizarTotalCarrito(nuevosItems);
    
  };

  const eliminarItemCarrito = (indice) => {
    const nuevosItems = [...carritoItems];
    nuevosItems.splice(indice, 1);
    setCarritoItems(nuevosItems);

    actualizarTotalCarrito(nuevosItems);
  };

  const sumarCantidad = (indice) => {
    const nuevosItems = [...carritoItems];
    nuevosItems[indice].cantidad++;
    setCarritoItems(nuevosItems);

    actualizarTotalCarrito(nuevosItems);
  };

  const restarCantidad = (indice) => {
    const nuevosItems = [...carritoItems];
    if (nuevosItems[indice].cantidad > 1) {
      nuevosItems[indice].cantidad--;
      
      setCarritoItems(nuevosItems);

      actualizarTotalCarrito(nuevosItems);
    }
  };

  
  const actualizarTotalCarrito = (items) => {
    let total = 0;
    for (const item of items) {
      total += item.precio * item.cantidad;
    }
    setTotal(total);
  };
  

  const pagarClicked = () => {
    alert('Gracias por la compra');
    //console.log("Estos productos deberian formar parte del mensaje de WhatsApp",carritoItems);
    setCarritoItems([]);
    setTotal(0);

    // Construir el mensaje para WhatsApp
    const mensajeWhatsApp = "Hola, podrías asesorarme en la compra de estos productos:\n" + carritoItems.map(item =>"- " + item.titulo).join("\n");

    // Modificar la URL de WhatsApp con tu número de teléfono
    const numeroTelefono = "5493513582675";
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroTelefono}&text=${encodeURIComponent(mensajeWhatsApp)}`;

    // Redirigir a WhatsApp
    window.location.href = urlWhatsApp;
  };

  return (
    <CarritoContext.Provider
      value={{
        carritoItems,
        total,
        agregarItemAlCarrito,
        eliminarItemCarrito,
        sumarCantidad,
        restarCantidad,
        pagarClicked
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
