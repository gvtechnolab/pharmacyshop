import {
  ADDTOWISHLIST,
  REMOVEFROMWISHLIST,
  CLEARWISHLIST,
} from "../actionCreators/actions";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOWISHLIST:
      return [...state, action?.payload];
    case REMOVEFROMWISHLIST:
      const one = state?.filter((item) => item !== action?.payload);
      return one;
    default:
      return state;
  }
};

export default reducer;
