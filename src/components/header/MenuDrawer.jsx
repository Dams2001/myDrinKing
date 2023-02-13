import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../global/Button";
import Icon from "../global/Icon";

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
  height: 100vh;
  transition: right 0.3s linear;
  z-index: 99993;

  @media only screen and (min-width: 624px) {
    display: none;
  }
`;

const MenuDrawer = ({ open, handleClick }) => {
  return (
    <NavbarWrapper open={open}>
      <div className='menudrawer__divMenu'>
        <Button
          css='menudrawer__btnWrapper'
          event={handleClick}
          text={<Icon css='menudrawer__xWrapper' icon={faArrowRight} />}
        />
      </div>

      <div className='menudrawer__link'>
        <Link to="/">
          <p>Inicio</p>
        </Link>
      </div>
      <div className='menudrawer__link'>
        <Link to="/productos">
          <p>Productos</p>
        </Link>
      </div>
      <div className='menudrawer__link'>
        <Link to="/pedidos">
          <p>Pedidos</p>
        </Link>
      </div>

      <div className='menudrawer__link'>
        <Link to="/sobre-nosotros">
          <p>Sobre Nosotros</p>
        </Link>
      </div>

      <div className='menudrawer__link'>
        <Link to="/contacto">
          <p>Contacto</p>
        </Link>
      </div>

      <div className='menudrawer__ley'>
        <p>
          Ley 24.788. Prohíbese en todo el territorio nacional, el expendio a
          menores de dieciocho años, de todo tipo de bebidas alcohólicas. Créase
          el Programa Nacional de Prevención y Lucha contra el Consumo Excesivo
          de Alcohol.
        </p>
      </div>

      <div className='menudrawer__socialNetworks'>
        <img src={facebook} alt="fb" />
        <img src={instagram} alt="ig" />
        <img src={phone} alt="tel" />
      </div>
    </NavbarWrapper>
  );
};

export default MenuDrawer;
