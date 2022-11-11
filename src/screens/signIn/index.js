// import { useTheme } from "@mui/styles";
import { Button, Grid, Typography } from "@mui/material";
import { useStyles } from "./styles";
import dotedImg from "../../assets/images/doted.svg";
import circleImg from "../../assets/images/circle.svg";
import circleDarkImg from "../../assets/images/circleDark.svg";
import InputBox from "../../components/inputBox";
import eyeHide from "../../assets/images/eye-hide.svg";
import eye from "../../assets/images/eye.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Alert from "../../components/alert";

export const SignIn = (props) => {
  const classes = useStyles(props);
  const navigate = useNavigate();
  const onChangePassword = (val) => {
    setPasswordValue(val.target.value);
  };
  const onChangeMail = (val) => {
    setMailValue(val.target.value);
  };

  const [mailValue, setMailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [openAlert, setOpenAlert] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const onLoginBtn = () => {
    console.log(mailValue, passwordValue);
    if (mailValue && passwordValue) {
      navigate("/user/dashboard");
    }else{
      setOpenAlert(true);
    }
  };
  return (
    <>
      <section className={classes.container}>
        <Grid container sx={{ marginTop: 0, paddingTop: 0 }}>
          <Grid
            item
            sx={{
              display: { xs: "none", md: "none", lg: "block" },
              paddingTop: 0,
            }}
            xs={0}
            sm={0}
            md={3}
            className={classes.imageSection}
          >
            <div className={classes.circleImgGroup}>
              <img
                className={classes.circleImgTop}
                src={circleImg}
                alt="circleImgTop"
              />
              <img
                className={classes.circleImgCenter}
                src={circleDarkImg}
                alt="circleImgCenter"
              />
              <img
                className={classes.circleImgbottom}
                src={circleImg}
                alt="circleImgbottom"
              />
            </div>
            <img
              className={classes.buldingImgbottom}
              src={require("../../assets/images/bulding-crop.png")}
              alt="buldingImgbottom"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={9}
            className={classes.formSection}
            sx={{ paddingTop: 0 }}
          >
            <Grid container sx={{ marginTop: 0, paddingTop: 0 }}>
              <Grid
                item
                xs={0}
                sm={0}
                md={4}
                lg={4}
                sx={{ marginTop: 0, paddingTop: 0 }}
              ></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={12}
                lg={8}
                sx={{ marginTop: 0, paddingTop: 0 }}
                className={classes.signInForm}
              >
                <div className={classes.circleImgGroup}>
                  <img
                    className={classes.dotedImgTop}
                    src={dotedImg}
                    alt="dotedImgTop"
                  />
                </div>
                <div className={classes.signInCard}>
                  <Typography variant="h5" component="h1"  className={classes.signTitle}>Sign In</Typography>
                  <div className={classes.inputBar}>
                    <InputBox
                      type="text"
                      label="Mobile Number / Email ID"
                      placeholder="Enter Mobile Number / Email ID"
                      onChangeFun={onChangeMail}
                    />
                  </div>
                  <div className={classes.inputBar}>
                    <InputBox
                      type={viewPassword ? "text" : "password"}
                      label="Enter Password"
                      placeholder="Enter your password"
                      onChangeFun={onChangePassword}
                      endAdornment={
                        <span
                          style={{ marginTop: "5px", cursor: "pointer" }}
                          onClick={() => setViewPassword(!viewPassword)}
                        >
                          {viewPassword ? (
                            <img src={eye} alt={"eye"} />
                          ) : (
                            <img src={eyeHide} alt={"eyehide"} />
                          )}
                        </span>
                      }
                    />
                  </div>
                  <Typography variant="body3" component="h6" align="right" className={classes.forgetPassword}>
                    Did you forget your password? <span>Click Here</span>
                  </Typography>
                  <div className={classes.poweredBy}>
                    <span>Powered by</span>
                    <img
                      src={require("../../assets/images/logo.png")}
                      alt="logo"
                    />
                    Property Automate
                  </div>
                  <Button
                    onClick={onLoginBtn}
                    className={classes.loginBtn}
                    fullWidth={true}
                    variant="contained"
                  >
                    Log In
                  </Button>
                </div>
                <div className={classes.circleImgGroup}>
                  <img
                    className={classes.dotedImgBottom}
                    src={dotedImg}
                    alt="dotedImgBottom"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Alert openAlert={openAlert} text="Please fill input filds.." status="error"/>
      </section>
    </>
  );
};

export default SignIn;
