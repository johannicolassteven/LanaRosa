import React from 'react'

import "bootstrap/dist/css/bootstrap.css";


const Product = ({imagen1, name, precio}) => {
  return  <><div className="card" style={{"width": "10rem"}}>
  <img src={imagen1} className="card-img-top" alt={name}></img>
  <div className="card-body">
    <h5 className="card-title">{name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">{precio}</a>
  </div>
</div></>
};


export default Product;
