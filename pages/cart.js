import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import PageHead from "../src/components/PageHead/PageHead";
import PsPageHeading from "../src/components/PsPageHeading/PsPageHeading";
import { Products } from "../src/utills/globalData";

const cart = () => {
  const [cartData, setCartData] = useState([]);

  const cartStore = useSelector((state) => state.cart);

  useEffect(() => {
    const data = Products?.filter((product) => 
      cartStore?.map((cart) => cart?.id === product?.id)
    );
    console.log("data-", data);
  }, [cartStore]);

  return (
    <>
      <PageHead name="Cart" />
      <Container sx={{ marginBottom: "15px" }}>
        <PsPageHeading>
          <h4>Cart</h4>
          <span>{cartStore?.length} Products</span>
        </PsPageHeading>
      </Container>
      <div>
        {cartStore?.length > 0
          ? cartStore?.map((i) => (
              <p>
                id:{i?.id} qty : {i?.qty}
              </p>
            ))
          : "No Cart Item Found!"}
      </div>
    </>
  );
};

export default cart;
