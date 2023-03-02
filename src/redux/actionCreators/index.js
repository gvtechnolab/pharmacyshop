import { ADDTOWISHLIST, REMOVEFROMWISHLIST, CLEARWISHLIST } from "./actions";

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
