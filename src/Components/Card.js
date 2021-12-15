import React from "react";

const Admincard = ({ logo, name, p1, p2 }) => {
  return (
    <div className="Card">
      {!p1 ? (
        <>
          {" "}
          <div className="logo">
            <img src={logo} className="img-fluid" alt={name} />
          </div>
          <div className="name">{name}</div>{" "}
        </>
      ) : (
        <div className="d-flex flex-column">
          <div className="number-admin-card">
            <h2
              className="font-weight-bold"
              style={{ fontWeight: "bold", fontSize: "38px" }}
            >
              {p1}
            </h2>
          </div>
          <div className="text-order-card mt-3" style={{ fontWeight: "500" }}>
            {p2}
          </div>
          <div className="viewmore mt-3">
            <h1
              style={{
                color: "#2C6975",
                fontSize: "35px",
                fontWeight: "800",
                textTransform: "uppercase",
              }}
            >
              View More
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admincard;
