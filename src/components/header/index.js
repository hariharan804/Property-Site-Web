import {
  Avatar,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Menu,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import bellIcon from "../../assets/images/bell-icon.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  const roleDetails = [
    {
      role: "Super Admin",
      color: "#F17360",
    },
    {
      role: "Community Manager",
      color: "#119DA4",
    },
    {
      role: "Security Manager",
      color: "#D49200",
    },
    {
      role: "Property Manager",
      color: "#4991F2",
    },
    {
      role: "Zonal Manager",
      color: "#11A442",
    },
    {
      role: "Customer Care",
      color: "#D471ff",
    },
  ];

  return (
    <>
      <header className={classes.root}>
        <Grid
          container
          sx={{ marginTop: 0, paddingTop: 0, width: "100%" }}
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
                  component="h6"
                  variant="subtitel"
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
                sx={{
                  paddingTop: 0,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                    lg: "block",
                  },
                }}
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
          <Box className={classes.profileInfo}>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar sx={{ width: 62, height: 62, marginRight: "10px" }}>
                    <img
                      src={require("../../assets/images/profile2.png")}
                      alt="profile"
                    />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary="Hariharan"
                  secondary={
                    <>
                      {"hari@gmail.com "}
                      <Typography
                        sx={{ display: "block" }}
                        className={classes.roleViewer}
                        component="span"
                        variant="body2"
                      >
                        Super Admin
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
            <Divider />
            <Box className={classes.roleBox}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "12px" }}
                color={"#98A0AC"}
              >
                ROLES
              </Typography>
              <Grid container spacing={1}>
                {roleDetails.map((roles, index) => (
                  <Grid key={index} item xs={"auto"} lg={"auto"}>
                    <Card
                      className={classes.roleCard}
                      sx={{ border: "1px sold #f6e !important" }}
                      variant="outlined"
                    >
                      <Box
                        key={index}
                        sx={{
                          display: "flex !important",
                          flexDirection: "column",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Avatar
                          sx={{
                            dispalay: "inline-block",
                            align: "center",
                            bgcolor: roles.color + "2f",
                            color: roles.color,
                          }}
                        >
                          {roles.role.charAt(0)}
                        </Avatar>
                        <Typography
                          sx={{ marginTop: "6px" }}
                          align="center"
                          component="h6"
                          variant="h6"
                        >
                          {roles.role}
                        </Typography>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Divider />
            <Box className={classes.roleBox}>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
                component="h6"
              >
                My Profile
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
              >
                Privacy Policy
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", marginTop: "8px" }}
                color={"#4E5A6B"}
              >
                Terms and conditions
              </Typography>
              <Box className={classes.saveBtn}>
                <Button onClick={() => navigate("/")} variant="outlined">
                  Sign Out
                </Button>
              </Box>
            </Box>
          </Box>
        </Menu>
      </header>
    </>
  );
};

export default Header;
