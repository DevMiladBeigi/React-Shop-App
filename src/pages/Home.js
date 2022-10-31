import React from "react";
import products from "../products";
import { Row, Col } from "react-bootstrap";
import { Product } from "../Components/Product/Product";
export const Home = () => {
  return (
    <div>
      <h1>محصولات</h1>
      <Row>
        {products.map((item) => {
          return (
            <Col key={item._id} sm={12} md={6} lg={4}>
              <h3>
                <Product product={item}/>
              </h3>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
