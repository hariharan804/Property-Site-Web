import { useStyles } from "./styles";
import { styled, useTheme } from "@mui/material/styles";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse, Typography } from "@mui/material";
import DashboardIcon from "@material-ui/icons/Dashboard";
import Leads from "../../assets/images/Leads.svg";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

const drawerWidth = 271;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export const Sidebar = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawer = () => {
    setOpen(!open);
    if (open) {
      setOpenCollapse(false);
    }
  };

  const [openCollapse, setOpenCollapse] = useState(false);

  const handleClickCollapse = () => {
    setOpenCollapse(!openCollapse);
  };

  // openSubCollapse
  const [openSubCollapse, setopenSubCollapse] = useState(false);

  const handleClickSubCollapse = () => {
    setopenSubCollapse(!openSubCollapse);
  };

  return (
    <>
      <aside className={classes.root}>
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Typography color="#fff" component="h6">
              Property Manager For <br />
              Start up
            </Typography>
            <IconButton
              classes={{ root: classes.drawerBtn }}
              sx={{
                marginLeft: "40px",
                marginRight: "5px",
                paddding: "2px",
                bgcolor: "#5078E1",
                color: "#fff",
                "&:hover": { bgcolor: "#5078E1" },
              }}
              onClick={handleDrawer}
            >
              {open ? (
                <ChevronLeftIcon fontSize="small" />
              ) : (
                <ChevronRightIcon fontSize="small" />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              onClick={() => {
                navigate("/user/dashboard");
              }}
              key={"Inbox"}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.0,
                }}
              >
                <ListItemIcon
                  sx={{
                    padding: "7px",
                    borderRadius: "50%",
                    color: "#fff",
                    bgcolor: theme.palette.primary.light,
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Dashboard"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Inbox2"} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={
                  open
                    ? handleClickCollapse
                    : () => {
                        navigate("/user/companies");
                      }
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.0,
                }}
              >
                <ListItemIcon
                  sx={{
                    padding: "7px",
                    borderRadius: "50%",
                    color: "#fff",
                    bgcolor: theme.palette.primary.light,
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <img src={Leads} alt="company" />
                </ListItemIcon>
                <ListItemText
                  primary={"Companies"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
                {open ? openCollapse ? <ExpandLess /> : <ExpandMore /> : ""}
              </ListItemButton>
            </ListItem>
            <Collapse in={openCollapse} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <img src={Leads} alt="company" />
                  </ListItemIcon>
                  <ListItemText
                    onClick={() => {
                      navigate("/user/companies");
                    }}
                    primary="Add Property"
                  />
                  {open ? <ExpandMore /> : ""}
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <img src={Leads} alt="company" />
                  </ListItemIcon>
                  <ListItemText primary="Menu 2" />
                  {open ? <ExpandMore /> : ""}
                </ListItemButton>
                <ListItemButton onClick={handleClickSubCollapse} sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <img src={Leads} alt="company" />
                  </ListItemIcon>
                  <ListItemText primary="Menu 3" />
                  {open ? (
                    openSubCollapse ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )
                  ) : (
                    ""
                  )}
                </ListItemButton>
                <Collapse in={openSubCollapse} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="Menu 3.1" />
                    </ListItemButton>
                    <ListItemButton sx={{ pl: 4 }}>
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary="Menu 3.2" />
                    </ListItemButton>
                  </List>
                </Collapse>
              </List>
            </Collapse>
            <ListItem
              onClick={() => {
                navigate("/user/properties");
              }}
              disablePadding
              sx={{ display: "block" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.0,
                }}
              >
                <ListItemIcon
                  sx={{
                    padding: "7px",
                    borderRadius: "50%",
                    color: "#fff",
                    bgcolor: theme.palette.primary.light,
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  <HomeWorkIcon />
                </ListItemIcon>
                <ListItemText
                  primary={"Properties"}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </aside>
    </>
  );
};

export default Sidebar;
