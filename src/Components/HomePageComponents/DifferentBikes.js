import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import constants from "../../Constants/HomePage";

const DifferentBikes = () => {
  let {
    E_TWO_WHEELERS,
    E_THREE_WHEELERS,
    ELECTRIC_CAR_title,
    ELECTRIC_MASS_MOBILITY,
    EV_SERVICES,
    ABOUT_US,
    FRANCHISE,
  } = constants;
  const navigate = useNavigate();
  const [toggleMenu, setToggleMenu] = useState({
    twoWheeler: false,
    threeWheeler: false,
    eCar: false,
    eMassMobility: false,
    news_review: false,
    aboutUs: false,
  });

  const mouseEnterHandler = (name) => {
    setToggleMenu({
      ...toggleMenu,
      twoWheeler: false,
      threeWheeler: false,
      eCar: false,
      eMassMobility: false,
      news_review: false,
      aboutUs: false,
      [name]: true,
    });
  };

  const mouseLeaveHandler = () => {
    setToggleMenu({
      ...toggleMenu,
      twoWheeler: false,
      threeWheeler: false,
      eCar: false,
      eMassMobility: false,
      news_review: false,
      aboutUs: false,
    });
  };

  return (
    <Box className="differntBikesMainDiv">
      {/* image */}
      <div className="imageDiv" onClick={() => navigate("/")}>
        <Box
          component={"img"}
          src={
            "https://evkharido.com/media/logo/stores/1/New_Logo_-_FInal_.jpg"
          }
          alt={"image"}
          sx={{
            width: "100%",
          }}
        />
      </div>

      {/* E TWO WHEELERS */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("twoWheeler")}
        onMouseLeave={mouseLeaveHandler}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {E_TWO_WHEELERS}
        </Typography>
        {toggleMenu.twoWheeler == true ? (
          <List className="menuList" dense={true}>
            {[
              "Electric Scooter",
              "Electric Moped",
              "Electric Bike",
              "Electric Cycle",
            ].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"center"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* E THREE WHEELERS */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("threeWheeler")}
        onMouseLeave={mouseLeaveHandler}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {E_THREE_WHEELERS}
        </Typography>
        {toggleMenu.threeWheeler == true ? (
          <List className="menuList" dense={true}>
            {["Electric 3 Wheeler", "Electric E Rikshaw"].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"center"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* ELECTRIC CAR */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("eCar")}
        onMouseLeave={mouseLeaveHandler}
        style={{
          justifyContent: "center",
        }}
      >
        <Typography>{ELECTRIC_CAR_title}</Typography>

        {toggleMenu.eCar == true ? (
          <List className="menuList" dense={true}>
            {["E Car"].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"center"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* ELECTRIC MASS MOBILITY */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("eMassMobility")}
        onMouseLeave={mouseLeaveHandler}
        style={{
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          {ELECTRIC_MASS_MOBILITY}
        </Typography>
        {toggleMenu.eMassMobility == true ? (
          <List className="menuList" dense={true}>
            {["Electric Bus", "E Van"].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"center"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* NEWS & REVIEWS */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("news_review")}
        onMouseLeave={mouseLeaveHandler}
      >
        <Typography
          sx={{
            textAlign: "center",
          }}
        >
          NEWS & REVIEWS
        </Typography>
        {toggleMenu.news_review == true ? (
          <List className="menuList" dense={true}>
            {[
              "Informative Article EV",
              "Informative Article EV",
              "Latest EV News Bike",
            ].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"center"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* EV SERVICES */}
      <div
        className="menuDiv"
        style={{
          justifyContent: "center",
        }}
      >
        <Typography>{EV_SERVICES}</Typography>
      </div>

      {/* ABOUT US */}
      <div
        className="menuDiv"
        onMouseEnter={() => mouseEnterHandler("aboutUs")}
        onMouseLeave={mouseLeaveHandler}
        style={{
          justifyContent: "center",
        }}
      >
        <Typography>{ABOUT_US}</Typography>
        {toggleMenu.aboutUs == true ? (
          <List className="menuList" dense={true}>
            {[
              "About Us",
              "Contact Us",
              "Partner with us - become an EV preneur",
            ].map((item, index) => {
              return (
                <ListItem key={index} className="menuListItems">
                  <Typography textAlign={"start"}>{item}</Typography>
                </ListItem>
              );
            })}
          </List>
        ) : null}
      </div>

      {/* FRANCHISE */}
      <div
        className="menuDiv"
        style={{
          justifyContent: "center",
        }}
      >
        <Typography>{FRANCHISE}</Typography>
      </div>
    </Box>
  );
};

export default DifferentBikes;
