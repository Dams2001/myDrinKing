import React from "react";

import clock from "../../../assets/service__feather-clock.svg";
import bike from "../../../assets/service__metro-directions-bike.svg";
import paw from "../../../assets/service__material-pets.svg";

const Services = () => {
  return (
    <section className="services__container">
      <div className="services__service">
        <img src={clock} alt="clock" loading="lazy"/>
        <h3>Horarios</h3>
        <div className="text-center">
        <p>Martes</p>
          <p>11:00 a 14:00 hs</p>
          <p>18:00 a 22:00 hs</p>
          <br />
          <p>Miércoles a Sábados</p>
          <p>11:00 a 14:00 hs</p>
          <p>18:00 a 00:00 hs</p>
        </div>
      </div>
      <div className="services__service">
        <img src={bike} alt="bike" loading="lazy"/>
        <h3>Delivery</h3>
        <p className="w-75 text-center">Envíos en Nueva Córdoba, Centro y alrededores</p>
      </div>
      <div className="services__service">
        <img src={paw} alt="paw" loading="lazy"/>
        <h3>Pet Friendly</h3>
        <p className="w-75 text-center">¡Tu amigo de cuatro patas también es bienvenido!</p>
      </div>
    </section>
  );
};

export default Services;
