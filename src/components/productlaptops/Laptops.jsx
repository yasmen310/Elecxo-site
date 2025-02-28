import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favoriteSlice";

const Laptops = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const favoriteItems = useSelector((state) => state.favorites.items);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/laptops")
      .then((response) => {
        setProducts(response.data.products.slice(0, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching laptops:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const savedFavorites = sessionStorage.getItem("favorites");
    if (savedFavorites) {
      const parsedFavorites = JSON.parse(savedFavorites);
      parsedFavorites.forEach((item) => dispatch(addToFavorites(item)));
    }
  }, [dispatch]);

  useEffect(() => {
    sessionStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const toggleFavorite = (product) => {
    const isFavorite = favoriteItems.some((item) => item.id === product.id);

    setAlertMessage(
      isFavorite
        ? `${product.title} has been removed from favorites!`
        : `${product.title} has been added to favorites!`
    );
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);

    if (isFavorite) {
      dispatch(removeFromFavorites(product.id));
    } else {
      dispatch(
        addToFavorites({
          id: product.id,
          title: product.title,
          price: product.price,
          image:
            product.thumbnail ||
            (product.images?.length ? product.images[0] : ""),
        })
      );
    }
  };

  if (loading) {
    return (
      <div className="text-center my-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Container className="mt-4">
      {showAlert && (
        <Alert
          variant="success"
          className="text-center"
          onClose={() => setShowAlert(false)}
          dismissible
        >
          {alertMessage}
        </Alert>
      )}
      <Row className="g-4">
        {products.map((product) => {
            const isFavorite = favoriteItems.some((item) => item.id === product.id);

          return (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 product-card">
                <FaStar
                  className="position-absolute top-0 end-0 m-2"
                  size={24}
                  color={isFavorite ? "red" : "gray"}
                  style={{ cursor: "pointer" }}
                  onClick={() => toggleFavorite(product)}
                />
                <Link to={`/product/${product.id}`}>
                  <Card.Img
                    variant="top"
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                </Link>
                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{product.title}</Card.Title>
                  <p className="text-primary fw-bold">${product.price}</p>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Laptops;
