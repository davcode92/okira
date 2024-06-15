import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";

const AdminAddProd = ({add}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //-----------------------------------------------------------------------------------
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("0");
  const [discount, setDiscount] = useState("0");
  //----------------------------------------------------------------------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    if(name && imgUrl && price && discount) {
  const newProd={
    id:Math.random(),
    name:name,
    price:price,
    imgUrl:imgUrl,
    discount: discount,
     };
     add(newProd);
     handleClose();
     setDiscount(0);
     setImgUrl("");
     setName("");
     setPrice(0);
     } else alert("Ajouter toutes les informations demandées");
    };

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter un Produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nom du Produit"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Lien de l'image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Lien"
                autoFocus
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Prix</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Prix"
                autoFocus
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Rabais</Form.Label>
              <Form.Control
                type="Number"
                placeholder="% du rabais"
                autoFocus
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sauvegarder
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminAddProd;
