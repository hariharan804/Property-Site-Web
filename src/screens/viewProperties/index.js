import {
  Stack,
  ListItem,
  Typography,
  Grid,
  IconButton,
  Avatar,
  InputLabel,
} from "@mui/material";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Card } from "@material-ui/core";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import GoogleMap from "../../components/googleMap";
import { LocationOn, Phone } from "@material-ui/icons";

export const ViewProperties = (props) => {
  const classes = useStyles(props);
  const navigate = useNavigate();
  const propertyDetails = [
    {
      label: "Company Name",
      value: "Name",
    },
    {
      label: "Property Name",
      value: "Rubix Appartment",
    },
    {
      label: "Property Type",
      value: "Property Type",
    },
    {
      label: "Property Purpose",
      value: "Residential",
    },
    {
      label: "Payment Period",
      value: "Monthly",
    },
    {
      label: "Status",
      value: "Active",
    },
  ];

  const propertyDetails2 = [
    {
      label: "Revanue Type",
      value: "Lease",
    },
    {
      label: "Carpet Area",
      value: "10000",
      type: " Sq.ft",
    },
    {
      label: "Total Area",
      value: "1610000",
      type: " Sq.ft",
    },
    {
      label: "Year Built",
      value: "22-10-22",
    },
    {
      label: "Handover Date",
      value: "22-10-22",
    },
    {
      label: "Publicm Listing",
      value: "Public",
    },
    {
      label: "Pet Allowed",
      value: "Public",
    },
  ];
  return (
    <>
      <Card className={classes.card}>
        <Stack direction="row">
          <ListItem
            onClick={() => navigate("/user/properties")}
            sx={{ width: "50px" }}
          >
            <IconButton
              classes={{ root: classes.drawerBtn }}
              sx={{
                paddding: "0px",
                bgcolor: "#E4E8EE",
                color: "#091B29",
                "&:hover": { bgcolor: "#E4E8EE" },
              }}
            >
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
          </ListItem>
          <ListItem>
            <Typography variant="h6" component="h6">
              Rubix Appartment
            </Typography>
          </ListItem>
        </Stack>
      </Card>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Card className={classes.mainCard}>
            <Grid
              container
              justifyContent={"center"}
              alignItems={"center"}
              spacing={2}
            >
              <Grid item xs={12} sm={12} md={12} lg={2}>
                <Avatar
                  alt="RubixAppartment"
                  sx={{ width: 140, height: 140 }}
                  src={require("../../assets/images/RubixAppartment.png")}
                />
                <div className={classes.positionRelative}>
                  <Typography
                    variant="body1"
                    component="p"
                    className={classes.id}
                    color="#fff"
                  >
                    ID-PGUR794
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={10} sm={12} md={12} lg={10}>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "14px",
                    color: "#4E5A6B",
                    marginBottom: "5px",
                  }}
                >
                  PROPERTY DETAILS
                </Typography>
                <Grid container spacing={2}>
                  {propertyDetails.map((property, index) => (
                    <Grid key={index} item sm={12} md={4} lg={2}>
                      <InputLabel
                        className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        {property.label}
                      </InputLabel>
                      <Typography component="h6" variant="h6">
                        {property.value}
                      </Typography>
                    </Grid>
                  ))}
                  <Grid item sm={12} md={12} lg={12}>
                    <InputLabel
                      className={classes.label}
                      variant="standard"
                      htmlFor="Property-Description"
                    >
                      {"Property Description"}
                    </InputLabel>
                    <Typography variant="h6" component="h6">
                      {
                        "A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. It is available in 3 variants and 8 colours with top variant price starting from The Yamaha"
                      }
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Card>
          <Card className={classes.secCard}>
            <Grid container spacing={2} justifyContent="space-between">
              {propertyDetails2.map((property, index) => (
                <Grid key={index} item sm={12} md={4} lg={"auto"}>
                  <div className={classes.viewProperties}>
                    <InputLabel
                      className={classes.label}
                      variant="standard"
                      htmlFor="Property-Description"
                    >
                      {property.label}
                    </InputLabel>
                    <Typography component="h6" variant="h6">
                      {property.value}
                      <span className={classes.smName}>{property?.type}</span>
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </Card>
          <Card className={classes.thirdCard}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={10} sm={12} md={12} lg={4}>
                <GoogleMap
                  style={{ maxHeight: "210px", maxWidth: "400px" }}
                  lat="27.2046"
                  lng="77.4977"
                />
              </Grid>
              <Grid item xs={10} sm={12} md={12} lg={3}>
                <Card className={classes.borderCard}>
                  <Typography
                    component="h6"
                    variant="body1"
                    sx={{
                      font: "normal normal bold 14px/16px NunitoSans-Bold",
                    }}
                  >
                    <LocationOn fontSize="small" />
                    ADDRESS
                  </Typography>
                  <Typography
                    component="h6"
                    sx={{ fontWeight: "bold", margin: "9px 0 17px 0" }}
                  >
                    23 Main Street, 3rd Cross street, 3rd Sector, Chennai,
                    Tamilnadu, India -60001
                  </Typography>
                  <Typography component="h6" className={classes.lableText}>
                    <span>Latitude :</span> 27.2046° N
                  </Typography>
                  <Typography component="h6" className={classes.lableText}>
                    <span>Longitude :</span> 77.4977° E
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={10} sm={12} md={12} lg={5}>
                <Card className={classes.borderCard}>
                  <Typography
                    component="h6"
                    sx={{
                      font: "normal normal bold 14px/16px NunitoSans-Bold",
                      margin: "1px 0 17px 0",
                    }}
                  >
                    <Phone fontSize="small" />
                    CONTACT & OTHER INFORMATION
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <InputLabel
                        className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        Business Phone :
                      </InputLabel>
                      <Typography variant="h6">044 23224944</Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <InputLabel
                        className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        Mobile Phone :
                      </InputLabel>
                      <Typography component="h6" variant="h6">
                        044 23224944
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <InputLabel
                        className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        Website :
                      </InputLabel>
                      <Typography component="h6" variant="h6">
                        propertyautomate.com
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6}>
                      <InputLabel
                        className={classes.label}
                        variant="standard"
                        htmlFor="Property-Description"
                      >
                        Email Address :
                      </InputLabel>
                      <Typography component="h6" variant="h6">
                        mail@propertyautomate.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default ViewProperties;
