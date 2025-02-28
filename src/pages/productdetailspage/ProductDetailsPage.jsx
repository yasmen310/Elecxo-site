import { Link } from "react-router-dom";
import ProductDetails from "../../components/productdetails/ProductDetails";
import { Button, Container } from "react-bootstrap";
import { BsArrowLeft } from "react-icons/bs";

const ProductDetailsPage = () => {
  return (
    <Container className="mt-5 py-3">
      <ProductDetails />
      <Link to="/">
        <Button variant="outline-primary" className="mt-5">
        <BsArrowLeft size={20} /> Back to Home
        </Button>
      </Link>
    </Container>
  );
};

export default ProductDetailsPage;
