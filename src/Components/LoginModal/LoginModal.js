import React, { useState } from "react";
import "./LoginModal.css";
import { Box, Button, Snackbar, TextField, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { signupUser, loginUser } from "../../Apis/LoginModalApi";
import MuiAlert from "@mui/material/Alert";

const LoginModal = ({
  handleLoginModalClose,
  setLoginModalOpen,
  setReRender,
  reRender,
}) => {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  const [loginOption, setLoginOption] = useState("otp");
  const [signupDetails, setSignupDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });
  const [openSnakBar, setOpenSnakBar] = React.useState(false);
  const [snakBarMsg, setSnakBarMsg] = useState({
    msg: "",
    color: "success",
  });

  const handleClickSnakBar = () => {
    setOpenSnakBar(true);
  };

  const handleCloseSnakBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnakBar(false);
  };

  const signupNewUser = () => {
    let textRegexPattern = /^[a-zA-Z]+$/;
    let emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      signupDetails.firstName == "" ||
      !textRegexPattern.test(signupDetails.firstName)
    ) {
      setSnakBarMsg({
        msg: "Please Enter A Valid First Name",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else if (
      signupDetails.lastName == "" ||
      !textRegexPattern.test(signupDetails.lastName)
    ) {
      setSnakBarMsg({
        msg: "Please Enter A Valid last Name",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else if (signupDetails.mobile == "") {
      setSnakBarMsg({
        msg: "Please Enter A Valid Mobile Number",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else if (
      signupDetails.email == "" ||
      !emailRegexPattern.test(signupDetails.email)
    ) {
      setSnakBarMsg({
        msg: "Please Enter A Valid Email Id",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else if (signupDetails.password != signupDetails.confirmPassword) {
      setSnakBarMsg({
        msg: "Passwords Does not Match",
        color: "error",
      });
      handleClickSnakBar();
      return;
    }

    signupUser(signupDetails)
      .then((response) => {
        if (response.data) {
          if (response.data.data) {
            setSnakBarMsg({
              msg: "User Successfully Registered",
              color: "success",
            });
            handleClickSnakBar();
            localStorage.setItem(
              "user_details",
              JSON.stringify(response.data.data)
            );
            setReRender(!reRender);
            handleLoginModalClose();
          }
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.data) {
            if (err.response.data.error) {
              if (err.response.data.error.message) {
                setSnakBarMsg({
                  msg: err.response.data.error.message,
                  color: "error",
                });
                handleClickSnakBar();
              }
            }
          }
        }
      });
  };

  const loginNewUser = () => {
    let textRegexPattern = /^[a-zA-Z]+$/;
    let emailRegexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      loginDetails.email == "" ||
      !emailRegexPattern.test(loginDetails.email)
    ) {
      setSnakBarMsg({
        msg: "Please Enter A Valid Email Id",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else if (loginDetails.password == "") {
      setSnakBarMsg({
        msg: "Please Enter Password",
        color: "error",
      });
      handleClickSnakBar();
      return;
    } else {
      loginUser(loginDetails)
        .then((response) => {
          if (response.data) {
            if (response.data.data) {
              setSnakBarMsg({
                msg: "User Successfully Logined In",
                color: "success",
              });
              handleClickSnakBar();
              localStorage.setItem(
                "user_details",
                JSON.stringify(response.data.data)
              );
              setReRender(!reRender);
              handleLoginModalClose();
            }
          }
        })
        .catch((err) => {
          if (err.response) {
            if (err.response.data) {
              if (err.response.data.error) {
                if (err.response.data.error.message) {
                  setSnakBarMsg({
                    msg: err.response.data.error.message,
                    color: "error",
                  });
                  handleClickSnakBar();
                }
              }
            }
          }
        });
    }
  };

  const signupInputHandler = (e) => {
    setSignupDetails({
      ...signupDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box className="loginModalMainDiv">
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <CloseIcon
          sx={{ "&:hover": { cursor: "pointer" } }}
          onClick={() => setLoginModalOpen(false)}
        />
      </div>
      <div className="loginOptions">
        <Typography
          onClick={() => setLoginOption("otp")}
          sx={{
            borderBottom:
              loginOption == "otp"
                ? "5px solid rgb(31,148,7)"
                : "5px solid white",
            width: "50%",
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
            fontSize: "21px",
            opacity: 0.8,
          }}
        >
          Login With OTP
        </Typography>
        <Typography
          sx={{
            borderBottom:
              loginOption == "password"
                ? "5px solid rgb(31,148,7)"
                : "5px solid white",
            width: "50%",
            textAlign: "center",
            "&:hover": {
              cursor: "pointer",
            },
            fontSize: "21px",
            opacity: 0.8,
          }}
          onClick={() => setLoginOption("password")}
        >
          Login With Password
        </Typography>
      </div>
      {loginOption == "otp" ? (
        <div className="optOptionDiv">
          <div className="image_inputBox">
            <Box
              component={"img"}
              src={
                "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              }
              alt={"Flag Image"}
              className="flagImage"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="mobileInputBox"
            />
          </div>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(31,148,7)",
              "&:hover": { backgroundColor: "rgb(31,148,7)" },
            }}
          >
            REQUEST OTP
          </Button>
        </div>
      ) : loginOption == "password" ? (
        <div className="passwordOptionDiv">
          <input
            type="text"
            placeholder="Email / Mobile Number"
            className="email_numInputBox"
            value={loginDetails.email}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="passwordInputBox"
            value={loginDetails.password}
            onChange={(e) =>
              setLoginDetails({ ...loginDetails, password: e.target.value })
            }
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(31,148,7)",
              "&:hover": { backgroundColor: "rgb(31,148,7)" },
            }}
            onClick={loginNewUser}
          >
            LOGIN
          </Button>
        </div>
      ) : (
        <div className="registerDiv">
          <input
            type="text"
            placeholder="First Name"
            className="InputBox"
            value={signupDetails.firstName}
            name={"firstName"}
            onChange={signupInputHandler}
          />
          <input
            type="text"
            placeholder="Last Name"
            className="InputBox"
            value={signupDetails.lastName}
            name={"lastName"}
            onChange={signupInputHandler}
          />
          <div className="image_inputBox">
            <Box
              component={"img"}
              src={
                "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg"
              }
              alt={"Flag Image"}
              className="flagImage"
            />
            <input
              type="number"
              placeholder="Mobile Number"
              className="mobileInputBox"
              value={signupDetails.mobile}
              name={"mobile"}
              onChange={signupInputHandler}
            />
          </div>
          <input
            type="text"
            placeholder="Email"
            className="InputBox"
            value={signupDetails.email}
            name={"email"}
            onChange={signupInputHandler}
          />
          <input
            type="password"
            placeholder="Password"
            className="InputBox"
            value={signupDetails.password}
            name={"password"}
            onChange={signupInputHandler}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="InputBox"
            value={signupDetails.confirmPassword}
            name={"confirmPassword"}
            onChange={signupInputHandler}
          />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgb(31,148,7)",
              "&:hover": { backgroundColor: "rgb(31,148,7)" },
            }}
            onClick={signupNewUser}
          >
            CREATE ACCOUNT
          </Button>
        </div>
      )}

      <div className="otherOptionDiv">
        <Typography
          className="typography"
          onClick={() => setLoginOption("register")}
        >
          Create Account
        </Typography>
        <Typography
          className="typography"
          onClick={() => setLoginOption("otp")}
        >
          Forgot Password ?
        </Typography>
        <Typography className="typography">
          Forgot Password Via Email ?
        </Typography>
      </div>

      <Snackbar
        open={openSnakBar}
        autoHideDuration={6000}
        onClose={handleCloseSnakBar}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={handleCloseSnakBar}
          severity={snakBarMsg.color}
          sx={{ width: "100%" }}
        >
          {snakBarMsg.msg}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginModal;
