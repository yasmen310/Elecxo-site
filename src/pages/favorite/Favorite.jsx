import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../../redux/favoriteSlice";
import { Container, Row, Col, Card ,Button} from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import {Link} from 'react-router-dom';
const Favorite = () => {
  const favoriteItems = useSelector((state) => state.favorites.items);
  const dispatch = useDispatch();

  const removeFavorite = (id) => {
    dispatch(removeFromFavorites(id));

    const updatedFavorites = favoriteItems.filter((item) => item.id !== id);
    sessionStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

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
        My Favorites
      </h2>

      {favoriteItems.length === 0 ? (
        <p
          className="text-center"
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
          No favorite products yet.
        </p>
      ) : (
        <Row className="g-4">
          {favoriteItems.map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <Card className="shadow-sm border-0 favorite-card position-relative">
                <FaStar
                  className="position-absolute top-0 end-0 m-2"
                  size={24}
                  color="red"
                  style={{ cursor: "pointer" }}
                  onClick={() => removeFavorite(item.id)}
                />

                <Card.Img
                  variant="top"
                  src={item.image}
                  alt={item.title}
                  className="rounded"
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <Card.Body className="text-center">
                  <Card.Title className="fw-bold">{item.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
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

export default Favorite;
