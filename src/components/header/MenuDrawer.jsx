import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../global/Button";
import Icon from "../global/Icon";
import ReactWhatsapp from "react-whatsapp";

import facebook from "../../assets/menudrawer__logo_fb.svg";
import instagram from "../../assets/menudrawer__logo_ig.svg";
import phone from "../../assets/menudrawer__logo_tel.svg";

const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;
  background-color: black;
  font-size: 12px;
  font-weight: 700;
  line-height: 300%;
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-100%")};
  width: 80%;
  max-width: 300px;
  min-width: 150px;
  height: 90vh;
  transition: right 0.3s linear;
  z-index: 99993;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

const MenuDrawer = ({ open, handleClick }) => {
  const activeLinkClassName = "menuDrawer__activeLink";
  const notActiveLinkClassName = "menuDrawer__link";

  const handleCloseMenu = () => {
    handleClick(); // Cerrar el menú al hacer clic en un enlace
  };

  return (
    <NavbarWrapper open={open}>
      <div className="menudrawer__divMenu">
        <Button
          css="menudrawer__btnWrapper"
          event={handleClick}
          text={<Icon css="menudrawer__xWrapper" icon={faArrowRight} />}
        />
      </div>

      <div className="menudrawer__link" onClick={handleCloseMenu}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Home</p>
        </NavLink>
      </div>
      <div className="menudrawer__link" onClick={handleCloseMenu}>
        <NavLink
          to="/productos"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Shop</p>
        </NavLink>
      </div>
      {/* <div className="menudrawer__link">
        <ReactWhatsapp number="+5493513582675" message="Hola! Me gustaría saber el precio de" className="header__whatsapp">
          <NavLink
            className="header__link"
          >
            <p>Pedidos</p>
          </NavLink>
        </ReactWhatsapp>
      </div> */}


      {/*
      <div className="menudrawer__link" onClick={handleCloseMenu}>
        <NavLink
          to="/sobre-nosotros"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Sobre Nosotros</p>
        </NavLink>
      </div>
       */}    

      {/* <div className="menudrawer__link">
        <NavLink
          to="/contacto"
          className={({ isActive }) =>
            isActive ? activeLinkClassName : notActiveLinkClassName
          }
        >
          <p>Contacto</p>
        </NavLink>
      </div> */}

      <div className="menudrawer__ley">
        <p>
        Ley 24.788. Prohíbese en todo el territorio nacional, el expendio a
        menores de dieciocho años, de todo tipo de bebidas alcohólicas. Créase
        el Programa Nacional de Prevención y Lucha contra el Consumo Excesivo de
        Alcohol.
        </p>
      </div>

      <div className="menudrawer__socialNetworks">
        <a
          href="https://www.facebook.com/profile.php?id=100063623920462"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} alt="fb" />
        </a>

        <a
          href="https://www.instagram.com/drinking.cba/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="ig" />
        </a>
        <a href="tel:+5493515186464">
          <img src={phone} alt="tel" />
        </a>
      </div>
    </NavbarWrapper>
  );
};

export default MenuDrawer;
