import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../redux";
import styles from "./ScrolledProductDetails.module.css";

const ScrolledProductDetails = ({ data }) => {
  const cartStore = useSelector((state) => state.cart);
  const cartData = cartStore?.find((cart) => cart?.id === data?.id);
  const dispatch = useDispatch();
  const { addtocart, decrementfromcart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 350) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <Box className={`${styles.boxWrap} ${visible ? styles.makeItVisible : ""}`}>
      <img src={data?.img} alt={data?.img} className={styles.productImg} />
      <div>
        <Typography variant="overline">{data?.category}</Typography>
        <Typography variant="subtitle1">
          {data?.name.replaceAll("_", " ")}
        </Typography>
        <Typography variant="button">₹{data?.price}</Typography>
      </div>
      <div>
        {cartData?.qty > 0 ? (
          <ButtonGroup
            aria-label="small button group"
            color="success"
            variant="outlined"
            fullWidth
            sx={{ width: "50%" }}
          >
            <Button
              key="remove"
              onClick={() => decrementfromcart({ id: data?.id, qty: 1 })}
            >
              -
            </Button>
            <Button key="qty" disabled>
              {cartData?.qty || 0}
            </Button>
            <Button
              key="add"
              onClick={() => addtocart({ id: data?.id, qty: 1 })}
            >
              +
            </Button>
          </ButtonGroup>
        ) : (
          <Button
            variant="outlined"
            color="success"
            fullWidth
            sx={{ width: "50%" }}
            onClick={() => {
              addtocart({ id: data?.id, qty: 1 });
            }}
          >
            Add to cart
          </Button>
        )}
      </div>
    </Box>
  );
};

export default ScrolledProductDetails;
