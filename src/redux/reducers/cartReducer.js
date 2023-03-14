import {
  ADDTOCART,
  REMOVEFROMCART,
  CLEARCART,
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
    case REMOVEFROMCART:
      const one = state?.filter((item) => item !== action?.payload);
      return one;
    default:
      return state;
  }
};

export default reducer;
