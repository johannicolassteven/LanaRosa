import React from "react";
import { styled } from "styled-components";
import PageHero from "../components/Hero";

const About = () => {
  return (
    <>
      <PageHero title="Sobre LanaRosa"></PageHero>
      <Wrapper className="pag section-center section">
        <div className="title">
          <h2>Nuestra Historia</h2>
        </div>
        <article>
          <p className="uno">
            LanaRosa es un emprendimiento colombiano dedicado al mundo del
            crochet, creado por amantes de las manualidades y el arte de tejer a
            mano. Con una pasión por las fibras naturales y los diseños únicos,
            LanaRosa ofrece productos de crochet de alta calidad y
            confeccionados con cuidado. <br /> La marca LanaRosa se destaca por
            su compromiso con la artesanía tradicional y su enfoque en la
            sostenibilidad.{" "}
          </p>{" "}
          <img
            src="https://i.ibb.co/HTWrpGD/Lanas1.jpg"
            alt="Lanas1"
            border="0"
            className="dos"
          />
          <p className="cuatro">
            Utilizando hilos de lana y algodón de origen local, LanaRosa se
            asegura de apoyar a los productores locales y fomentar el comercio
            justo. Además, se esfuerzan por utilizar prácticas respetuosas con
            el medio ambiente en todo el proceso de producción, minimizando los
            residuos y promoviendo el consumo responsable.
          </p>
          <img
            className="cinco"
            src="https://i.ibb.co/fkpnj7q/Logo.jpg"
            alt="Logo"
            border="0"
          />
          <p className="seis">
            Cada pieza se crea con atención a los detalles y se diseñan teniendo
            en cuenta las últimas tendencias de la moda. LanaRosa se enorgullece
            de ser una marca que promueve el valor de lo hecho a mano y la
            conexión entre las personas a través de sus productos. <br />
            Cada artículo de LanaRosa cuenta una historia única y lleva consigo
            el cariño y la dedicación de los artesanos que lo crearon. En
            resumen, LanaRosa es un emprendimiento colombiano de crochet que se
            destaca por su compromiso con la artesanía tradicional, la
            sostenibilidad y la calidad. A través de sus productos y clases,
            LanaRosa busca difundir la belleza del crochet y promover el valor
            de lo hecho a mano en la sociedad actual.
          </p>
        </article>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.section`
  padding: 1rem 1.5rem;

  article {
    display: grid;
    gap: 4rem;
  }

  img {
    max-width: 40rem;
    max-height: 40rem;
    object-position: 0 80%;
    width: 100%;
    margin: auto;
    border-radius: 10px;
    object-fit: cover;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin: auto;
  }
  .title {
    text-align: center;
    margin-bottom: 5rem;
  }

  @media (min-width: 992px) {
    img {
      max-width: 40rem;
      max-height: 15rem;
      object-position: 100%;
    }
    article {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .uno {
      grid-column: 1/3;
      grid-row: 1/2;
      margin-top: 5rem;
    }
    .dos {
      grid-column: 3/4;
      grid-row: 1/3;
    }

    .cuatro {
      padding: 20px;
      border-radius: 25px;
      background-color: var(--color-secundario);
      grid-column: 1/4;
      grid-row: 3/4;
    }
    .cinco {
      grid-column: 1/2;
      grid-row: 4/5;
    }
    .seis {
      grid-column: 2/4;
      grid-row: 4/5;
    }
  }
`;

export default About;
