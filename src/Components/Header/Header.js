import { Box, List, Modal, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SocialMediaIcons from "../SocialMediaIcons/SocialMediaIcons";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import constants from "../../Constants/HomePage";
import LoginModal from "../LoginModal/LoginModal";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let {
    Call_Us_Free,
    Number_18003094005,
    Gurgon,
    My_Account,
    My_Account_Arr,
    My_Cart,
    You_have_no_items_in_your_shopping_cart,
  } = constants;
  const [toggleMsg, setToggleMsg] = useState({
    myCart: false,
    myAccount: false,
  });
  const navigate = useNavigate();
  const [LoginModalOpen, setLoginModalOpen] = React.useState(false);
  const handleLoginModalOpen = () => setLoginModalOpen(true);
  const handleLoginModalClose = () => setLoginModalOpen(false);

  const [userData, setUserData] = useState({
    userExist: false,
    userDetails: "",
  });
  const [reRender, setReRender] = useState(true);

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

  const signOutUser = () => {
    localStorage.removeItem("user_details");
    setReRender(!reRender);
  };

  useEffect(() => {
    if (localStorage.getItem("user_details") == null) {
      setUserData({
        userExist: false,
        userDetails: ""
      });
    } else {
      setUserData({
        userExist: true,
        userDetails: JSON.parse(localStorage.getItem("user_details")),
      });
    }
  }, [reRender]);

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
          <Typography>{Call_Us_Free} : </Typography>
          <Typography
            sx={{ fontWeight: "bold", "&:hover": { cursor: "pointer" } }}
          >
            {" "}
            {Number_18003094005}
          </Typography>
        </List>
      </div>

      {/* this is for screen above 901px */}
      {/* Right Part */}
      <div className="headerRightPart">
        <div className="placeDiv">
          <Typography>{Gurgon}</Typography>
        </div>

        {/* my account */}
        <div
          className="myAccount"
          onMouseEnter={() => mouseEnterHandler("myAccount")}
          onMouseLeave={mouseLeaveHandler}
        >
          <AccountCircleIcon />
          <Typography>{My_Account}</Typography>
          {toggleMsg.myAccount == true ? (
            <List className="myAccout_menuList" dense={true}>
              {My_Account_Arr.map((item, index) => {
                if (item == "Login" || item == "Register") {
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
                        display: userData.userExist == true ? "none" : "block",
                      }}
                      onClick={handleLoginModalOpen}
                    >
                      {item}
                    </Typography>
                  );
                } else if (item == "Partner Dashboard") {
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
                      onClick={() => navigate("/CustomerLogin")}
                    >
                      {item}
                    </Typography>
                  );
                } else if (item == "My Account") {
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
                        display: userData.userExist == true ? "block" : "none",
                      }}
                    >
                      {item}
                    </Typography>
                  );
                } else if (item == "Sign Out") {
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
                        display: userData.userExist == true ? "block" : "none",
                      }}
                      onClick={signOutUser}
                    >
                      {item}
                    </Typography>
                  );
                } else {
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
              })}
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
          <Typography>{My_Cart}</Typography>
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
              <Typography>{You_have_no_items_in_your_shopping_cart}</Typography>
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
      <Modal
        open={LoginModalOpen}
        onClose={handleLoginModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <LoginModal
          handleLoginModalClose={handleLoginModalClose}
          setLoginModalOpen={setLoginModalOpen}
          reRender={reRender}
          setReRender={setReRender}
        />
      </Modal>
    </Box>
  );
};

export default Header;
