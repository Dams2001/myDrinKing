import React, { useContext } from 'react';
import { CarritoContext } from '../productos/CarritoContext';
import "./CarritoCompras.scss";


const CarritoCompras = () => {
  const { carritoItems, total, agregarItemAlCarrito, eliminarItemCarrito, sumarCantidad, restarCantidad, pagarClicked } = useContext(CarritoContext);

  return (
    <div className="carrito" id="carrito">
      <div className="header-carrito">
        <h2>Tu Carrito</h2>
      </div>

      <div className="carrito-item-fa">
        {carritoItems.map((item, index) => (
          <div key={index} className="carrito-item">
            <img src={item.imagenSrc} width="80px" alt="" />
            <div className="carrito-item-detalles">
              <span className="carrito-item-titulo">{item.titulo}</span>
              <div className="selector-cantidad">
                <i className="fa-solid fa-minus restar-cantidad" onClick={() => restarCantidad(index)}><p>-</p></i>
                <input type="text" value={item.cantidad} className="carrito-item-cantidad" disabled />
                <i className="fa-solid fa-plus sumar-cantidad" onClick={() => sumarCantidad(index)}><p>+</p></i>
              </div>

             <span className="carrito-item-precio" style={{color: '#E9B465'}}>${item.precio}</span>
            </div>
            <button className="btn-eliminar" onClick={() => eliminarItemCarrito(index)}>
              
              
              <p>x</p>
              
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        ))}
      </div>
      
      <div className="carrito-total">
        <div className="fila">
          {/*<strong>Consultanos Por WhatsApp</strong>*/}
          <br></br>
          <strong>Total:</strong>
          <span className="carrito-precio-total" style={{color: '#E9B465'}}>${total.toLocaleString('es')}</span>
        </div>
        <button className="btn-pagar" onClick={pagarClicked}>
          Consultar <i className="fa-solid fa-bag-shopping"></i>
        </button>
      </div>
    </div>
  );
};

export default CarritoCompras;
