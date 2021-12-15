import {
  ADD_ORDERS,
  ADD_CATEGORY,
  CALL_API,
  ADD_SUBCATEGORY,
  ADD_CATEGORY_ID,
  ADD_PRODUCTS,
} from "../Context/action.types";

export const initialState = {
  Categories: [],
  Orders: [],
  Products: [],
  SubCategories: [],
  loading: false,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CALL_API: {
      return {
        ...state,
        loading: true,
      };
    }
    case ADD_PRODUCTS: {
      return {
        ...state,
        Products: action.payload,
      };
    }
    case ADD_SUBCATEGORY: {
      return {
        ...state,
        SubCategories: action.payload,
        loading: false,
      };
    }
    case ADD_CATEGORY: {
      return {
        ...state,
        Categories: action.payload,
        loading: false,
      };
    }
    case ADD_ORDERS: {
      return {
        ...state,
        Orders: action.payload,
        loading: false,
      };
    }
  }
};
