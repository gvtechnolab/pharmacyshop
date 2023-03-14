import {
  ADDTOWISHLIST,
  REMOVEFROMWISHLIST,
  CLEARWISHLIST,
  ADDTOCART,
  REMOVEFROMCART,
  CLEARCART,
} from "./actions";

// wishlist
export const addtowishlist = (item) => {
  return {
    type: ADDTOWISHLIST,
    payload: item,
  };
};

export const removefromwishlist = (item) => {
  return {
    type: REMOVEFROMWISHLIST,
    payload: item,
  };
};

export const clearwishlist = () => {
  return {
    type: CLEARWISHLIST,
  };
};

// cart
export const addtocart = (item) => {
  return {
    type: ADDTOCART,
    payload: item,
  };
};

export const removefromcart = (item) => {
  console.log("action index", item);
  return {
    type: REMOVEFROMCART,
    payload: item,
  };
};

export const clearcart = () => {
  return {
    type: CLEARCART,
  };
};
