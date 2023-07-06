import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Carousel = () => {
  return (
    <Wrapper>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <Link to="/products">
              <img
                src="https://i.ibb.co/s6gThXB/Negro1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item">
            <Link to="/products">
              <img
                src="https://i.ibb.co/NFZnHcv/Blanco-Top2.jpg"
                className="d-block w-100 img2"
                alt="..."
              />
            </Link>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <Link to="/products">
              <img
                src="https://i.ibb.co/qdYFSsQ/Rosado1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </Link>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="productos-container">
        <Link to="/products">
          {" "}
          <button className="productos">ver todos los productos</button>
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 98%;
  margin: auto;

  .slide {
    display: flex;
  }

  img {
    display: flex;
    height: 20rem;
    object-fit: cover;
    object-position: 0% 80%;
  }

  .img2 {
    object-position: 0% 50%;
  }

  .productos-container {
    display: grid;
    place-items: center;
    min-width: 10rem;
  }

  .productos {
    display: flex;
    padding: 5px 100px;
    background-color: var(--cafe);
    border-color: black;
    margin: 10px;
    border-radius: 10px;
  }
  a:link {
    text-decoration: none;
  }

  .productos:active {
    background-color: #e4a07b;
  }

  @media (min-width: 530px) {
    width: 70%;
    img {
      object-position: 0% 60%;
      min-height: 30rem;
    }
  }

  @media (min-width: 920px) {
    width: 70%;
    img {
      object-position: 0% 60%;
      min-height: 40rem;
    }
  }
`;

export default Carousel;
