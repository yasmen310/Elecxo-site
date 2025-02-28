import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="navbar bg-white shadow-sm p-3" style={{ width: "100%" }}>
      <div className="container-fluid d-flex align-items-center">
        <h3 className="fw-bold text-primary me-3">
          Elec<span className="text-dark">xo</span>
        </h3>
        <FontAwesomeIcon icon={faHome} className="text-muted fs-5 me-2" />

        <div className="flex-grow-1 position-relative">
          <input
            type="text"
            className="form-control"
            placeholder="Search your item"
            style={{ borderRadius: "8px", paddingLeft: "40px" }}
          />
        </div>
        <div className="ms-3 d-flex align-items-center">
          <FontAwesomeIcon icon={faUser} className="text-muted fs-5 me-3" />
          <div className="position-relative">
            <Link to='/cart'>
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-muted fs-5"
            />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
