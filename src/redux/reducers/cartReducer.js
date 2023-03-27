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
      const data = state?.find((item) => item?.id === action?.payload?.id);
      if (data) {
        if (data?.qty === 1) {
          return [...state?.filter((item) => item?.id !== action?.payload?.id)];
        } else {
          return [
            ...state?.map((item) =>
              item?.id === action?.payload?.id
                ? { ...item, qty: item?.qty - action?.payload?.qty }
                : item
            ),
          ];
        }
      }
      return state;
    case REMOVEFROMCART:
      const removedData = state?.filter(
        (item) => item?.id !== action?.payload?.id
      );
      return removedData;
    default:
      return state;
  }
};

export default reducer;
