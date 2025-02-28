import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
} from "../../redux/cartSlice";
import { Button, Table, Container } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";
import {Link} from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Container className="mt-4">
      <h2
        className="text-center mb-4 fw-bold p-3 shadow-sm"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
          borderRadius: "12px",
          padding: "12px 24px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "200px",
            background:
              "linear-gradient(0deg, rgb(190, 194, 194) 0%, rgb(254, 255, 255) 100%)",
            padding: "16px 2px",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          Your cart is empty
        </p>
      ) : (
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.title} width="50" />
                  </td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => dispatch(decreaseQuantity(item.id))}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={() => dispatch(increaseQuantity(item.id))}
                    >
                      +
                    </Button>
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromCart(item.id))}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <h4 className="mt-3">
            Total Price:{" "}
            <span className="text-primary">${totalPrice.toFixed(2)}</span> |
            Total Quantity:{" "}
            <span className="text-success">{totalQuantity}</span>
          </h4>

          <Button
            variant="warning"
            className="mx-3"
            onClick={() => dispatch(clearCart())}
          >
            Clear Cart
          </Button>
        </>
      )}

     <br/>
      <Link to="/">
        <Button variant="outline-primary" className="mt-5">
          <BsArrowLeft size={20} /> Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default CartPage;
