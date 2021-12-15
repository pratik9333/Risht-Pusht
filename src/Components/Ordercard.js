import React from "react";

const Ordercard = ({
  orderid,
  datetime,
  buyername,
  purchasedworth,
  orders,
}) => {
  return (
    <>
      <div className="Card mt-5 d-flex flex-column">
        <div className="order-info d-flex flex-row flex-md-row flex-sm-column justify-content-between align-items-baseline">
          <div className="order-id">
            <span>Order ID : </span>
            <span className="o_id">{orderid}</span>
          </div>
          <div className="date-time">
            <p>{datetime}</p>
          </div>
        </div>
        <div className="more-info px-3 mt-5  d-flex flex-column flex-lg-row flex-md-row">
          <div className="text text-start">
            <h4>Buyer’s Name : {buyername}</h4>
          </div>
          <div className="text">
            <h4>Purchsed worth : ₹ {purchasedworth}</h4>
          </div>
          <div className="text border-0 text-end">
            <h4>Items : {orders}</h4>
          </div>
        </div>
        <div className="button-details mt-5">
          <span>
            More Details <i class="fas fa-chevron-right"></i>
          </span>
        </div>
      </div>
    </>
  );
};

export default Ordercard;
