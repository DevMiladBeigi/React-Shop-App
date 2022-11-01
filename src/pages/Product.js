import React, { useEffect } from "react";
import { Row, Col, Button, Image, ListGroup } from "react-bootstrap";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productDetailActon } from "../action/productAction";

export const Product = ({ match }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product } = productDetail;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(productDetailActon(id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    navigate(`/cart/${id}`);
  };
  return (
    <div>
      <Link to="/" className="btn btn-ligth">
        بازگشت به صفحه اصلی
      </Link>
      {loading ? (
        <h2>در حال دریافت... </h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} fliud />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>{product.price}</ListGroup.Item>
              <ListGroup.Item>{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Button
                  onClick={addToCartHandler}
                  className="btn-block"
                  type="button"
                >
                  افزودن به سبد خرید
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  );
};
