import React from "react";
import Button from "../../global/Button";
import { Link } from "react-router-dom";

const ReadMore = () => {
  return (
    <section className="readmore__container">
      <div className="readmore__titulo">
        <h2>[Entrada a publicaciones de Instagram]</h2>
      </div>
      <Link to={"/entradas-blog"}><Button css="readmore__boton" text="Acá" /></Link>
    </section>
  );
};

export default ReadMore;
