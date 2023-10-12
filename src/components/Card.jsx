import "./Card.css";
import { MapPin } from "phosphor-react";

export default function Card({ cardTitle, cardDate, cardMonth, cardLoc, image }) {
  return (
    <>
      <div className="actions-card">
        <img src={image} alt="" />

        <div className="actions-info">
          <div className="actions-loc">
            <MapPin size={20} color="#ffffff" />
            <p>{cardLoc}</p>
          </div>

          <div className="actions-more">
            <p className="actions-status">
              {cardDate} <span>{cardMonth}</span>
            </p>
            <p className="actions-title">{cardTitle}</p>
          </div>
        </div>
      </div>
    </>
  );
}
