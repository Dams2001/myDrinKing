import React from "react";
import { Link } from "react-router-dom";
import Icon from "../global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import ReactWhatsapp from "react-whatsapp";

const ModalHeader = ({ state, closeModal }) => {
  return (
    <>
      {state && (
        <div className="modalheader__container">
          <div className="modalheader__background_container" />
          <div className="modalheader__cardContainer">
            <a
              href="https://www.facebook.com/profile.php?id=100063623920462"
              target="_blank"
              rel="noreferrer"
            >
              <div className="modalheader__item">
                <h2>Facebook</h2>
                <Icon css="modalheader__icon" icon={faFacebookF} />
              </div>
            </a>
            <a
              href="https://www.instagram.com/drinking.cba/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="modalheader__item">
                <h2>Instagram</h2>
                <Icon css="modalheader__icon" icon={faInstagram} />
              </div>
            </a>
            <ReactWhatsapp
              className="header__whatsapp"
              number="+5493513582675"
              message="Hola! Me gustaría saber el precio de"
            >
              <div className="modalheader__item">
                <h2>Whatsapp</h2>
                <Icon css="modalheader__icon" icon={faWhatsapp} />
              </div>
            </ReactWhatsapp>

            <Link onClick={() => closeModal(false)}>
              <Icon icon={faXmark} css="modalheader__close" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalHeader;
