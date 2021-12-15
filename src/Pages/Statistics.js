import React from "react";
import Admincard from "../Components/Card";

const Statistics = () => {
  return (
    <div className="statistics">
      <h1 className="bold-text">statistics</h1>
      <div className="statistics-cards">
        <div className="row g-4">
          <div className="col-4 mb-3">
            <Admincard p1="351" p2="Total Number of Orders" />
          </div>
          <div className="col-4 mb-3">
            <Admincard p1="₹ 95,721" p2="Total Worth of Sale" />
          </div>
          <div className="col-4 mb-3">
            <Admincard p1="24" p2="Total Orders Cancelled" />
          </div>
          <div className="col-4 mb-3">
            <Admincard p1="327" p2="Total Orders Delivered" />
          </div>
          <div className="col-4 mb-3">
            <Admincard p1="16" p2="Total Products on Sale" />
          </div>
          <div className="col-4 mb-3">
            <Admincard p1="8" p2="Total Vendors Selling" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
