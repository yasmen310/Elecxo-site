import React, { useEffect, useState } from "react";
import axios from "axios";
import "./HeroBanner.css";
import { Link } from "react-router-dom";

const HeroBanner = () => {
  const [banner, setBanner] = useState(null);
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/laptops")
      .then((response) => {
        const laptop = response.data.products[0];
        setBanner({
          title: laptop.title,
          description: laptop.description,
          price: `Starting at $${laptop.price}`,
          button_text: "SHOP NOW",
          image: laptop.thumbnail,
        });
      })
      .catch((error) => console.error("Error fetching banner:", error));
  }, []);

  return (
    <div className="hero-container">
      {banner && (
        <div className="banner">
          <div className="banner-content">
            <h2 className="banner-title">{banner.title}</h2>
            <p className="banner-desc">{banner.description}</p>
            <h3 className="banner-price">{banner.price}</h3>
            <Link to='/shop'>
              <button className="banner-button">{banner.button_text}</button>
            </Link>
          </div>
          <div className="banner-image-container">
            <img
              src={banner.image}
              alt={banner.title}
              className="banner-image"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
