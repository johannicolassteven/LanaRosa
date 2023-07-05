import React from "react";
import styled from "styled-components";
import { services } from "../Utils/constants";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom dessins <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, title, text , icon} = service;
            return (
              <article className="service" key={id}>
                <h4>{title}</h4>
                <span>{icon}</span>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    margin: 0 2rem;
  }

  h3,
  h4 {
    color: black;
  }
  padding: 5rem 0;

  background: #5eb6b932;

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: black;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
  
    background: #ab755f99;
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: 50px;
    p {
      margin-top: -2rem;
      display: flex;
      color: black;
    }
  }
  span {
    width: 10rem;
    height: 10rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    border-radius: 50%;
    background:#ab755f41;
  }

  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;