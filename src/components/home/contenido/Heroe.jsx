import React from "react";
import { Link } from "react-router-dom";

const Heroe = () => {
  return (
    <section className="heroe__container">
      <h2 className="heroe__title">Lorem ipsum dolor sit amet, consecte tur.</h2>
      <Link to={"/productos"}><button className="heroe__button">Catálogo</button></Link>
      <p className="heroe__ley">
        Ley 24.788. Prohíbese en todo el territorio nacional, el expendio a
        menores de dieciocho años, de todo tipo de bebidas alcohólicas. Créase
        el Programa Nacional de Prevención y Lucha contra el Consumo Excesivo de
        Alcohol.
      </p>
    </section>
  );
};

export default Heroe;
