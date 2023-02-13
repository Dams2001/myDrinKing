import React from "react";
import Button from "../../global/Button";

const ReadMore = () => {
  return (
    <section className="readmore__container">
      <div className="readmore__titulo">
        <h2>[Entrada a publicaciones de Instagram]</h2>
      </div>
      <Button css="readmore__boton" text="Leer más" />
    </section>
  );
};

export default ReadMore;
