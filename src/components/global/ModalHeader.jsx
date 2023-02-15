import React from "react";
import { Link } from "react-router-dom";
import Icon from "../global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const ModalHeader = ({ state, closeModal }) => {
  return (
    <>
      {state && (
        <div className="modalheader__container">
          <div className="modalheader__background_container" />
          <div className="modalheader__cardContainer">
            <div className="modalheader__item">
              <h2>Facebook</h2>
              <Icon css="modalheader__icon" icon={faFacebookF} />
            </div>
            <div className="modalheader__item">
              <h2>Instagram</h2>
              <Icon css="modalheader__icon" icon={faInstagram} />
            </div>
            <div className="modalheader__item">
              <h2>Whatsapp</h2>
              <Icon css="modalheader__icon" icon={faWhatsapp} />
            </div>
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
