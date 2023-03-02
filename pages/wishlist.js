import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import PageHead from "../src/components/PageHead/PageHead";
import { useSelector, useDispatch } from "react-redux";

const wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <PageHead name="Wishlist" />
      <Container>
        page title
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2}>
            {wishlist?.length > 0 &&
              wishlist?.map((item, key) => <d>product {item}</d>)}
          </Stack>
        </Box>
      </Container>
    </>
  );
};

export default wishlist;
