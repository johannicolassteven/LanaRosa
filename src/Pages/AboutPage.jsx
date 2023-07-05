import React from "react";
import { styled } from "styled-components";
import PageHero from "../components/Hero";

const About = () => {
  return (
    <>
      <PageHero title="Sobre LanaRosa"></PageHero>
      <Wrapper className="pag section-center section">
        <article>
          <div className="title">
            <h2>Nuestra Historia</h2>
            <div className="underline"></div>
          </div>
          <p>
            LanaRosa es un emprendimiento colombiano dedicado al mundo del
            crochet, creado por amantes de las manualidades y el arte de tejer a
            mano. Con una pasión por las fibras naturales y los diseños únicos,
            <br />
            LanaRosa ofrece productos de crochet de alta calidad y
            confeccionados con cuidado. La marca LanaRosa se destaca por su
            compromiso con la artesanía tradicional y su enfoque en la
            sostenibilidad. Utilizando hilos de lana y algodón de origen local,
            LanaRosa se asegura de apoyar a los productores locales y fomentar
            el comercio justo. Además, se esfuerzan por utilizar prácticas
            respetuosas con el medio ambiente en todo el proceso de producción,
            minimizando los residuos y promoviendo el consumo responsable.
          </p>
          <p>
            Cada pieza se crea con atención a los detalles y se diseñan teniendo
            en cuenta las últimas tendencias de la moda. <br />
            LanaRosa se enorgullece de ser una marca que promueve el valor de lo
            hecho a mano y la conexión entre las personas a través de sus
            productos. Cada artículo de LanaRosa cuenta una historia única y
            lleva consigo el cariño y la dedicación de los artesanos que lo
            crearon. En resumen, LanaRosa es un emprendimiento colombiano de
            crochet que se destaca por su compromiso con la artesanía
            tradicional, la sostenibilidad y la calidad. A través de sus
            productos y clases, LanaRosa busca difundir la belleza del crochet y
            promover el valor de lo hecho a mano en la sociedad actual.
          </p>
        <img src="https://i.ibb.co/HTWrpGD/Lanas1.jpg" alt="Lanas1" border="0"/>
        <img src="https://i.ibb.co/fkpnj7q/Logo.jpg" alt="Logo" border="0"/>
        </article>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-width: 390px;
  padding: 1rem 1.5rem;
  img {
    width: 100%;
    display: block;
    border-radius: 15px;
    height: 400px;
    width: auto;
    object-fit: cover;
    margin: 1rem;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }

  @media (min-width: 992px) {
  }
`;

export default About;
