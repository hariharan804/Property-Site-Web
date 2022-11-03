import {
  Avatar,
  Divider,
  Grid,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useStyles } from "./Header-Styles";
import bellIcon from "../../assets/images/bell-icon.svg";
import { useState } from "react";
export const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <header className={classes.root}>
        <Grid
          container
          sx={{ marginTop: 0, paddingTop: 0 }}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid
            item
            sx={{
              paddingTop: 0,
            }}
            xs={"auto"}
            className={classes.imageSection}
          >
            <div>
              <img
                className={classes.logImg}
                src={require("../../assets/images/DNTLogo.png")}
                alt="DNTLogo"
              />
              <span>
                <Typography
                  sx={{
                    display: { xs: "none", md: "inherit", lg: "inherit" },
                  }}
                  className={classes.siteName}
                >
                  PROPERTY MANAGEMENT SOLUTION
                </Typography>
              </span>
            </div>
          </Grid>
          <Grid
            item
            sx={{
              paddingTop: 0,
            }}
            xs={"auto"}
            className={classes.imageSection}
          >
            <Grid
              container
              sx={{ marginTop: 0, paddingTop: 0 }}
              alignItems="center"
            >
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
              >
                <img src={bellIcon} alt="DNTLogo" />
              </Grid>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ borderColor: "#E4E8EE", margin: "6px 10px" }}
              />
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <Avatar sx={{ width: 32, height: 32 }}>
                  <img
                    src={require("../../assets/images/profile2.png")}
                    alt="profile"
                  />
                </Avatar>
              </Grid>
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <h5 className={classes.userName}>Harihran</h5>
                <h6 className={classes.role}>Super Admin</h6>
              </Grid>
              <Grid
                item
                sx={{ paddingTop: 0 }}
                xs={"auto"}
                className={classes.imageSection}
                onClick={handleClick}
              >
                <h6 className={classes.dropDown}>&#x276F;</h6>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <h1>adshh</h1>
          {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem> */}
        </Menu>
      </header>
    </>
  );
};

export default Header;
