// import { useTheme } from "@mui/styles";
import { Button, Grid } from "@mui/material";
import { useStyles } from "./SignIn-Styels";
import dotedImg from "../../assets/images/doted.svg";
import circleImg from "../../assets/images/circle.svg";
import circleDarkImg from "../../assets/images/circleDark.svg";
import InputBox from "../../components/inputBox/InputBox";
import eye from "../../assets/images/eye-hide.svg";
import { useNavigate } from "react-router-dom";

export const SignIn = (props) => {
  const classes = useStyles(props);
const navigate = useNavigate();
  const onLoginBtn = ()=>{
navigate('/dashboard');
  }
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
                  <h1 className={classes.signTitle}>Sign In</h1>
                  <div className={classes.inputBar}>
                    <InputBox
                      type="text"
                      label="Mobile Number / Email ID"
                      placeholder="Enter Mobile Number / Email ID"
                    />
                  </div>{" "}
                  <div className={classes.inputBar}>
                    <InputBox
                      type="password"
                      label="Enter Password"
                      placeholder="Enter your password"
                      endAdornment={<img src={eye} alt={"eye"}/>}
                    />
                  </div>
                  <h5 className={classes.forgetPassword}>Did you forget your password? <span>Click Here</span></h5>
               <div className={classes.poweredBy}><span>Powered by</span> <img src={require("../../assets/images/logo.png")} alt="logo" /> Property Automate</div>
               <Button onClick={onLoginBtn} className={classes.loginBtn}  fullWidth={true} variant="contained">Log In</Button>
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
      </section>
    </>
  );
};

export default SignIn;
