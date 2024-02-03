import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../ReduxToolKit/Clices/product-clice";
import { addToCart } from "../ReduxToolKit/Clices/cart-clice";

function Products() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Container className="my-5 py-5">
        <Row>
          {products.map((product) => (
            <Col key={product.id}>
              <Card style={{ width: "18rem" , padding:"10px"}}>
                <Card.Img style={{height:"300px"}} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title >{product.title}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>{product.price}$</Card.Text>
                  <Button variant="primary" onClick={()=>dispatch(addToCart(product))}>Add To Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Products;
