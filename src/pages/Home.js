import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import { Product } from "../Components/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { productListActon } from "../action/productAction";
export const Home = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;

  useEffect(() => {
    dispatch(productListActon());
  }, [dispatch]);
  return (
    <div>
      <h1>محصولات</h1>
      {loading ? (
        <h2>در حال دریافت...</h2>
      ) : (
        <Row>
          {products.map((item) => {
            return (
              <Col key={item._id} sm={12} md={6} lg={4}>
                <h3>
                  <Product product={item} />
                </h3>
              </Col>
            );
          })}
        </Row>
      )}
    </div>
  );
};
