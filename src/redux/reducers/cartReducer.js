import {
  ADDTOCART,
  REMOVEFROMCART,
  CLEARCART,
  DECREMENTFROMCART,
} from "../actionCreators/actions";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDTOCART:
      if (state?.find((item) => item?.id === action?.payload?.id)) {
        return [
          ...state?.map((item) =>
            item?.id === action?.payload?.id
              ? { ...item, qty: item?.qty + action?.payload?.qty }
              : item
          ),
        ];
      } else {
        return [
          ...state,
          {
            id: action?.payload?.id,
            qty: action?.payload?.qty,
          },
        ];
      }
    case DECREMENTFROMCART:
      console.log("=", action?.payload);
      return state;
    case REMOVEFROMCART:
      const data = state?.filter((item) => item?.id !== action?.payload?.id);
      return data;
    default:
      return state;
  }
};

export default reducer;
