import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background:   #f0bd6baf;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  font-weight: bold;
    text-decoration: none;
  color: #544226;
  a {
    color: #2c2c2c;
    padding: 0.5rem;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #a4a4a4;
  }
`

export default PageHero
