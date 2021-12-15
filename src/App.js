import React, { useState, useReducer, useLayoutEffect } from "react";

import "./App.css";

import { Route, Routes } from "react-router-dom";

//Components
import Nav from "./Components/Nav";

//Pages
import Adminpanel from "./Pages/Adminpanel";
import Orders from "./Pages/Orders";
import Category from "./Pages/Category";
import Item from "./Pages/Item";
import Statistics from "./Pages/Statistics";
import SubCategory from "./Pages/SubCategory";

import { AppContext } from "./Context/Context";
import { reducer, initialState } from "./Context/reducer";

//API
import { getAllCategory, getAllSubCategory } from "./API/Category";
import { getOrders } from "./API/Order";

//Actions
import { ADD_CATEGORY, ADD_ORDERS, ADD_PRODUCTS } from "./Context/action.types";
import { getAllProducts } from "./API/Product";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading } = state;

  useLayoutEffect(() => {
    //getAllCategory
    getAllCategory().then((response) => {
      if (response.err) {
        return alert("Cannot Fetch Categories");
      } else {
        dispatch({ type: ADD_CATEGORY, payload: response });
      }
    });

    //getOrders
    getOrders().then((response) => {
      if (response.err) {
        return alert("Orders cannot be fetched");
      } else {
        dispatch({ type: ADD_ORDERS, payload: response });
      }
    });

    getAllProducts().then((response) => {
      if (response.err) {
        return alert("Orders cannot be fetched");
      } else {
        dispatch({ type: ADD_PRODUCTS, payload: response });
      }
    });
  }, [loading]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Adminpanel />} />
          <Route path="orders" element={<Orders />} />
          <Route path="category" element={<Category />} />
          <Route path="item" element={<Item />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="subcategory/:categoryid" element={<SubCategory />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
