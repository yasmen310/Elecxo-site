import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { Spinner, Container, Row, Col, Carousel, Button, Alert } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching product details:", error);
        setLoading(false);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        image: product.thumbnail || product.images[0],
      }));
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 2000);
    }
  };
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: "80vh" }}>
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="mt-4">
      {showAlert && (
        <Alert variant="success" onClose={() => setShowAlert(false)} dismissible>
          Product added to cart successfully!
        </Alert>
      )}

      <Row>
        <Col md={6}>
          <Carousel>
            {product.images.map((image, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={image}
                  alt={`Slide ${index}`}
                  style={{ maxHeight: "400px", objectFit: "cover" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>

        <Col md={6}>
          <h2 className="mb-3">{product.title}</h2>
          <p className="text-muted">{product.description}</p>
          <h4 className="text-primary">Price: ${product.price}</h4>
          
          <Button variant="success" className="mt-3" onClick={handleAddToCart}>
            Add to Cart
          </Button>
          <Link to="/cart" className="btn btn-primary mt-3 ms-3">
            Go to Cart
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
