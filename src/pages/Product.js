import React from "react";
import { Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import products from "../products";
export const Product = () => {
  const { id } = useParams();

  const product = products.find((item) => {
    return item._id === id;
  });
  return (
    <div>
      <Link to="/" className="btn btn-ligth">
        بازگشت به صفحه اصلی
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} fliud />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>{product.price}</ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Button className="btn-block" type="button">
                افزودن به سبد خرید
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </div>
  );
};
