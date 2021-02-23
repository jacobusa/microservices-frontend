import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav
      id="sidebarMenu"
      className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
    >
      <div className="sidebar-sticky pt-3">
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Products
            </a>
            <Link to="/" className="m-4 btn btn-sm btn-primary">
              To Main App
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
