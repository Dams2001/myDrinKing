import React from "react";
import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const TheStore = () => {
  return (
    <section className="thestore__container">
      <h2>La Tienda</h2>
      <p>
        <Icon css="thestore__icon" icon={faLocationDot} /> 
        Av. Pueyrredón 191
      </p>
    </section>
  );
};

export default TheStore;
