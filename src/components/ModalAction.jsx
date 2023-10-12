import React from "react";
import "./ModalAction.css";
import { MapPin, Heart, HandPalm, UserPlus } from "phosphor-react";

function ModalAction({
  isOpen,
  onClose,
  modalTitle,
  modalImg,
  modalDate,
  modalLoc,
  modalMonth,
  modalDesc,
  modalInstLogo,
  modalInst
}) {
  return (
    isOpen && (
      <div className="modalaction">
        <div className="modalaction-content">
          <div className="action-banner">
            <img src={modalImg} alt="" />
            <h2>{modalTitle}</h2>
          </div>
          <span className="action-close" onClick={onClose}>
            &times;
          </span>
          <div className="action-main">
            <div className="action-info">
              <div className="action-date">
                <p>{modalDate}</p>
                <p>{modalMonth}</p>
              </div>

              <div>
                <MapPin size={30} color="#252628" />
                <p>{modalLoc}</p>
              </div>
            </div>

            <div className="action-desc">
              <p>{modalDesc}</p>
            </div>

            <div className="action-inst">
              <img src={modalInstLogo} alt="" />
              <p>{modalInst}</p>
            </div>

            <div className="action-buttons">
              <button>
                <Heart size={32} color="#252628" />
                Contribuir
              </button>

              <button>
                <HandPalm size={32} color="#252628" />
                Voluntário
              </button>

              <button>
                <UserPlus size={32} color="#252628" />
                Participante
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalAction;
