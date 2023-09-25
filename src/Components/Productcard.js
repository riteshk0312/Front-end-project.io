import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";


const Productcard = ({id,image,title,item,price}) => {

  const {additem}=useCart();

  return (
    <>
       <Card  className="iscard m-4 " style={{ width: "18rem", height : "500px",borderRadius:"10px" }}>
        <Card.Img variant="top" style={{ width: "15rem",padding:"10px", height: " 250px ", borderRadius:"20px" }} src={image} />
        <Card.Body className="iscard1 " >
          <Card.Title> {title}</Card.Title>
          <Card.Text>
         Rs {price} .NRR
          </Card.Text>
          <NavLink to =  {`/productinfo/${id}` } ><Button className="m-1"  variant="primary">Know more</Button></NavLink> 
          <Button variant="primary" onClick={()=>additem(item)}>Add to Cart</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Productcard;
