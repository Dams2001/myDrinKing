import React from "react";
import Juan from "../../assets/sobrenosotros__Juan.jpg";
import GrowKingSocio from "../../assets/sobrenosotros__GrowKingSocio.jpg";
import Mapa from "../../assets/sobrenosotros__mapa.jpg";

const SobreNosotrosContenido = () => {
  return (
    <section className="sobrenosotroscontenido__container">
      <div className="sobrenosotroscontenido__nuestra-mision">
        <h3>Nuestra misión</h3>
        <p>
          Dar a conocer las variedades de productos que todavía no se encuentran
          en venta en el país pero sí disponibles en el mercado alrededor del
          mundo. La finalidad principal de GrowKing va mucho más allá del
          ingreso que pueda generar el negocio, el objetivo es poder informar y
          transmitir al público, todo el conocimiento que posee sobre el
          autocultivo medicinal, que en un momento le brindaron otras personas,
          para que de esta forma, el público pueda aprender y compartirlo con
          otras personas.
        </p>
      </div>
      {/* DRINKING */}
      <div className="sobrenosotroscontenido__article">
        <div className="sobrenosotroscontenido__article-text">
            <h3>DrinKing</h3>
            <p>En el año 2016 Juan fundó DrinKing comenzando la venta de una bebida energética y un espumante de baja calidad, a medida que el negocio fue creciendo, Comenzó a viajar cada 2 meses importando bebidas de América del Norte y Europa, las cuales no se conseguían en el país. Comenzaron a reconocerse como una pequeña distribuidora a locales de la provincia e incluso a locales en toda la Argentina. DrinKing actualmente funciona como expendio de bebidas y accesorios a nivel nacional.</p>
        </div>
        <div className="sobrenosotroscontenido__article-img">
            <img src={Juan} alt="Juan" loading="lazy"/>
        </div>
      </div>
      {/* GROWKING */}
      <div className="sobrenosotroscontenido__article-reverse">
        <div className="sobrenosotroscontenido__article-text">
            <h3>GrowKing</h3>
            <p>En 2018, Roger se unió al negocio con <a href="/">GrowKing</a>, experto en cultivo y todo lo que eso conlleva, uno de sus mayores deseos es enseñarle a la gente el mundo del grow. Posee artículos desde semillas, parafernalia, elementos para el cultivo y plantines, productos nacionales e importados. Junto a Juan, ambos conforman DrinKing y GrowKing.</p>
        </div>
        <div className="sobrenosotroscontenido__article-img">
            <img src={GrowKingSocio} alt="GrowKingSocio" loading="lazy"/>
        </div>
      </div>
      {/* LA TIENDA */}
      <div className="sobrenosotroscontenido__article">
        <div className="sobrenosotroscontenido__article-text">
            <h3>La Tienda</h3>
            <p>El local se encuentra ubicado en la calle Av. Pueyrredón 191, Córdoba Capital, Córdoba, Argentina, en barrio Nueva Córdoba. Entre las calles Obispo Trejo y Avenida Vélez Sarsfield. El mismo posee delivery propio y la mayor variedad de productos en bebidas y grow de la Ciudad.</p>
        </div>
        <div className="sobrenosotroscontenido__article-img">
            <img src={Mapa} alt="Mapa" loading="lazy"/>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotrosContenido;
