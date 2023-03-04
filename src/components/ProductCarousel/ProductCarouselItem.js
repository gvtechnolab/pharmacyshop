import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styles from "./ProductCarousel.module.css";
import IconButton from "@mui/material/IconButton";
import Bookmark from "@mui/icons-material/Bookmark";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";

const ProductCarouselItem = ({ item }) => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const { addtowishlist, removefromwishlist } = bindActionCreators(
    actionCreators,
    dispatch
  );

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
        height: "320px",
        padding: "10px",
        borderRadius: "8px",
        boxShadow: "1px 0 0 1px rgb(255 255 255), 0.1em 0.1em 0.5em rgb(0 0 0 / 20%)",
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
      <CardContent>
        <Typography
          gutterBottom
          variant="span"
          component="div"
          sx={{ textTransform: "capitalize" }}
        >
          {`${item?.name?.replaceAll("_", " ").slice(0, 30)} ...`}
        </Typography>
        <Typography
          variant="body3"
          color="text.secondary"
          sx={{ marginRight: "5px" }}
        >
          ₹{item?.price}
        </Typography>
        <Typography
          variant="body2"
          color="lightgray"
          sx={{ display: "inline-block", textDecoration: "line-through" }}
        >
          ₹{item?.originalPrice}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" color="success">
          Add to cart
        </Button>
      </CardActions>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="primary-search-account-menu"
        aria-haspopup="true"
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
