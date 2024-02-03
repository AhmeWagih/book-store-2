import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import Image from "react-bootstrap/Image";
import { clear, removeFromCart } from "../ReduxToolKit/Clices/cart-clice";
function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.carts);
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <Container className="my-5 py-5">
      <h1>Welcome to cart</h1>
      <Button
        variant="primary"
        className="mb-3"
        onClick={() => dispatch(clear())}
      >
        Clear Cart
      </Button>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Tilte</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <Image
                  src={product.image}
                  alt={product.tilte}
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <h4>Total Price : {totalPrice.toFixed(2)}$</h4>
    </Container>
  );
}

export default Cart;
