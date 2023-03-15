import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import PageHead from "../src/components/PageHead/PageHead";
import PsPageHeading from "../src/components/PsPageHeading/PsPageHeading";
import UserProductItem from "../src/components/UserProductItem/UserProductItem";
import PsBox from "../src/components/PsBox/PsBox";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

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
              <Grid
                item
                xs={8}
                display="flex"
                flexWrap="wrap"
                justifyContent="space-between"
              >
                {cartStore?.length > 0
                  ? cartStore?.map((item, key) => (
                      <>
                        <UserProductItem
                          item={item}
                          productIn="cart"
                          key={key}
                        />
                      </>
                    ))
                  : "No Cart Item Found!"}
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>hi</CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </PsBox>
      </Container>
    </>
  );
};

export default cart;
