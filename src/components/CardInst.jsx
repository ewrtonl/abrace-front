import "./CardInst.css";
import { RadioButton } from "phosphor-react";

export default function CardInst({ cardInstTitle, cardInstDesc, image, link }) {
  return (
    <>
      <div className="cardinst">
        <div className="cardinst-logo">
          <img src={image} alt="" />
        </div>

        <div className="cardinst-info">
          <div>
            <h3>{cardInstTitle}</h3>
            <p>{cardInstDesc}</p>
          </div>

          <a href={link} target="_blank">
            <button>Conhecer</button>
          </a>
        </div>
      </div>
    </>
  );
}
