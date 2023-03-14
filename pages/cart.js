import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import PageHead from "../src/components/PageHead/PageHead";
import PsPageHeading from "../src/components/PsPageHeading/PsPageHeading";
import UserProductItem from "../src/components/UserProductItem/UserProductItem";
import PsBox from "../src/components/PsBox/PsBox";

const cart = () => {
  const cartStore = useSelector((state) => state.cart);

  return (
    <>
      <PageHead name="Cart" />
      <Container sx={{ marginBottom: "15px" }}>
        <PsPageHeading>
          <h4>Cart</h4>
          <span>{cartStore?.length} Products</span>
        </PsPageHeading>
        <PsBox>
          <Stack spacing={3}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {cartStore?.length > 0
                ? cartStore?.map((item, key) => (
                    <>
                      <Grid item xs={3} key={key}>
                        <UserProductItem item={item} productIn="cart" />
                      </Grid>
                    </>
                  ))
                : "No Cart Item Found!"}
            </Grid>
          </Stack>
        </PsBox>
      </Container>
    </>
  );
};

export default cart;
