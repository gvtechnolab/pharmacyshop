import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import styles from "./ProductCarousel.module.css";
import IconButton from "@mui/material/IconButton";
import Bookmark from "@mui/icons-material/Bookmark";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

const ProductCarouselItem = ({ item }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const cartList = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { addtowishlist, removefromwishlist, addtocart, removefromcart } =
    bindActionCreators(actionCreators, dispatch);

  const [addWish, SetAddWish] = useState(wishlist.includes(item?.id));

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
    <Card
      sx={{
        maxWidth: 250,
        margin: "10px 5px",
        // height: "320px",
        padding: "10px",
        borderRadius: "8px",
        boxShadow:
          "1px 0 0 1px rgb(255 255 255), 0.1em 0.1em 0.5em rgb(0 0 0 / 20%)",
        // border:'1px solid rgba(25, 135, 84, 0.2)',
        position: "relative",
      }}
      className={styles.ProductCarouselCard}
    >
      <CardMedia
        sx={{ height: 140, borderRadius: "8px" }}
        image={item?.img}
        title="Click To View"
      />
      <CardContent sx={{ textTransform: "capitalize" }}>
        <Typography gutterBottom variant="subtitle1" component="div" title={item?.name?.replaceAll("_", " ")}>
          {`${item?.name?.replaceAll("_", " ").slice(0, 35)} ...`}
        </Typography>
        <Typography
          variant="string"
          color="text.secondary"
          sx={{ marginRight: "5px" }}
        >
          ₹{item?.price}
        </Typography>
        <Typography
          variant="body3"
          color="lightgray"
          sx={{ display: "inline-block", textDecoration: "line-through" }}
        >
          ₹{item?.originalPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="outlined"
          size="small"
          color="success"
          onClick={() => addtocart({ id: item?.id, qty: 1 })}
        >
          Add to cart
        </Button>
      </CardActions>
      <IconButton
        size="large"
        aria-label="wishlistbutton"
        color="inherit"
        sx={{
          position: "absolute",
          right: "3px",
          top: "3px",
          color: addWish ? "green" : "white",
          // backgroundColor: "rgba(25, 135, 84, 0.2)",
        }}
        onClick={() => {
          addToWishlistFunction(item?.id);
        }}
      >
        <Bookmark />
      </IconButton>
    </Card>
  );
};

export default ProductCarouselItem;
