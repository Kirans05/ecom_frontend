import { Box, List, Typography } from "@mui/material";
import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
  const [toggleMsg, setToggleMsg] = useState({
    myCart: false,
    myAccount: false,
  });

  const mouseEnterHandler = (name) => {
    setToggleMsg({
      ...toggleMsg,
      myAccount: false,
      myCart: false,
      [name]: true,
    });
  };

  const mouseLeaveHandler = () => {
    setToggleMsg({ ...toggleMsg, myAccount: false, myCart: false });
  };

  return (
    <Box className="headerMainBox">
      {/* this is for screen above 901px */}
      {/* left Part  */}
      <div className="headerLeftPart">
        <SocialMediaIcons />
        <List
          sx={{
            display: "flex",
            color: "white",
          }}
        >
          <Typography>Call Us Free : </Typography>
          <Typography
            sx={{ fontWeight: "bold", "&:hover": { cursor: "pointer" } }}
          >
            {" "}
            18003094005
          </Typography>
        </List>
      </div>

      {/* this is for screen above 901px */}
      {/* Right Part */}
      <div className="headerRightPart">
        <div className="placeDiv">
          <Typography>Gurgon</Typography>
        </div>

        {/* my account */}
        <div
          className="myAccount"
          onMouseEnter={() => mouseEnterHandler("myAccount")}
          onMouseLeave={mouseLeaveHandler}
        >
          <AccountCircleIcon />
          <Typography>My Account</Typography>
          {toggleMsg.myAccount == true ? (
            <List className="myAccout_menuList" dense={true}>
              {["Login", "Register", "Sell", "Partner Dashboard"].map(
                (item, index) => {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        textAlign: "center",
                        backgroundColor: "rgb(231,234,239)",
                        width: "100%",
                        padding: "5px",
                        "&:hover": {
                          cursor: "pointer",
                          backgroundColor: "rgb(30,147,6)",
                          color: "white",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  );
                }
              )}
            </List>
          ) : null}
        </div>

        {/* my cart */}
        <div
          className="myCart"
          onMouseEnter={() => mouseEnterHandler("myCart")}
          onMouseLeave={mouseLeaveHandler}
        >
          <ShoppingCartIcon />
          <Typography>My Cart</Typography>
          <Typography
            sx={{
              bgcolor: "rgb(30,147,6)",
              borderRadius: "50%",
              width: "20px",
              height: "25px",
              textAlign: "center",
            }}
          >
            0
          </Typography>
          {toggleMsg.myCart == true ? (
            <div
              style={{
                position: "absolute",
                width: "350px",
                color: "black",
                right: "0px",
                top: "40px",
                backgroundColor: "white",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
                padding: "10px 10px",
              }}
            >
              <Typography>You have no items in your shopping cart</Typography>
            </div>
          ) : null}
        </div>
      </div>

      <div className="smallScreenHeader">
        <div
          style={{
            width: "25%",
            padding: "1% 2%",
            backgroundColor: "white",
            transform: "skewX(-30deg)",
          }}
        >
          <Box
            component={"img"}
            src={
              "https://evkharido.com/media/logo/stores/1/New_Logo_-_FInal_.jpg"
            }
            alt={"image"}
            className="headerLogo"
          />
        </div>

        <ShoppingCartIcon sx={{ color: "white", fontSize: "30px" }} />
      </div>
    </Box>
  );
};

export default Header;
