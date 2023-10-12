import React, { useState } from "react";
import "./Home.css";
import { MagnifyingGlass, MapPin, CaretRight } from "phosphor-react";
import Card from "../components/Card";
import Modal from "../components/Modal";
import CardOn from "../components/CardOn";
import ModalAction from "../components/ModalAction";
import CardInst from "../components/CardInst";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalActionOpen, setIsModalActionOpen] = useState(false);

  const [modalTitle, setModalTitle] = useState("");
  const [modalImg, setModalImg] = useState("");
  const [modalDate, setModalDate] = useState("");
  const [modalLoc, setModalLoc] = useState("");
  const [modalMonth, setModalMonth] = useState("");
  const [modalDesc, setModalDesc] = useState("");
  const [modalInstLogo, setModalInstLogo] = useState("");
  const [modalInst, setModalInst] = useState("");

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeModalAction = () => {
    setIsModalActionOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <ModalAction
        isOpen={isModalActionOpen}
        onClose={closeModalAction}
        modalTitle={modalTitle}
        modalImg={modalImg}
        modalDate={modalDate}
        modalLoc={modalLoc}
        modalMonth={modalMonth}
        modalDesc={modalDesc}
        modalInstLogo={modalInstLogo}
        modalInst={modalInst}
      />
      <header>
        <div className="head">
          <div className="logo">
            <img src="../src/assets/Vector.svg" alt="" />
            <h1>abrace</h1>
          </div>
          <div className="search-box">
            <input type="text" placeholder="Procure projetos perto de você" />
            <MagnifyingGlass size={32} color="#000" />
          </div>
        </div>

        <div className="more">
          <h3>
            Seja um agente de transformação em sua vizinhança.
            <br /> Encontre projetos próximos e abrace uma causa!
          </h3>

          <button onClick={openModal}>Saiba Mais</button>
        </div>
      </header>

      <main>
        <div className="actions">
          <h2>Projetos em destaque</h2>

          <div className="actions-box">
            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Atletas do Futuro");
                setModalImg(
                  "../assets/serge-kutuzov-_FPy-FUndok-unsplash.jpg"
                );
                setModalDate("13 a 15");
                setModalLoc("Bugio");
                setModalMonth("Outubro");
                setModalInst("Associação Educação em Movimento");
                setModalInstLogo(
                  "https://t4.ftcdn.net/jpg/04/39/50/43/360_F_439504373_11n5huxPHDCsECv6PbjIxFB9gqHil1dc.jpg"
                );
                setModalDesc(
                  "O projeto social Atletas do Futuro é uma iniciativa que visa proporcionar oportunidades de desenvolvimento físico, emocional e social para crianças da nossa comunidade. Através de oficinas esportivas, buscamos não apenas promover um estilo de vida ativo, mas também cultivar valores como trabalho em equipe, disciplina, respeito e autoconfiança, preparando essas crianças para um futuro brilhante."
                );
              }}
            >
              <Card
                cardDate={"13 a 15"}
                cardMonth={"Out"}
                cardTitle={"Atletas do Futuro"}
                cardLoc={"Bugio"}
                image={"../assets/serge-kutuzov-_FPy-FUndok-unsplash.jpg"}
              />
            </a>

            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Oficina Arte e Cultura");
                setModalImg("./src/assets/oficinaartes.jpg");
                setModalDate("18 a 22");
                setModalLoc("Santa Maria");
                setModalMonth("Outubro");
                setModalInst("Fundação Renovar");
                setModalInstLogo(
                  "https://img.freepik.com/vetores-premium/logotipo-infantil-com-design-de-mao-de-pessoas_579179-2339.jpg"
                );
                setModalDesc(
                  "O projeto Oficina Arte e Cultura é uma oportunidade única para crianças e jovens explorarem o mundo da arte e da cultura, enquanto desenvolvem habilidades vitais para o seu crescimento pessoal. Através desse projeto, esperamos inspirar futuros artistas, líderes e cidadãos conscientes, que contribuirão para uma sociedade mais inclusiva e criativa. Com o apoio da comunidade, educadores dedicados e artistas voluntários, estamos moldando um futuro mais colorido e culturalmente enriquecido para nossas crianças e jovens."
                );
              }}
            >
              <Card
                cardDate={"18 a 22"}
                cardMonth={"Out"}
                cardTitle={"Oficina Arte e Cultura"}
                cardLoc={"Santa Maria"}
                image={"../assets/oficinaartes.jpg"}
              />
            </a>

            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Salvando Patinhas");
                setModalImg("../assets/catanddog.jpg");
                setModalDate("30");
                setModalLoc("Grageru");
                setModalMonth("Outubro");
                setModalInst("Centro de Acolhimento e Proteção Animal");
                setModalInstLogo(
                  "https://cdn.dribbble.com/users/113499/screenshots/7671703/media/1c281ce5c275a0f177fe4f3564638af8.png"
                );
                setModalDesc(
                  "O projeto social Salvando Patinhas é uma iniciativa amorosa e compassiva dedicada a melhorar a qualidade de vida de animais de rua e residentes em abrigos. Nosso objetivo é arrecadar alimentos, medicamentos e cuidados essenciais para animais abandonados e carentes, proporcionando-lhes uma segunda chance para uma vida mais digna e saudável."
                );
              }}
            >
              <Card
                cardDate={"30"}
                cardMonth={"Out"}
                cardTitle={"Salvando Patinhas"}
                cardLoc={"Grageru"}
                image={"../assets/catanddog.jpg"}
              />
            </a>

            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Cozinha da Oportunidade");
                setModalImg("../assets/cooking.jpg");
                setModalDate("13 a 17");
                setModalLoc("Getúlio Vargas");
                setModalMonth("Novembro");
                setModalInst(
                  "Centro de Desenvolvimento Profissional Brilliance"
                );
                setModalInstLogo(
                  "https://st2.depositphotos.com/1010751/6195/v/950/depositphotos_61952259-stock-illustration-teamwork-three-people-logo.jpg"
                );
                setModalDesc(
                  "Cozinha da Oportunidade é uma iniciativa inspiradora que combina a paixão pela culinária com o espírito empreendedor, proporcionando às pessoas a oportunidade de aprender habilidades culinárias e de negócios. Nosso objetivo é capacitar indivíduos, especialmente aqueles em situação de vulnerabilidade social, para se tornarem chefs empreendedores e construir um futuro sustentável por meio da gastronomia."
                );
              }}
            >
              <Card
                cardDate={"13 a 17"}
                cardMonth={"Nov"}
                cardTitle={"Cozinha da Oportunidade"}
                cardLoc={"Getúlio Vargas"}
                image={"../assets/cooking.jpg"}
              />
            </a>

            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Arco-Íris da Esperança");
                setModalImg("../assets/lovewins.jpg");
                setModalDate("06");
                setModalLoc("Centro");
                setModalMonth("Novembro");
                setModalInst("Instituto Aliança pela Igualdade");
                setModalInstLogo(
                  "https://media.istockphoto.com/id/1363566694/vector/humanitarian-assistance-love-teamwork-voluntary-family-vector-icon-template.jpg?s=612x612&w=0&k=20&c=o1U50c-bdABqNU0axWjEN8Xuz3ErziZ77oVcgbgvs48="
                );
                setModalDesc(
                  "O projeto Arco-Íris da Esperança é um farol de amor e esperança para pessoas LGBTQ+ em situação de rua e aquelas que enfrentam desafios de saúde. Ao fornecer cuidados abrangentes e apoio emocional, estamos criando um ambiente onde todos possam florescer e encontrar a esperança e a aceitação que merecem. Com o apoio de voluntários comprometidos, profissionais de saúde e parceiros da comunidade, estamos trabalhando para tornar o mundo mais acolhedor e inclusivo para todos, independentemente de sua orientação sexual ou identidade de gênero."
                );
              }}
            >
              <Card
                cardDate={"06"}
                cardMonth={"Nov"}
                cardTitle={"Arco-Íris da Esperança"}
                cardLoc={"Centro"}
                image={"../assets/lovewins.jpg"}
              />
            </a>

            <a
              onClick={() => {
                setIsModalActionOpen(true);
                setModalTitle("Projeto Rua Limpa");
                setModalImg("../assets/street.jpg");
                setModalDate("11");
                setModalLoc("Porto Dantas");
                setModalMonth("Novembro");
                setModalInst("Organização Missão Esperança");
                setModalInstLogo(
                  "https://img.freepik.com/premium-vector/nature-tree-shoot-logo-vector-design-by-hand-tree-logo-vector-symbol-illustration-design_629573-229.jpg"
                );
                setModalDesc(
                  "O projeto Arco-Íris da Esperança é um farol de amor e esperança para pessoas LGBTQ+ em situação de rua e aquelas que enfrentam desafios de saúde. Ao fornecer cuidados abrangentes e apoio emocional, estamos criando um ambiente onde todos possam florescer e encontrar a esperança e a aceitação que merecem. Com o apoio de voluntários comprometidos, profissionais de saúde e parceiros da comunidade, estamos trabalhando para tornar o mundo mais acolhedor e inclusivo para todos, independentemente de sua orientação sexual ou identidade de gênero."
                );
              }}
            >
              <Card
                cardDate={"11"}
                cardMonth={"Nov"}
                cardTitle={"Projeto Rua Limpa"}
                cardLoc={"Porto Dantas"}
                image={"../assets/street.jpg"}
              />
            </a>
          </div>
        </div>
      </main>

      <section className="righton">
        <h2>Ações em andamento</h2>

        <div className="righton-box">
          <a
            onClick={() => {
              setIsModalActionOpen(true);
              setModalTitle("Guarda-Roupa Solidário");
              setModalImg("../assets/donationclothes.jpg");
              setModalDate("🟢");
              setModalLoc("Japãozinho");
              setModalMonth("Em Andamento");
              setModalInst("Associação de Apoio à Vida");
              setModalInstLogo(
                "https://img.myloview.com/stickers/love-and-care-logo-icon-heart-with-hand-shape-logo-design-400-171363956.jpg"
              );
              setModalDesc(
                "Guarda-Roupa Solidário é uma iniciativa calorosa e prática que tem como objetivo fornecer roupas e acessórios essenciais para pessoas em situação de vulnerabilidade social. Através da doação e redistribuição de roupas, estamos tornando a vida mais confortável e digna para indivíduos e famílias em necessidade. Com o apoio da comunidade, voluntários e parcerias locais, estamos aquecendo os corações e vestindo a esperança daqueles que precisam, construindo uma sociedade mais solidária e consciente."
              );
            }}
          >
            <CardOn
              cardTitle={"Guarda-Roupa Solidário"}
              cardLoc={"Japãozinho"}
              image={"../assets/donationclothes.jpg"}
            />
          </a>

          <a
            onClick={() => {
              setIsModalActionOpen(true);
              setModalTitle("Revitalização do Rio Poxim");
              setModalImg("../assets/cleaningriver.jpg");
              setModalDate("🟢");
              setModalLoc("Farolândia");
              setModalMonth("Em Andamento");
              setModalInst("Organização Missão Esperança");
              setModalInstLogo(
                "https://img.freepik.com/premium-vector/nature-tree-shoot-logo-vector-design-by-hand-tree-logo-vector-symbol-illustration-design_629573-229.jpg"
              );
              setModalDesc(
                "O projeto de Revitalização do Rio Poxim é um esforço coletivo para recuperar e preservar um importante recurso natural em nossa região. Ao envolver a comunidade, promover a conscientização e implementar práticas sustentáveis, estamos trabalhando para restaurar a saúde do rio e criar um ambiente mais saudável e próspero para todos. Com o apoio de voluntários dedicados, especialistas em conservação ambiental e parcerias locais, estamos construindo um futuro mais sustentável e equilibrado para nossa comunidade e o meio ambiente."
              );
            }}
          >
            <CardOn
              cardTitle={"Revitalização do Rio Poxim"}
              cardLoc={"Farolândia"}
              image={"../assets/cleaningriver.jpg"}
            />
          </a>

          <a
            onClick={() => {
              setIsModalActionOpen(true);
              setModalTitle("Projeto Mãos Que Alimentam");
              setModalImg("../assets/fooding.jpg");
              setModalDate("🟢");
              setModalLoc("Centro");
              setModalMonth("Em Andamento");
              setModalInst("Associação de Apoio à Vida");
              setModalInstLogo(
                "https://img.myloview.com/stickers/love-and-care-logo-icon-heart-with-hand-shape-logo-design-400-171363956.jpg"
              );
              setModalDesc(
                "O projeto Mãos que Alimentam é um gesto de compaixão que visa garantir que ninguém na comunidade passe fome. Ao fornecer refeições e cestas básicas, estamos não apenas satisfazendo necessidades imediatas, mas também promovendo um ambiente de apoio e solidariedade. Com a ajuda de voluntários dedicados, doadores e a participação ativa da comunidade, estamos trabalhando para fazer uma diferença significativa na vida daqueles que mais precisam, oferecendo uma refeição e uma mão estendida de esperança."
              );
            }}
          >
            <CardOn
              cardTitle={"Projeto Mãos Que Alimentam"}
              cardLoc={"Centro"}
              image={"../assets/fooding.jpg"}
            />
          </a>

          <a
            onClick={() => {
              setIsModalActionOpen(true);
              setModalTitle("Cine Comunidade");
              setModalImg("../assets/cinema.jpg");
              setModalDate("🟢");
              setModalLoc("Santos Dumont");
              setModalMonth("Em Andamento");
              setModalInst("Fundação Renovar");
              setModalInstLogo(
                "https://img.freepik.com/vetores-premium/logotipo-infantil-com-design-de-mao-de-pessoas_579179-2339.jpg"
              );
              setModalDesc(
                "O Cine Comunidade é uma iniciativa que visa trazer cultura, entretenimento e conexão para nossa comunidade do cinema. Ao proporcionar acesso ao cinema e eventos relacionados, estamos enriquecendo as vidas dos moradores locais, oferecendo oportunidades para aprender, se divertir e apreciar a diversidade cultural por meio da tela grande. Com o apoio de toda população estaremos construindo uma comunidade mais unida, culta e conectada."
              );
            }}
          >
            <CardOn
              cardTitle={"Cine Comunidade"}
              cardLoc={"Santos Dumont"}
              image={"../assets/cinema.jpg"}
            />
          </a>
        </div>
      </section>

      <section className="whotohelp">
        <h2>Saiba Quem Ajudar</h2>
        <p className="desc">
          Reunimos uma lista de fundações incríveis que precisam da sua ajuda:
        </p>

        <div className="whotohelp-box">
          <CardInst
            image={"https://www.tamar.org.br/imagens/logo_tamar.jpg"}
            cardInstTitle={"Projeto Tamar"}
            cardInstDesc={
              "A Fundação Projeto Tamar atua no litoral brasileiro desde a década de 80 com a missão de promover a recuperação das tartarugas marinhas, através de ações de pesquisa, conservação e inclusão social."
            }
            link={"https://www.tamar.org.br/noticia1.php?cod=1019"}
          />

          <CardInst
            image={
              "https://site.hyb.com.br/dados/base/gacc/meu_site/gacc-noticia1.jpg"
            }
            cardInstTitle={"GACC"}
            cardInstDesc={
              "Humanizar o tratamento de crianças e adolescentes com câncer e doenças hematológicas, oferecendo assistência biopsicossocial e material, garantindo a eles o direito a saúde e a vida."
            }
            link={"https://www.gacc-se.org.br/"}
          />

          <CardInst
            image={
              "https://avosos.org.br/wp-content/uploads/2018/04/marca-avosos-numeros.png"
            }
            cardInstTitle={"AVOSOS"}
            cardInstDesc={
              "Atuar na assistência às crianças e adolescentes com câncer e doenças hematológicas crônicas de Sergipe, criando e articulando soluções em uma rede de ações, visando contribuir de forma integral para a melhoria do tratamento e da qualidade de vida desses pacientes."
            }
            link={"https://avosos.org.br/"}
          />

          <CardInst
            image={
              "https://static.wixstatic.com/media/3f1abc_26c9b5517e9f40c0b8332ee55368a182.jpg/v1/fill/w_237,h_235,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/3f1abc_26c9b5517e9f40c0b8332ee55368a182.jpg"
            }
            cardInstTitle={"SAME"}
            cardInstDesc={
              "Promover a melhoria da qualidade de vida e presevar a dignidade da pessoa idosa."
            }
            link={"https://samelardeidosos.wixsite.com/same"}
          />

          <CardInst
            image={
              "https://www.ciras.org.br/system/mlkWxJhNMRE9Rd8D0x7eQhkxsAuXFLFtUy04JRrEzBGD07N-Fa5uCfogPiuZ57I15nITzNWWnao2nEsCGRlKFQ/themes/base/config/files/202011191343_66_logo-ciras-site-png.png"
            }
            cardInstTitle={"CIRAS"}
            cardInstDesc={
              "Atender com excelência e de forma gratuita pessoas de baixa renda com deficiência física, mental ou motora, para que tenha uma vida digna e independente."
            }
            link={"https://www.ciras.org.br/"}
          />
        </div>
      </section>

      <footer>
        <div className="logo">
          <img src="../assets/Vector.svg" alt="" />
          <h1>abrace</h1>
        </div>
        <p>© 2023</p>
      </footer>
    </>
  );
}
