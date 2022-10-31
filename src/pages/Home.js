import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <h1>محصولات</h1>
      <Row>
        {products.map((item) => {
          return <Col sm={12} md={6} lg={4}><h3>
            {item.name}
            </h3></Col>;
        })}
      </Row>
    </div>
  );
};
