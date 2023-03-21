import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import PageHead from "../../src/components/PageHead/PageHead";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import { actionCreators } from "../../src/redux";
import { Products } from "../../src/utills/globalData";
import { assetsPrefix } from "../../src/utills/constants";

const Product = () => {
  const cartStore = useSelector((state) => state.cart);

  const router = useRouter();
  const { pid } = router.query;

  const [productData, setProductData] = useState([]);
  const cartData = cartStore?.find((cart) => cart?.id === pid);
  const [currentItemQty, setCurrentItemQty] = useState(0);

  const dispatch = useDispatch();
  const { addtocart, decrementfromcart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    const data = Products?.filter((product) => product?.id === pid);
    setProductData(data);
    setCurrentItemQty(cartData?.qty > 0 ? cartData?.qty : 0);
  }, [pid]);

  return (
    <>
      <PageHead
        name={productData?.[0]?.name.replaceAll("_", " ").slice(0, 20)}
      />
      <Container>
        <Grid container>
          <Grid item xs={2}>
            {[...Array(3)].map((x, i) => (
              <CardMedia
                component="img"
                image={`${assetsPrefix}${productData?.[0]?.img}`}
                alt="image"
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: "8px",
                  margin: "5px",
                }}
              />
            ))}
          </Grid>
          <Grid item xs={4}>
            <CardMedia
              component="img"
              image={`${assetsPrefix}${productData?.[0]?.img}`}
              alt="image"
              sx={{
                width: 320,
                height: 420,
                borderRadius: "8px",
                margin: "5px",
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <p>{productData?.[0]?.category}</p>
            <h2>{productData?.[0]?.name.replaceAll("_", " ")}</h2>
            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div>
              <div>
                <p>₹{productData?.[0]?.price}</p>
                <p>5%</p>
              </div>
              <s>₹{productData?.[0]?.originalPrice}</s>
            </div>
            {cartData?.qty > 0 ? (
              <ButtonGroup
                size="small"
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
                size="small"
                color="success"
                onClick={() => addtocart({ id: productData?.[0]?.id, qty: 1 })}
              >
                Add to cart
              </Button>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Product;
