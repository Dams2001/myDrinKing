import React, { useState } from "react";
import facebook from "../../assets/footer__logo_fb.svg";
import instagram from "../../assets/footer__logo_ig.svg";
import phone from "../../assets/footer__logo_phone.svg";
import Modal from "../global/Modal";

const Footer = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);

  return (
    <footer className="footer__container">
      <div className="footer__top">
        <div className="footer__top_logo">
          <h2>DrinKing</h2>
          <p>Expendio de bebidas y complementos</p>
        </div>
        <div className="footer__top_categorias">
          <div className="footer__top_redes">
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100063623920462"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/drinking.cba/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
            </li>
            <li>
              <a href="tel:+5493515186464">
                <img src={phone} alt="phone" />
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer__bottom_copyright">
          <p>&copy; 2023 DrinKing. Todos los derechos reservados.</p>
        </div>
        <div className="footer__bottom_politicas">
          <Modal
            state={modal1}
            title={"Políticas de privacidad"}
            text={
              <p>
                En este sitio web, respetamos su privacidad y no recopilamos
                información personal sobre nuestros visitantes. No solicitamos
                nombres, direcciones de correo electrónico u otra información
                personal en nuestro sitio.
                <br />
                <br />
                Sin embargo, es posible que recopilemos información no personal
                sobre su visita, como su dirección IP, el tipo de navegador y la
                página web desde la que accedió a nuestro sitio. Esta
                información se utiliza exclusivamente para fines estadísticos y
                no se comparte con terceros.
                <br />
                <br />
                Este sitio puede contener enlaces a otros sitios web, pero no
                somos responsables de las políticas de privacidad de esos
                sitios. Le recomendamos que lea las políticas de privacidad de
                cualquier sitio web que visite.
                <br />
                <br />
                Si tiene alguna pregunta sobre esta política de privacidad, no
                dude en ponerse en contacto con nosotros a través de nuestra
                dirección de correo electrónico o número de teléfono.
                <br />
                <br />
                Esta política de privacidad puede ser actualizada de vez en
                cuando, por lo que le recomendamos que la revise periódicamente.
                La última actualización se realizó el 09/02/2023."
              </p>
            }
            closeModal={setModal1}
          />
          <Modal
            state={modal2}
            title={"Términos de servicio"}
            text={
              <p>
                Bienvenido a nuestro sitio web. Al acceder y utilizar este
                sitio, acepta cumplir con los siguientes términos de servicio.
                Si no está de acuerdo con estos términos, por favor, no utilice
                nuestro sitio.
                <br />
                <br />
                Propiedad intelectual: Todo el contenido del sitio, incluyendo
                textos, imágenes, gráficos, logotipos, iconos y software, es
                propiedad exclusiva de nosotros o de nuestros proveedores de
                contenido y está protegido por las leyes de derechos de autor y
                marcas registradas.
                <br />
                <br />
                Uso permitido: Se le concede un derecho limitado, no exclusivo e
                intransferible para acceder y utilizar el sitio para su uso
                personal y no comercial. No puede modificar, distribuir,
                transmitir, reutilizar, reenviar ni usar el contenido del sitio
                para ningún fin comercial sin nuestro previo consentimiento por
                escrito.
                <br />
                <br />
                Exclusión de garantías: Este sitio se proporciona "tal cual" sin
                garantía alguna, expresa o implícita, incluyendo, sin
                limitación, garantías de comerciabilidad, aptitud para un
                propósito específico y no infracción. No garantizamos que el
                sitio esté disponible en todo momento, sin interrupciones ni
                errores.
                <br />
                <br />
                Limitación de responsabilidad: En ningún caso seremos
                responsables de cualquier daño indirecto, incidental, especial,
                consecuente o ejemplar, incluyendo, sin limitación, pérdida de
                ganancias o ingresos, que resulten del uso o la imposibilidad de
                usar este sitio o cualquier contenido del mismo.
                <br />
                <br />
                Cambios en los términos de servicio: Nos reservamos el derecho
                de modificar estos términos de servicio en cualquier momento y
                sin previo aviso. Al continuar utilizando el sitio después de
                dichas modificaciones, acepta cumplir con los términos
                modificados.
                <br />
                <br />
                Ley aplicable: Estos términos de servicio se regirán e
                interpretarán de acuerdo con las leyes de Argentina, sin dar
                efecto a ninguna disposición sobre conflicto de leyes.
                <br />
                <br />
                Si tiene alguna pregunta o inquietud sobre estos términos de
                servicio, por favor, póngase en contacto con nosotros a través
                de nuestra dirección de correo electrónico o número de teléfono.
                <br />
                <br />
                Estos términos de servicio entraron en vigor el 09/02/2023.
              </p>
            }
            closeModal={setModal2}
          />
          <p onClick={() => setModal1(true)}>Política de privacidad</p>
          <p onClick={() => setModal2(true)}>Términos de servicio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
