import React from "react";
import Card from "./Card";
import Icon from "../../../global/Icon";
import Button from "../../../global/Button";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import CATEGORIAS1 from "../../../../data/categoriasAlcohol.json";
import CATEGORIAS2 from "../../../../data/categoriasVarios.json";
import ReactWhatsapp from "react-whatsapp";
import { Link } from "react-router-dom";

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
                key={categoria.id}
                className="card__container"
              >
                <Link to={"/productos"}><Card img={categoria.img} categoria={categoria.categoria} /></Link>
              </div>
            ))}
          <span className="cards__mobile">
            {CATEGORIAS2 &&
              CATEGORIAS2.map((categoria) => (
                <div
                  key={categoria.id}
                  className="card__container"
                >
                  <Link to={"/productos"}><Card img={categoria.img} categoria={categoria.categoria} /></Link>
                </div>
              ))}
          </span>
        </div>
      </div>
      <div className="cards__productos_titulo disableWeb">
          <Icon css="cards__productos_titulo_icono" icon={faWhatsapp} />
          <h2 id="pedidos">Pedí por WhatsApp</h2>
          <ReactWhatsapp number="+5493513582675" message="Hola! Me gustaría saber el precio de" className="header__whatsapp"><Button css="cards__productos_titulo_boton" text="Acá"/></ReactWhatsapp>
        </div>
      <div className="cards__productos_varios disableMobile">
        <div className="cards__productos_titulo">
          <Icon css="cards__productos_titulo_icono" icon={faWhatsapp} />
          <h2 id="pedidos">Pedí por WhatsApp</h2>
          <ReactWhatsapp number="+5493513582675" message="Hola! Me gustaría saber el precio de" className="WhatsappButton"><Button css="cards__productos_titulo_boton" text="Acá"/></ReactWhatsapp>
        </div>
        <div className="cards__productos_contenido">
          {CATEGORIAS2 &&
            CATEGORIAS2.map((categoria) => (
              <div
                key={categoria.id}
                className="card__container"
              >
                <Link to={"/productos"}><Card img={categoria.img} categoria={categoria.categoria} /></Link>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
