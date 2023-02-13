import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "../global/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Modal = ({ state, title, text, closeModal }) => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {state && (
        <div className="modal__container">
          <div className="modal__background_container" />
          <div className="modal__cardContainer">
            <h2 className="modal__title">{title}</h2>
            <p className="modal__text">{text}</p>
            <Link onClick={() => closeModal(false)}>
              <Icon icon={faXmark} css="modal__icon" />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
