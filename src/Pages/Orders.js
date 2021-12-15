import React, { useEffect, useContext } from "react";
import Ordercard from "../Components/Ordercard";
import { ADD_ORDERS, CALL_API } from "../Context/action.types";
import { AppContext } from "../Context/Context";

const Orders = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: CALL_API });
  }, []);

  return (
    <div className="order mb-4 d-flex flex-column">
      <h1 className="bold-text">view all orders</h1>
      {state.Orders.orders
        ? state.Orders.orders.map((order) => (
            <Ordercard
              orderid={order.Order_ID}
              datetime={order.Date}
              buyername={order.Buyers_name}
              purchasedworth={order.Total_price}
              orders={order.Total_price}
            />
          ))
        : "LOADING..."}
    </div>
  );
};

export default Orders;
