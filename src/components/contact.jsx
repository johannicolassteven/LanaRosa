import React from "react";
import styled from "styled-components";
const Contact = () => {
  return (
    <Wrapper>
      <div className="underline"></div>
      <div className="section-center">
        <h3>Join our newsletter and get 20% off</h3>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            sint unde quaerat ratione soluta veniam provident adipisci cumque
            eveniet tempore?
          </p>
          <form className="contact-form">
            <input
              type="email"
              className="form-input"
              placeholder="enter email"
            />
            <button type="submit" className="submit-btn">
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`



  .section-center {
    margin: 0 2rem;
  }

  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .submit-btn {
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: 2px solid blue;
  }
  .form-input {
    padding-left: 10px;
    border-right: none;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  .submit-btn {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    
  }
  .form-input::placeholder {
    color: black;
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--cafe);
    text-transform: capitalize;
    cursor: pointer;
    color: black;
    border-color: black;
  }



  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default Contact;
