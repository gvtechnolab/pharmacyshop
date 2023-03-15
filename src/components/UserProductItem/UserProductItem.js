import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import BookmarkRemove from "@mui/icons-material/BookmarkRemoveTwoTone";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import RemoveCircle from "@mui/icons-material/RemoveCircleTwoTone";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux";
import { assetsPrefix } from "../../utills/constants";
import { Products } from "../../utills/globalData";

//

const UserProductItem = ({ item, productIn }) => {
  const [itemData, setItemData] = useState([]);
  const [itemQty, setItemQty] = useState(0);

  const cartStore = useSelector((state) => state.cart);
  const wishlistStore = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();
  const { removefromwishlist, addtocart, removefromcart, decrementfromcart } =
    bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    const data = Products?.filter((product) => product?.id === item?.id);
    setItemData(data);

    const qty = cartStore?.filter((cart) => cart?.id === item?.id);
    setItemQty(qty[0]?.qty);
  }, [cartStore, wishlistStore]);
  console.log("data:", cartStore);

  return (
    <>
      <Card
        sx={{
          width: 370,
          height: 170,
          display: "flex",
          position: "relative",
          marginBottom: "8px",
        }}
      >
        <CardMedia
          component="img"
          sx={{ width: 150, height: 170 }}
          image={`${assetsPrefix}${itemData?.[0]?.img}`}
          alt="image"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto", textTransform: "capitalize" }}>
            <Typography
              component="div"
              variant="h6"
              title={itemData?.[0]?.name.replaceAll("_", " ")}
            >
              {`${itemData?.[0]?.name.replaceAll("_", " ").slice(0, 25)}...`}
            </Typography>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              component="div"
            >
              {itemData?.[0]?.category}
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              pl: 1,
              pb: 1,
            }}
          >
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
              <>
                <IconButton
                  aria-label="decrementfromcart"
                  color="success"
                  onClick={() =>
                    decrementfromcart({ id: itemData[0]?.id, qty: 1 })
                  }
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" color="text.secondary">
                  {itemQty}
                </Typography>
                <IconButton
                  aria-label="incrementtocart"
                  color="success"
                  onClick={() => addtocart({ id: itemData[0]?.id, qty: 1 })}
                >
                  <AddIcon />
                </IconButton>
              </>
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
                top: "3px",
                right: "3px",
                color: "lightgrey",
              }}
            >
              {productIn === "wishlist" ? <BookmarkRemove /> : <RemoveCircle />}
            </IconButton>
          </Box>
        </Box>
      </Card>
      {/* <Card sx={{ maxWidth: 250, margin: "10px 0", position: "relative" }}>
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
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions sx={{ display: "flex", justifyContent: "space-around" }}>
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
            <>
              <IconButton
                aria-label="decrementfromcart"
                onClick={() =>
                  decrementfromcart({ id: itemData[0]?.id, qty: 1 })
                }
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body2" color="text.secondary">
                {itemQty}
              </Typography>
              <IconButton
                aria-label="incrementtocart"
                onClick={() => addtocart({ id: itemData[0]?.id, qty: 1 })}
              >
                <AddIcon />
              </IconButton>
            </>
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
      </Card> */}
    </>
  );
};

export default UserProductItem;
