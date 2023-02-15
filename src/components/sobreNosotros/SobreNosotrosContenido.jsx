import React from "react";
import Juan from "../../assets/sobrenosotros__Juan.jpg";
import GrowKingSocio from "../../assets/sobrenosotros__GrowKingSocio.jpg";
// import Mapa from "../../assets/sobrenosotros__mapa.jpg";
import MapView from "./MapView";

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
            {/* <MapView latitud={"-31.42650374619513"} longitud={"-64.19136220240563"} /> */}
            <iframe title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.5450167127456!2d-64.1913622!3d-31.4266594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a288e55c4aaf%3A0x6bbea30e1ff34d2f!2sAv.%20J.%20M.%20de%20Pueyrred%C3%B3n%20191%2C%20X5000BRB%20C%C3%B3rdoba!5e0!3m2!1sen!2sar!4v1676411378468!5m2!1sen!2sar" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default SobreNosotrosContenido;
