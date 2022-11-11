import { Card,  InputLabel } from "@material-ui/core";
import {
  Button,
  Grid,
  IconButton,
  ListItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useStyles } from "./styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Box } from "@mui/system";
import CustomSelect from "../../components/customSelect";
import InputBox from "../../components/inputBox";
// import FormatListBulletedOutlinedIcon from "@mui/icons-material/FormatListBulletedOutlined";
// import FormatListNumberedRoundedIcon from "@mui/icons-material/FormatListNumberedRounded";
// import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
// import FormatBoldIcon from "@mui/icons-material/FormatBold";
// import FormatItalicIcon from "@mui/icons-material/FormatItalic";
// import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { CheckOutlined } from "@material-ui/icons";
import GoogleMap from "../../components/googleMap";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/alert";
import TextEditor from "../../components/textEditor"

export const Companies = (props) => {
  const classes = useStyles(props);
  // const [formats, setFormats] = useState(() => ["italic"]);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();
  // const handleFormat = (event, newFormats) => {
  //   setFormats(newFormats);
  // };
  const [publicList, setpublicList] = useState("public");

  const handlePublicList = (event, newPublicList) => {
    console.log(newPublicList);
    setpublicList(newPublicList);
  };
  const [petSelected, setPetSelected] = useState(true);
  const imageRef = useRef();
  const [removeImgeText, setRemoveImgeText] = useState(false);

  const getImage = (val) => {
    const [file] = val.target.files;
    console.log(file);
    if (file) {
      imageRef.current.src = URL.createObjectURL(file);
      setRemoveImgeText(true);
    }
  };
  const onRemoveImg = () => {
    imageRef.current.src = require("../../assets/images/propertyimg.png");
    setRemoveImgeText(false);
  };
  // const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  //   "& .MuiToggleButtonGroup-grouped": {
  //     margin: theme.spacing(0.5),
  //     border: 0,
  //     "& .MuiSvgIcon-root": {
  //       fontSize: "18px",
  //     },
  //     "&:not(:first-of-type)": {
  //       borderRadius: "8px",
  //     },
  //     "&:first-of-type": {
  //       borderRadius: "8px",
  //     },
  //   },
  // }));
  const selectList = [
    {
      label: "Company Name",
      defaultValue: "Company Name",
      options: [
        { key: "Company Name", value: "Company Name" },
        { key: "12", value: "we" },
      ],
    },
    {
      label: "Property Name",
      defaultValue: "Rubix Appartment",
      options: [
        { key: "Rubix Appartment", value: "Rubix Appartment" },
        { key: "MVP Appartment", value: "MVP Appartment" },
      ],
    },
    {
      label: "Payment Period",
      defaultValue: "Daily",
      options: [
        { key: "Daily", value: "Daily" },
        { key: "Weekly", value: "Weekly" },
        { key: "Monthly", value: "Monthly" },
      ],
    },
    {
      label: "Status",
      defaultValue: "Active",
      options: [
        { key: "Active", value: "Active" },
        { key: "InActive", value: "InActive" },
      ],
    },
  ];

  const saveProperty = () => {
    setOpenAlert(true);
  };

  return (
    <>
      <Card className={classes.card}>
        <Stack direction="row">
          <ListItem
            onClick={() => navigate("/user/dashboard")}
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
            <Typography component="h6" variant="h6">
              Create New Property
            </Typography>
          </ListItem>
        </Stack>
      </Card>
      <Box p={2}>
        <Grid spacing={2} container mt={2}>
          <Grid item xs={12} md={2} lg={2}>
            <Card className={classes.propertyCard}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", color: "#4E5A6B" }}
                align="center"
              >
                PROPERTY IMAGE
              </Typography>
              <Card className={classes.propertyImg}>
                {/* //? propertyUploadImg  : "../../assets/images/propertyimg.png" */}
                <img
                  ref={imageRef}
                  src={require("../../assets/images/propertyimg.png")}
                  className={classes.propImg}
                  alt="property"
                />
              </Card>
              <Button className={classes.uploadBtn} size="small">
                <Box className={classes.postionRelative}>
                  Upload Image
                  <input
                    accept=".jpg,.jpeg,.svg,.png"
                    className={classes.uploadHidden}
                    type="file"
                    onChange={getImage}
                  />
                </Box>
              </Button>
              {removeImgeText && (
                <Typography
                  onClick={onRemoveImg}
                  align="center"
                  sx={{
                    color: "#5078E1",
                    textDecoration: "underline",
                    marginTop: "7px",
                    cursor: "pointer",
                  }}
                  variant="body"
                  component="h6"
                >
                  Remove Image
                </Typography>
              )}
            </Card>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
            <Card className={classes.propertyCard}>
              <Typography
                variant="h6"
                component="h6"
                sx={{ fontSize: "14px", color: "#4E5A6B" }}
              >
                PROPERTY DETAILS
              </Typography>
              <Grid spacing={2} container>
                {selectList.map((select, index) => (
                  <Grid key={index} item xs={12} md={6} lg={3}>
                    <CustomSelect
                      label={select.label}
                      defaultValue={select.defaultValue}
                      options={select.options}
                    />
                  </Grid>
                ))}
              </Grid>
              <InputLabel
                className={classes.label}
                variant="standard"
                htmlFor="Property-Description"
              >
                {"Property Description"}
              </InputLabel>
              <Box className={classes.box} value="sd">
              <TextEditor />
                {/* <InputBox
                  id="Property-Description"
                  type="textArea"
                  row="2"
                  defaultValue="A while back I needed to count the amount of letters that a piece of text in an email template had (to avoid passing any character limits). Unfortunately, a street bike available at a starting price of Rs. 1,62,916 in India. It is available in 3 variants and 8 colours with top variant price starting from The Yamaha"
                /> */}
                {/* <Divider />
                <StyledToggleButtonGroup
                  size="small"
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="bold" aria-label="bold">
                    <FormatBoldIcon />
                  </ToggleButton>
                  <ToggleButton value="italic" aria-label="italic">
                    <FormatItalicIcon />
                  </ToggleButton>
                  <ToggleButton value="underlined" aria-label="underlined">
                    <FormatUnderlinedIcon />
                  </ToggleButton>
                  <ToggleButton
                    value="Strikethrough"
                    aria-label="Strikethrough aligned"
                  >
                    <StrikethroughSIcon />
                  </ToggleButton>
                  <Divider
                    flexItem
                    orientation="vertical"
                    sx={{ mx: 0.5, my: 1 }}
                  />
                  <ToggleButton value="Numbered" aria-label="Numbered aligned">
                    <FormatListNumberedRoundedIcon />
                  </ToggleButton>
                  <ToggleButton value="Bulleted" aria-label="Bulleted aligned">
                    <FormatListBulletedOutlinedIcon />
                  </ToggleButton>
                </StyledToggleButtonGroup> */}
              </Box>
            </Card>
          </Grid>
        </Grid>
        <Card mt={3} className={classes.cards}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <InputBox
                label="Property Type"
                type="text"
                defaultValue="Appartment"
                placeholder="Enter Property Type"
                disabled={true}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <CustomSelect
                label={"Property Purpose"}
                defaultValue={"Residential"}
                options={[
                  { key: "Residential", value: "Residential" },
                  { key: "Commerical", value: "Commerical" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <CustomSelect
                label={"Revenue Type"}
                defaultValue={"Revenue Type"}
                options={[
                  { key: "Revenue Type", value: "Revenue Type" },
                  { key: "YES", value: "YES" },
                  { key: "NO", value: "NO" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <CustomSelect
                label={"Measurement Unit"}
                defaultValue={"Sq. Ft"}
                options={[
                  { key: "Sq. Ft", value: "Sq. Ft" },
                  { key: "Ft", value: "Ft" },
                ]}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <InputBox
                label="Carpet Area"
                type="number"
                defaultValue="1000"
                placeholder="Enter Carpet Area"
                endAdornment={
                  <Typography
                    component="h6"
                    variant="body1"
                    sx={{
                      color: "#98A0AC",
                      font: "normal normal normal 12px/16px NunitoSans-Regular",
                    }}
                  >
                    sq.Ft
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <InputBox
                label="Total Area"
                type="number"
                defaultValue="165480"
                placeholder="Enter Total Area"
                endAdornment={
                  <Typography
                    component="h6"
                    variant="body1"
                    sx={{
                      color: "#98A0AC",
                      font: "normal normal normal 12px/16px NunitoSans-Regular",
                    }}
                  >
                    sq.Ft
                  </Typography>
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <InputBox
                label="Year Built"
                type="date"
                defaultValue="20-10-21"
                placeholder="Enter Year Built"
                // endAdornment={<img src={dateSchedule} alt="data" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={2}>
              <InputBox
                label="Handover Date"
                type="date"
                defaultValue="20-10-21"
                placeholder="Enter Handover Date"
                // endAdornment={<img src={dateSchedule} alt="data" />}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={4} lg={3}>
              <InputLabel
                className={classes.label}
                variant="standard"
                htmlFor="Property-Description"
              >
                {"Property Description"}
              </InputLabel>
              <Stack direction="row" spacing={2}>
                <ToggleButtonGroup
                  className={classes.toggleBtn}
                  value={publicList}
                  onChange={handlePublicList}
                  exclusive
                  aria-label="text"
                >
                  <ToggleButton value="none" aria-label="none">
                    None
                  </ToggleButton>
                  <ToggleButton value="private" aria-label="private">
                    Private
                  </ToggleButton>
                  <ToggleButton value="public" aria-label="public">
                    Public
                  </ToggleButton>
                </ToggleButtonGroup>
              </Stack>
            </Grid>
            <Grid item sm={12} md={4} lg={2}>
              <InputLabel
                className={classes.label}
                variant="standard"
                htmlFor="Pets Allowed"
              >
                {"Pets Allowed"}
              </InputLabel>
              <Box className={classes.toggleCheck}>
                <ToggleButton
                  value="check"
                  selected={petSelected}
                  onChange={() => {
                    setPetSelected(!petSelected);
                  }}
                >
                  <CheckOutlined fontSize="small" />
                </ToggleButton>
              </Box>
            </Grid>
          </Grid>
        </Card>
        <Card mt={3} className={classes.cards}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontSize: "14px", color: "#4E5A6B", marginBottom: "6px" }}
          >
            ADDRESS
          </Typography>
          <Grid container spacing={2}>
            <Grid item sm={12} md={12} lg={5}>
              <GoogleMap
                style={{ maxHeight: "240px", maxWidth: "500px" }}
                lat="27.2046"
                lng="77.4977"
              />
            </Grid>
            <Grid item sm={12} md={12} lg={7}>
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <InputBox
                    type="number"
                    label="Door Number"
                    placeholder="Enter Door Number"
                    defaultValue="123"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={5}>
                  <InputBox
                    label="Address Line 1"
                    placeholder="Enter Address"
                    defaultValue="A1 Road"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={4}>
                  <InputBox
                    label="Address Line 2"
                    placeholder="Enter Address"
                    defaultValue="A1 Road"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <InputBox
                    label="Landmark"
                    placeholder="Enter Landmark"
                    defaultValue="React js"
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <CustomSelect
                    label="Area"
                    defaultValue="Pallavaram"
                    options={[{ key: "Pallavaram", value: "Pallavaram" }]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <CustomSelect
                    label="City"
                    defaultValue="Chennai"
                    options={[{ key: "Chennai", value: "Chennai" }]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <CustomSelect
                    label="State"
                    defaultValue="Tamil Nadu"
                    options={[{ key: "Tamil Nadu", value: "Tamil Nadu" }]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <CustomSelect
                    label="Country"
                    defaultValue="India"
                    options={[{ key: "India", value: "India" }]}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                  <InputBox
                    type="number"
                    label="Pincode"
                    placeholder="Enter Pincode"
                    defaultValue="600001"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Card>
        <Card mt={3} className={classes.contactCard}>
          <Typography
            variant="h6"
            component="h6"
            sx={{ fontSize: "14px", color: "#4E5A6B", marginBottom: "6px" }}
          >
            CONTACT & OTHER INFORMATION
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <InputBox
                label="Business Phone"
                placeholder="Enter Business Phone"
                defaultValue="226089001"
                type="number"
                startAdornment={
                  <Box className={classes.innnerSelect}>
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#4E5A6B !important",
                        borderRight: "1px solid #E4E8EE",
                        paddingRight: "4px",
                      }}
                    >
                      044{" "}
                      <ArrowDropDownIcon
                        sx={{ fontSize: "17px", color: "#98A0AC" }}
                      />
                    </Typography>
                  </Box>
                }
              />
            </Grid>
            <Grid item sm={12} md={12} lg={3}>
              <InputBox
                label="Mobile Phone"
                placeholder="Enter Mobile Phone"
                defaultValue="9857246887"
                type="number"
                startAdornment={
                  <>
                    <Typography
                      variant="h6"
                      component="h6"
                      sx={{
                        fontSize: "14px",
                        color: "#4E5A6B !important",
                        borderRight: "1px solid #E4E8EE",
                        paddingRight: "4px",
                      }}
                    >
                      +91{" "}
                      <ArrowDropDownIcon
                        sx={{ fontSize: "17px", color: "#98A0AC" }}
                      />
                    </Typography>
                  </>
                }
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <InputBox
                label="Website"
                type="url"
                placeholder="Enter Website Link"
                defaultValue="www.example.com"
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={3}>
              <InputBox
                label="Email Address"
                type="email"
                placeholder="Enter Email Address"
                defaultValue="demo@prop.com"
              />
            </Grid>
          </Grid>
        </Card>
      </Box>
      <Card className={classes.card}>
        <Stack className={classes.endCard} direction="row">
          <ListItem className={classes.saveBtn} sx={{ width: "250px" }}>
            <Button
              onClick={() => navigate("/user/dashboard")}
              fullWidth={true}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button onClick={saveProperty} fullWidth={true} variant="contained">
              Save
            </Button>
          </ListItem>
        </Stack>
      </Card>
      <Alert
        openAlert={openAlert}
        status="success"
        text="Property Created Successfully"
      />
    </>
  );
};

export default Companies;
