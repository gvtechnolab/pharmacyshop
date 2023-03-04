import React from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CancelIcon from "@mui/icons-material/Cancel";
import { useSelector, useDispatch } from "react-redux";
import PageHead from "../src/components/PageHead/PageHead";
import PsPageHeading from "../src/components/PsPageHeading/PsPageHeading";
import PsBox from "../src/components/PsBox/PsBox";
import PsUserpageItem from "../src/components/PsUserpageItem/PsUserpageItem";

const wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  return (
    <>
      <PageHead name="Wishlist" />
      <Container>
        <PsPageHeading>
          <h4>Wishlist</h4>
          <span>0 Products</span>
        </PsPageHeading>
        <PsBox>
          <Stack spacing={3}>
            {wishlist?.length > 0 &&
              wishlist?.map((item, key) => (
                <>
                  <PsUserpageItem>
                    <div>product {item}</div>
                    <div>hm icon</div>
                    <div>
                      <Button variant="text" color="success">
                        Move to cart
                      </Button>
                      <IconButton aria-label="Example">
                        <CancelIcon />
                      </IconButton>
                    </div>
                  </PsUserpageItem>
                  <Divider color="lightgrey" />
                </>
              ))}
          </Stack>
        </PsBox>
      </Container>
    </>
  );
};

export default wishlist;
