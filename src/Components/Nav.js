import React from "react";

import logo from "../Assets/Images/logo.png";

const Nav = () => {
  return (
    <div className="Navbar">
      <div className="row text-center">
        <div className="col-12">
          <img src={logo} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
