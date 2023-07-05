
import React from 'react';
import { styled } from 'styled-components';

const Carousel = () => {
  return (
   <Wrapper>
  <div id="carouselExampleIndicators" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://i.ibb.co/s6gThXB/Negro1.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/TYhBkpS/Blanco2.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://i.ibb.co/qdYFSsQ/Rosado1.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   </Wrapper>
  );
}

const Wrapper = styled.section`

width: 95%;
margin:auto;
 
.slide{
  display: flex;
  max-width: 70rem;
}

img{
  display: flex;

  height : 20rem;
  max-width: 70rem;
  object-fit: cover;
}
@media (min-width: 992px) {
margin: 0;
  img{
    display: flex;
    height: 30rem;
    object-fit: scale-down;
  }
  }
`

export default Carousel;