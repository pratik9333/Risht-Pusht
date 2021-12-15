import React from "react";

import { Link } from "react-router-dom";

const Categorycard = ({
  img,
  name,
  onDelete,
  categoryid,
  EditHandler,
  Description,
  short_description,
  price,
}) => {
  return (
    <div>
      <div className="category-card text-center d-flex flex-column mt-2">
        <div className="delete" style={{ textAlign: "right" }}>
          <span>
            <i
              onClick={() => {
                onDelete(categoryid);
              }}
              style={{ padding: "13px 6px" }}
              className="fas fa-times text-white"
            ></i>
          </span>
        </div>
        <div className="img-block mt-3">
          <Link to={"/subcategory/" + categoryid}>
            <img src={img} className="img-fluid" alt="category" />
          </Link>
        </div>
        <div className="edit mt-4" style={{ textAlign: "right" }}>
          <span>
            <i
              onClick={() => {
                EditHandler(
                  categoryid,
                  name,
                  img,
                  Description,
                  short_description,
                  price
                );
              }}
              style={{ padding: "13px 6px", justifySelf: "end" }}
              className="fas fa-pencil-alt"
            ></i>
          </span>
        </div>
      </div>
      <div className="category-name mt-4">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Categorycard;
