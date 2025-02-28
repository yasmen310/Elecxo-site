import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaShoppingBag } from "react-icons/fa";
import Tablets from "../../components/producttablet/Tablet";
import Laptops from "../../components/productlaptops/Laptops";
import Smartphones from "../../components/productsmartphones/Smartphones";
import Accessories from "../../components/mobilecccessories/Accessories";
import MensWatches from '../../components/productsmenwatches/MensWatches';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Shop = () => {
  const [filterProducts, setFilterProducts] = useState("All");

  const handleFilteration = (e) => {
    setFilterProducts(e.target.value);
  };

  return (
    <Container className="mt-5">
      <div
        className="d-flex justify-content-between align-items-center p-3 shadow-sm rounded"
        style={{
          background: "linear-gradient(135deg, #f8f9fa, #e0e0e0)",
          borderRadius: "12px",
        }}
      >
        <h2 className="fw-bold d-flex align-items-center m-0">
          <FaShoppingBag className="me-2 text-primary" size={30} />
          Welcome to Our Shop
        </h2>

        <select
          className="form-select w-auto"
          style={{
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            background: "#fff",
            cursor: "pointer",
          }}
          onChange={handleFilteration}
          value={filterProducts}
        >
          <option value="All">All</option>
          <option value="Laptops">Laptops</option>
          <option value="Smartphones">Smartphones</option>
          <option value="Accessories">Accessories</option>
          <option value="Tablets">Tablets</option>
          <option value="MensWatches">MensWatches</option>
        </select>
      </div>

      {filterProducts === "All" || filterProducts === "Accessories" ? (
        <Accessories />
      ) : null}
      {filterProducts === "All" || filterProducts === "Laptops" ? (
        <Laptops />
      ) : null}
        {filterProducts === "All" || filterProducts === "MensWatches" ? (
        <MensWatches />
      ) : null}
      {filterProducts === "All" || filterProducts === "Smartphones" ? (
        <Smartphones />
      ) : null}
      {filterProducts === "All" || filterProducts === "Tablets" ? (
        <Tablets />
      ) : null}
      <div className="d-flex justify-content-between">
        <Link to="/">
          <Button variant="outline-primary" className="my-5">
            <BsArrowLeft size={20} /> Back to Home
          </Button>
        </Link>

        <Link to="/favorites">
          <Button variant="outline-danger" className="my-5">
            Go to Favorite <BsArrowRight size={20} />
          </Button>
        </Link>
      </div>
    </Container>
  );
};

export default Shop;
