import React from "react";
import Card from "./Card";
import Icon from "../../../global/Icon";
import Button from "../../../global/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import CATEGORIAS1 from "../../../../data/categoriasAlcohol.json";
import CATEGORIAS2 from "../../../../data/categoriasVarios.json";
import ReactWhatsapp from "react-whatsapp";

const Cards = () => {
  return (
    <section className="cards__productos">
      <div className="cards__productos_alcohol">
        <div className="cards__productos_titulo">
          <h2>Productos</h2>
          <div className="line"></div>
        </div>
        <div className="cards__productos_contenido">
          {CATEGORIAS1 &&
            CATEGORIAS1.map((categoria) => (
              <div
                //onClick={() => handleClick(producto.name, category.id)}
                key={categoria.id}
                className="card__container"
              >
                <Card img={categoria.img} categoria={categoria.categoria} />
              </div>
            ))}
          <span className="cards__mobile">
            {CATEGORIAS2 &&
              CATEGORIAS2.map((categoria) => (
                <div
                  //onClick={() => handleClick(producto.name, category.id)}
                  key={categoria.id}
                  className="card__container"
                >
                  <Card img={categoria.img} categoria={categoria.categoria} />
                </div>
              ))}
          </span>
        </div>
      </div>
      <div className="cards__productos_varios">
        <div className="cards__productos_titulo">
          <Icon css="cards__productos_titulo_icono" icon={faWhatsapp} />
          <h2>Pedí por WhatsApp</h2>
          <ReactWhatsapp number="+5493515186464" message="Quisiera mas informacion de DrinKing..." className="WhatsappButton"><Button css="cards__productos_titulo_boton" text="Acá"/></ReactWhatsapp>
        </div>
        <div className="cards__productos_contenido">
          {CATEGORIAS2 &&
            CATEGORIAS2.map((categoria) => (
              <div
                //onClick={() => handleClick(producto.name, category.id)}
                key={categoria.id}
                className="card__container"
              >
                <Card img={categoria.img} categoria={categoria.categoria} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
