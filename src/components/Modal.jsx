import React from "react";
import "./Modal.css";

function Modal({ isOpen, onClose }) {
  return (
    isOpen && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <div className="about">
            <div className="steps">
              <h2>Como Funciona Nossa Plataforma?</h2>

              <p>
                Nossa plataforma foi projetada para facilitar a conexão entre
                voluntários e projetos que precisam de apoio. Aqui está como
                você pode começar:
              </p>

              <div className="step-box">
                <div className="step-num">
                  <h4>1</h4>
                  <h3>Explore Projetos Voluntários</h3>
                </div>

                <p>
                  Navegue em nossa lista de projetos voluntários em várias
                  categorias, desde educação e saúde até conservação ambiental e
                  ajuda humanitária. Leia sobre os projetos, suas missões e as
                  áreas onde precisam de voluntários.
                </p>
              </div>

              <div className="step-box">
                <div className="step-num">
                  <h4>2</h4>
                  <h3>Inscreva-se como Voluntário</h3>
                </div>

                <p>
                  Encontrou um projeto que lhe interessa? Basta clicar em
                  "Inscrever-se como Voluntário" e preencher um breve
                  formulário. A organização do projeto entrará em contato com
                  você para discutir detalhes adicionais.
                </p>
              </div>

              <div className="step-box">
                <div className="step-num">
                  <h4>3</h4>
                  <h3>Contribua de Outras Formas</h3>
                </div>

                <p>
                  Se você não pode se comprometer como voluntário, ainda pode
                  fazer a diferença. Muitos projetos aceitam doações em dinheiro
                  ou recursos. Explore maneiras alternativas de apoiar as causas
                  que você ama.
                </p>
              </div>

              <div className="step-box">
                <div className="step-num">
                  <h4>4</h4>
                  <h3>Explore Nossas Oficinas</h3>
                </div>

                <p>
                  Dê uma olhada em nossa lista diversificada de oficinas,
                  abrangendo uma ampla gama de tópicos e habilidades. Desde
                  oficinas de arte e culinária até workshops de empreendedorismo e
                  desenvolvimento pessoal, há algo para todos.
                </p>
              </div>

              <div className="step-box">
                <div className="step-num">
                  <h4>5</h4>
                  <h3>Aprenda, Cresça e Conecte-se</h3>
                </div>

                <p>
                  Durante as oficinas, você terá a oportunidade de aprender com
                  especialistas no assunto e colaborar com outros participantes
                  que compartilham seu interesse.
                </p>
              </div>

              <h2>Junte-se a Nós e Faça a Diferença</h2>
              <p>
                Estamos empolgados em tê-lo a bordo enquanto nos esforçamos para
                tornar o mundo um lugar melhor, oferecendo oportunidades para
                aprender, crescer e contribuir. Explore os projetos e oficinas,
                inscreva-se como voluntário ou participante, e comece sua
                jornada de impacto e aprendizado conosco hoje mesmo! Sua paixão
                e dedicação podem fazer toda a diferença.
              </p>

              <img src="https://i.ibb.co/Px31zBX/Vector-Dark.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
