import React, { useEffect, useState } from "react";
import "./categories.css"; 

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="categories-container">
      <h3 className="category-title">Categories</h3>
      <div className="categories-list">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <span>{category.name}</span>
            <img src={category.image} alt={category.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
