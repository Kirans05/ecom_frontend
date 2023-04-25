import {
  Box,
  Button,
  Rating,
  Typography,
  Card,
  CardContent,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LoopIcon from "@mui/icons-material/Loop";

const VehicleDetails = ({ item, setMenuIconsSelected, menuIconsSelected }) => {
  const [toggleMsg, setToggleMsg] = useState(false);
  return (
    <Card
      className={
        menuIconsSelected == "grid"
          ? "bikeDescription"
          : "bikeDescriptionColumnView"
      }
      onMouseEnter={() => setToggleMsg(true)}
      onMouseLeave={() => setToggleMsg(false)}
    >
      <Box
        component={"img"}
        src={
          item.image[0] == ""
            ? item.thumbnail
            : item.image.length == 0
            ? item.thumbnail
            : item.image[0]
        }
        alt={"image"}
        className={
          menuIconsSelected == "grid"
            ? "productImage"
            : "productImageColumnView"
        }
      />
      <Box
        className={
          menuIconsSelected == "grid"
            ? "bikeDeatilsDiv"
            : "bikeDeatilsDivColumnView"
        }
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
            defaultValue={5}
            //   defaultValue={item.ratings.toString()}
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
        <Typography>Onwards</Typography>
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
            className="enquireNowBtn"
          >
            ENQUIRE NOW
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
        <Typography
          className={
            menuIconsSelected == "grid"
              ? "quickViewText"
              : "quickViewTextColumnView"
          }
        >
          Qucik View
        </Typography>
      </Box>
      {toggleMsg == true ? (
        <Typography
          className={
            menuIconsSelected == "grid"
              ? "quickViewToggle"
              : "quickViewToggleColumnView"
          }
        >
          QUICK VIEW
        </Typography>
      ) : null}
    </Card>
  );
  // return "hi"
};

export default VehicleDetails;
