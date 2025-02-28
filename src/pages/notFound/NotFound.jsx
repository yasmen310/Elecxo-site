import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center m-auto">
      <h1 className="display-4 text-danger">404</h1>
      <h2 className="mb-4">Page Not Found</h2>
      <p className="lead">Oops! The page you are looking for doesn't exist.</p>
      <Link to="/" className="btn border-primary text-primary mt-3">
        Go to Home
      </Link>
    </Container>
  );
};

export default NotFound;
