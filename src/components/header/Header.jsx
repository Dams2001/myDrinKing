import React, { useState, useRef, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/LOGO GROWKING LOGO SOMBRA.png";
import CarritoCompras from './CarritoCompras';
import { CarritoContext } from "../productos/CarritoContext";
import MenuDrawer from "./MenuDrawer";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faBarsStaggered, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import ModalHeader from "../global/ModalHeader";

const Header = () => {
  const refMenu = useRef(null);

  const [open, setOpen] = useState(false);
  const [carritoOpen, setCarritoOpen] = useState(false); // Nuevo estado para controlar si el carrito está abierto o cerrado
  const { carritoItems, total } = useContext(CarritoContext); // Obtener los valores del contexto del carrito
  const hideOnClickOutside = (e) => {
    if (refMenu.current && !refMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const handleMenuClick = () => {
    setOpen(!open);
  };

  const handleCarritoClick = () => {
    setCarritoOpen(!carritoOpen);
  };

  const activeLinkClassName = "header__activeLink";
  const notActiveLinkClassName = "header__link";

  const [modal, setModal] = useState(false);

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".header").style.background = "#000";
    } else {
      document.querySelector(".header").style.background = "transparent";
    }
  }

  return (
    <header className="header">
      <ModalHeader state={modal} closeModal={setModal} />
      <div className={"header__container"}>
      <div>
        {/*
          <NavLink to="/">
            <h1 className="header__logo" style={{color:"white"}}>DrinKing</h1>
          </NavLink>
        */}
        </div>
        
        <div>
          <a href="https://www.instagram.com/drinking.cba/" target="_blank" rel="noopener noreferrer">
            <img src={logo} alt="GrowKing Logo" className="header__logo" />
          </a>
        </div>
        
        <div className={"header__disableMobile header__menu"}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeLinkClassName : notActiveLinkClassName
            }
          >
            <p>Inicio</p>
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? activeLinkClassName : notActiveLinkClassName
            }
          >
            <p>Productos</p>
          </NavLink>
          <NavLink
            to="/sobre-nosotros"
            className={({ isActive }) =>
              isActive ? activeLinkClassName : notActiveLinkClassName
            }
          >
            <p>Sobre Nosotros</p>
          </NavLink>        

        </div>
        
        <div className={"header__disableMobile"}>
          {/*<div className={"header__contact"} onClick={() => setModal(true)}>
            <p>Contacto</p>
          </div>*/}
        </div>

        {/* Nuevo botón para abrir el carrito de compras */}
        <Button
            css={"header__btnWrapper__wsp icon__softgreen"}
            event={handleCarritoClick}
            text={<Icon css={"header__barsWrapper"} icon={faShoppingCart} />}
          />
        
        {/* Botón para abrir el menú */}
        <Button
          css={"header__btnWrapper"}
          event={handleMenuClick}
          text={<Icon css={"header__barsWrapper"} icon={faBarsStaggered} />}
        />

        <div ref={refMenu} className={"header__menuDrawer"}>
          <MenuDrawer open={open} handleClick={handleMenuClick} />
        </div>
      </div>

      {/* Mostrar el carrito de compras si está abierto */}
      {carritoOpen && (
        <div className="carrito-de-compras">
          {/* Contenido del carrito de compras */}
          <CarritoCompras carritoItems={carritoItems} total={total} /> {/* Pasar los valores del contexto al componente */}
        </div>
      )}
    </header>
  );
};

export default Header;
