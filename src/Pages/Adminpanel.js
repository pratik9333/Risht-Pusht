import React from "react";

//Components
import Admincard from "../Components/Card";

//logos
import all from "../Assets/Images/Admin Logos/all.svg";
import add from "../Assets/Images/Admin Logos/add.svg";
import additem from "../Assets/Images/Admin Logos/add-item.svg";
import stastictc from "../Assets/Images/Admin Logos/statistc.svg";
import { NavLink } from "react-router-dom";

const Adminpanel = () => {
  return (
    <div className="admin-panel">
      <h1 className="bold-text">Admin Panel</h1>
      <div className="row g-5">
        <div className="col-md-6">
          <NavLink to="/orders">
            <Admincard name="All Orders" logo={all} />
          </NavLink>
        </div>

        <div className="col-md-6">
          <NavLink to="category">
            <Admincard name="Add/Modify/Delete Category" logo={add} />
          </NavLink>
        </div>

        <div className="col-md-6">
          <NavLink to="item">
            <Admincard name="Add/Modify/Delete Items" logo={additem} />
          </NavLink>
        </div>

        <div className="col-md-6">
          <NavLink to="statistics">
            <Admincard name="Statistics" logo={stastictc} />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Adminpanel;
