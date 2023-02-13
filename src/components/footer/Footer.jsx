import React from "react";
import facebook from "../../assets/footer__logo_fb.svg";
import instagram from "../../assets/footer__logo_ig.svg";
import phone from "../../assets/footer__logo_phone.svg";

const Footer = () => {
  return (
    <footer className="footer__container">
      <div class="footer__top">
        <div class="footer__top_logo">
          <h2>DrinKing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div class="footer__top_redes">
            <li>
              <a href="/"><img src={facebook} alt="facebook" /></a>
            </li>
            <li>
              <a href="/"><img src={instagram} alt="instagram" /></a>
            </li>
            <li>
              <a href="/"><img src={phone} alt="phone" /></a>
            </li>
          </div>
        </div>
        <div class="footer__top_categorias">
          <div class="footer__top_categoria">
            <h3>Productos</h3>
            <li>
              <a href="/">Bebidas destiladas</a>
            </li>
            <li>
              <a href="/">Vinos y espumantes</a>
            </li>
            <li>
              <a href="/">Cervezas</a>
            </li>
            <li>
              <a href="/">Bazar, coctelería y botánicos</a>
            </li>
            <li>
              <a href="/">Snacks</a>
            </li>
            <li>
              <a href="/">Juegos</a>
            </li>
          </div>
          <div class="footer__top_categoria">
            <h3>Servicios</h3>
            <li>
              <a href="/">Envíos</a>
            </li>
            <li>
              <a href="/">Multimedia</a>
            </li>
          </div>
          <div class="footer__top_categoria">
            <h3>Contacto</h3>
            <li>
              <a href="/">Noticias</a>
            </li>
            <li>
              <a href="/">Mailing</a>
            </li>
            <li>
              <a href="/">FAQs</a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_copyright">
          <p>&copy; 2023 DrinKing. Todos los derechos reservados.</p>
        </div>
        <div className="footer__bottom_politicas">
          <a href="/">Política de privacidad</a>
          <a href="/">Términos de servicio</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
