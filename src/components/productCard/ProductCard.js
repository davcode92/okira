import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProductCard = ({ el }) => {
  const handleCart =(name) =>alert(`${name} a été ajouté(e) au panier`);
  return (
    <div>
       <Card style={{ width: "18rem",height: "40rem",margin: "25px" }}>
      <Card.Img variant="top" src={el.imgUrl} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text style={{color:"red",textDecoration:"line-through"}}>Ancien Prix:{el.price} FCFA</Card.Text>
        <Card.Text>Rabais:{el.discount}%</Card.Text>
        <Card.Text style={{color:"green"}}>{`Prix Final:${el.price-(el.price*el.discount)/100} FCFA`}</Card.Text>
        <Button variant="primary" onClick={()=>handleCart(el.name)}>Ajouter au Panier</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ProductCard