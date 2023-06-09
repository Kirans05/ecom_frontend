import {
  Box,
  Button,
  Rating,
  Typography,
  Card,
  CardContent,
  Modal,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoopIcon from "@mui/icons-material/Loop";
import ProductModal from "../ProductModal/ProductModal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const NewArrivalCard = ({ item }) => {
  const [toggleMsg, setToggleMsg] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      className="bikeDescription"
      onMouseEnter={() => setToggleMsg(true)}
      onMouseLeave={() => setToggleMsg(false)}
    >
      <Box
        component={"img"}
        src={item.url}
        alt={"image"}
        sx={{
          width: "100%",
        }}
      />
      <Box
        sx={{
          padding: "1px 20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "5px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "15px",
            textAlign: "center",
          }}
        >
          {item.name}
        </Typography>
        {item.ratings == 0 ? null : (
          <Rating
            name="half-rating"
            defaultValue={item.ratings.toString()}
            precision={0.5}
            readOnly
            sx={{
              fontSize: "20px",
            }}
          />
        )}

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "red",
          }}
        >
          <CurrencyRupeeIcon
            sx={{
              fontSize: "17px",
            }}
          />
          <Typography
            sx={{
              fontSize: "17px",
            }}
          >
            {item.price}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "2px",
          }}
        >
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgb(31,148,7)",
                color: "white",
              },
              padding: "2px 2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
            }}
          >
            <FavoriteBorderIcon />
          </Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(31,148,7)",
              "&:hover": {
                backgroundColor: "rgb(31,148,7)",
              },
            }}
          >
            ADD TO CART
          </Button>
          <Box
            sx={{
              "&:hover": {
                cursor: "pointer",
                backgroundColor: "rgb(31,148,7)",
                color: "white",
              },
              padding: "2px 2px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "30px",
            }}
          >
            <LoopIcon />
          </Box>
        </Box>
      </Box>
      {toggleMsg == true ? (
        <Typography
          sx={{
            position: "absolute",
            backgroundColor: "rgb(31,148,7)",
            color: "white",
            width: "100%",
            textAlign: "center",
            padding: "5px 0px",
            top: "40%",
          }}
          onClick={handleOpen}
        >
          QUICK VIEW
        </Typography>
      ) : null}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <ProductModal item={item}/>
      </Modal>
    </Card>
  );
};

export default NewArrivalCard;
