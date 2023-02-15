import React from "react";
import Icon from "../../global/Icon";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import video from "../../../assets/video/video-local.mp4";

const TheStore = () => {
  return (
    <section className="thestore__container">
      <div className="thestore__video">
        <video width="100%" loop autoPlay muted>
          <source src={video} />
        </video>
      </div>
      <div class="thestore__dark-overlay">
        <div class="thestore__content">
          <h2>La Tienda</h2>
          <p>
            <Icon css="thestore__icon" icon={faLocationDot} />
            Av. Pueyrredón 191
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheStore;
