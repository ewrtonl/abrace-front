import "./CardOn.css";
import { RadioButton, MapPin } from "phosphor-react";

export default function CardOn({ cardTitle, cardLoc, image }) {
  return (
    <>
      <div className="cardon">
        <div className="cardon-banner">
          <img src={image} alt="" />
        </div>
        <div className="cardon-info">

          <div className="cardon-info-top">

            <div>
              <RadioButton size={20} color="#569b07" />
              <p>Acontecendo agora</p>
            </div>

            <div>
              <MapPin size={16} color="#1b1b1b" />
              <p>{cardLoc}</p>
            </div>

          </div>

          <p className="cardon-title">{cardTitle}</p>
        </div>
      </div>
    </>
  );
}
