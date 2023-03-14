import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BookmarkRemove from "@mui/icons-material/BookmarkRemoveTwoTone";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { assetsPrefix } from "../../utills/constants";
import { Products } from "../../utills/globalData";

const UserProductItem = ({ item, productIn }) => {
  const dispatch = useDispatch();
  const { removefromwishlist, addtocart } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <Card sx={{ maxWidth: 250, margin: "10px 0", position: "relative" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={`${assetsPrefix}${item?.img}`}
          alt="image"
          sx={{ width: "250px", height: "250px" }}
        />
        <CardContent sx={{ textTransform: "capitalize" }}>
          <Typography gutterBottom variant="h6" component="div">
            {item?.name.replaceAll("_", " ").slice(0, 30)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.category}
            {productIn}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="text"
          color="success"
          onClick={() => {
            addtocart({ id: item?.id, qty: 1 });
            removefromwishlist(item?.id);
          }}
        >
          Move to cart
        </Button>
        <IconButton
          aria-label="Example"
          title="Remove from wishlist"
          onClick={() => removefromwishlist(item?.id)}
          sx={{
            position: "absolute",
            top: "5px",
            right: "5px",
            color: "white",
          }}
        >
          <BookmarkRemove />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default UserProductItem;
