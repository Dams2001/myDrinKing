import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

import MenuDrawer from "./MenuDrawer";
import Button from "../global/Button";
import Icon from "../global/Icon";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import ModalHeader from "../global/ModalHeader";
import ReactWhatsapp from "react-whatsapp";

const Header = () => {
  const refMenu = useRef(null);

  const [open, setOpen] = useState(false);

  const hideOnClickOutside = (e) => {
    if (refMenu.current && !refMenu.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  const handleClick = () => {
    setOpen(!open);
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
      <ModalHeader state={modal} closeModal={setModal}/>
      <div className={"header__container"}>
        <div>
          <NavLink to="/">
            <h1 className="header__logo">DrinKing</h1>
          </NavLink>
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
          <ReactWhatsapp
            number="+5493513582675"
            message="Hola! Me gustaría saber el precio de"
            className="header__whatsapp"
          >
            <NavLink className="header__link">
              <p>Pedidos</p>
            </NavLink>
          </ReactWhatsapp>
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
          <div className={"header__contact"} onClick={() => setModal(true)}>
            <p>Contacto</p>
          </div>
        </div>

        <Button
          css={"header__btnWrapper"}
          event={handleClick}
          text={<Icon css={"header__barsWrapper"} icon={faBarsStaggered} />}
        />

        <div ref={refMenu} className={"header__menuDrawer"}>
          <MenuDrawer open={open} handleClick={handleClick} />
        </div>
      </div>
    </header>
  );
};

export default Header;
