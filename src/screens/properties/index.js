import {
  Stack,
  ListItem,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Grid,
  Menu,
  MenuItem,
  IconButton,
  Divider,
} from "@mui/material";
import { Card } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import { useStyles } from "./styles";
import InputBox from "../../components/inputBox";
import filter from "../../assets/images/filter.svg";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useState } from "react";

export const Properties = (props) => {
  const classes = useStyles(props);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);
  const open = anchorEl;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(false);
  };

  function createTd(
    propertyId,
    propertyName,
    companyName,
    location,
    revanueType,
    propertyType,
    status
  ) {
    return {
      propertyId,
      propertyName,
      companyName,
      location,
      revanueType,
      propertyType,
      status,
    };
  }
  const table = [
    createTd(
      "Prop 011",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 013",
      "Phonix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 014",
      "Thapar",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 015",
      "Marian",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 016",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 017",
      "Tyons",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Maintain",
      "Appartment",
      "Inactive"
    ),
    createTd(
      "Prop 012",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Sale",
      "Appartment",
      "Active"
    ),
    createTd(
      "Prop 019",
      "Rubix",
      "Property Automate 102",
      "T.Nagar, Chennai",
      "Lease",
      "Appartment",
      "Inactive"
    ),
  ];
  return (
    <>
      <Card className={classes.card}>
        <Stack direction="row">
          <ListItem>
            <Typography component="h1" variant="h6">
              Properties
            </Typography>
          </ListItem>
        </Stack>
      </Card>
      <Grid container>
        <Grid item xs={10} sm={11} md={12} lg={12}>
          <Card className={classes.mainCard}>
            <Grid container spacing={2}>
              <Grid item xs={10}>
                <ListItem sx={{ padding: "5px" }}>
                  <InputBox
                    type="text"
                    placeholder={"Search Properties"}
                    startAdornment={<SearchIcon sx={{ color: "#98A0AC" }} />}
                  />
                </ListItem>
              </Grid>
              <Grid item xs={2}>
                <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
                  <img
                    className={classes.cardImg}
                    src={filter}
                    alt={"fillter"}
                  />
                </ListItem>
              </Grid>
            </Grid>
            <TableContainer className={classes.tableContainer2}>
              <Table sx={{ minWidth: 320 }} aria-label="table">
                <TableHead className={classes.tableHeader}>
                  <TableRow>
                    <TableCell>Property ID</TableCell>
                    <TableCell>Property Name</TableCell>
                    <TableCell>Company Name</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Revanue Type</TableCell>
                    <TableCell>Property Type</TableCell>
                    <TableCell>Status</TableCell> <TableCell></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {table.map((row, index) => (
                    <TableRow className={classes.tableRow} key={index}>
                      <TableCell scope="row">
                        <Typography
                          variant="body1"
                          component="p"
                          onClick={() => navigate("/user/view-property")}
                        >
                          {row.propertyId}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          component="p"
                          onClick={() => navigate("/user/view-property")}
                        >
                          {row.propertyName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.companyName}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.location}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" component="p">
                          {row.revanueType}
                        </Typography>
                      </TableCell>
                      <TableCell align="center">
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            backgroundColor: "#78B1FE",
                            padding: "5px",
                            borderRadius: "4px",
                            color: "#fff",
                          }}
                        >
                          {row.propertyType}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={{
                            color:
                              row.status === "Active" ? "#5AC782" : "#FF4B4B",
                          }}
                        >
                          {row.status}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <IconButton
                          aria-label="more"
                          id="long-button"
                          aria-controls={open ? "long-menu" : undefined}
                          aria-expanded={open ? "true" : undefined}
                          aria-haspopup="true"
                          onClick={handleClick}
                        >
                          <MoreVertIcon sx={{ color: "#98A0AC" }} />
                        </IconButton>
                        <Menu
                          className={classes.menuItem}
                          id="long-menu"
                          MenuListProps={{
                            "aria-labelledby": "long-button",
                          }}
                          anchorEl={anchorEl}
                          open={open}
                          onClose={handleClose}
                          PaperProps={{
                            style: {
                              maxHeight: "140px",
                              width: "92px",
                            },
                          }}
                        >
                          <MenuItem onClick={handleClose}>Edit</MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>Inactive</MenuItem>
                          <Divider />
                          <MenuItem onClick={handleClose}>Active</MenuItem>
                        </Menu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Properties;
