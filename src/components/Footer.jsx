import React from 'react'
import styled from 'styled-components'
import { redes } from "../Utils/constants";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> LanaRosa</span>
      </h5>
      <h5>All rights reserved</h5>
      <div className="redes">
      {redes.map((red) => {
        const {rute, icon, id} = red;
       return  <Link className="red" target='_blank' key={id} to={rute}>{icon}</Link>
      })
      }
      </div>
    </Container>
  )
}

const Container = styled.footer`
  height: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black;
  text-align: center;
  span {
    color: #ab7a5f;
  }
  h5 {
    color: white;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .redes{
    margin: 1rem;
  }

  .red{
    width:1rem;
    margin: 1rem;
    color: white;
  }



  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
