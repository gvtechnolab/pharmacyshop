import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BookmarkRemove from "@mui/icons-material/BookmarkRemoveTwoTone";
import RemoveCircle from "@mui/icons-material/RemoveCircleTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { assetsPrefix } from "../../utills/constants";
import { Products } from "../../utills/globalData";

const UserProductItem = ({ item, productIn }) => {
  const [itemData, setItemData] = useState([]);

  const cartStore = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const { removefromwishlist, addtocart, removefromcart } = bindActionCreators(
    actionCreators,
    dispatch
  );

  useEffect(() => {
    const data = Products?.filter((product) => product?.id === item?.id);
    setItemData(data);
  }, [cartStore]);
  console.log("itemData=", itemData);

  return (
    <Card sx={{ maxWidth: 250, margin: "10px 0", position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${assetsPrefix}${itemData?.[0]?.img}`}
          alt="image"
          sx={{ width: "250px", height: "250px" }}
        />
        <CardContent sx={{ textTransform: "capitalize" }}>
          <Typography gutterBottom variant="h6" component="div">
            {itemData?.[0]?.name.replaceAll("_", " ").slice(0, 30)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {itemData?.[0]?.category}
            {productIn}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {productIn === "wishlist" ? (
          <Button
            variant="text"
            color="success"
            onClick={() => {
              addtocart({ id: itemData[0]?.id, qty: 1 });
              removefromwishlist(itemData[0]?.id);
            }}
          >
            Move to cart
          </Button>
        ) : (
          "cart valu btn"
        )}
        <IconButton
          aria-label="Example"
          title={`Remove from ${
            productIn === "wishlist" ? "Wishlist" : "Cart"
          }`}
          onClick={() => {
            if (productIn === "wishlist") {
              removefromwishlist(itemData[0]?.id);
            } else if (productIn === "cart") {
              removefromcart({ id: itemData[0]?.id });
            }
          }}
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            color: "white",
          }}
        >
          {productIn === "wishlist" ? <BookmarkRemove /> : <RemoveCircle />}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserProductItem;
