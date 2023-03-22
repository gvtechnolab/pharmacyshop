import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import IconButton from "@mui/material/IconButton";
import Bookmark from "@mui/icons-material/Bookmark";
import PageTitle from "../../src/components/PageTitle/PageTitle";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../src/redux";
import { Products } from "../../src/utills/globalData";
import { assetsPrefix } from "../../src/utills/constants";
import PsButton from "../../src/components/PsButton/PsButton";

const Product = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const cartStore = useSelector((state) => state.cart);

  const router = useRouter();
  const { pid } = router.query;

  const [addWish, SetAddWish] = useState(wishlist.includes(pid));
  const [productData, setProductData] = useState([]);
  const cartData = cartStore?.find((cart) => cart?.id === pid);

  const dispatch = useDispatch();
  const { addtocart, decrementfromcart, addtowishlist, removefromwishlist } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const data = Products?.filter((product) => product?.id === pid);
    setProductData(data);
  }, [pid]);

  const addToWishlistFunction = (prodId) => {
    if (!addWish) {
      SetAddWish(true);
      addtowishlist(prodId);
    } else if (addWish) {
      SetAddWish(false);
      removefromwishlist(prodId);
    }
  };

  return (
    <>
      <PageTitle
        name={productData?.[0]?.name.replaceAll("_", " ").slice(0, 20)}
      />
      <Container sx={{ position: "relative", marginY: "20px" }}>
        <Grid container>
          <Grid item xs={2}>
            {[...Array(3)].map((x, i) => (
              <CardMedia
                component="img"
                image={`${assetsPrefix}${productData?.[0]?.img}`}
                alt="image"
                className="subImages"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "8px",
                  margin: "5px",
                  cursor: "pointer",
                }}
              />
            ))}
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={`${assetsPrefix}${productData?.[0]?.img}`}
              alt="image"
              className="mainImg"
              sx={{
                width: 320,
                height: 420,
                borderRadius: "8px",
                margin: "5px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="overline">
              {productData?.[0]?.category}
            </Typography>
            <Typography
              variant="h5"
              sx={{ textTransform: "capitalize" }}
              gutterBottom
            >
              {productData?.[0]?.name.replaceAll("_", " ")}
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting. It was popularised in the 1960s with the
              release of Letraset sheets containing Lorem Ipsum passages.
            </Typography>
            <Typography variant="h5">₹{productData?.[0]?.price}</Typography>
            <Typography
              variant="string"
              color="text.secondary"
              sx={{ textDecorationLine: "line-through" }}
            >
              ₹{productData?.[0]?.originalPrice}
            </Typography>
            <Typography variant="subtitle2">5%</Typography>
            <Typography variant="body1" >{productData?.[0]?.ratings}%</Typography>
            <Typography variant="body1">{productData?.[0]?.reviews} Reviews</Typography>
            {cartData?.qty > 0 ? (
              <ButtonGroup
                aria-label="small button group"
                color="success"
                variant="outlined"
              >
                <Button
                  key="remove"
                  onClick={() =>
                    decrementfromcart({ id: productData?.[0]?.id, qty: 1 })
                  }
                >
                  -
                </Button>
                <Button key="qty" onClick={(e) => e.preventDefault()}>
                  {cartData?.qty || 0}
                </Button>
                <Button
                  key="add"
                  onClick={() =>
                    addtocart({ id: productData?.[0]?.id, qty: 1 })
                  }
                >
                  +
                </Button>
              </ButtonGroup>
            ) : (
              <Button
                variant="outlined"
                color="success"
                onClick={() => {
                  addtocart({ id: productData?.[0]?.id, qty: 1 });
                }}
              >
                Add to cart
              </Button>
            )}
            <PsButton
              onClick={() => {
                // addtocart({ id: productData?.[0]?.id, qty: 1 });
              }}
            >
              Buy it now
            </PsButton>
          </Grid>
        </Grid>
        <IconButton
          size="large"
          aria-label="wishlistbutton"
          color="inherit"
          title="Add to Wishlist"
          sx={{
            position: "absolute",
            right: "3px",
            top: "3px",
            color: addWish ? "green" : "lightgrey",
            // backgroundColor: "rgba(25, 135, 84, 0.2)",
          }}
          onClick={() => {
            addToWishlistFunction(productData?.[0]?.id);
          }}
        >
          <Bookmark />
        </IconButton>
      </Container>
    </>
  );
};

export default Product;
