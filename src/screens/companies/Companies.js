import { Card } from "@material-ui/core";
import {
  Button,
  Grid,
  IconButton,
  ListItem,
  Stack,
  Typography,
} from "@mui/material";
import { useStyles } from "./Companies-Styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Box } from "@mui/system";
import CustomSelect from "../../components/customSelect/CoustomSelect";

export const Companies = (props) => {
  const classes = useStyles(props);

  return (
    <>
      <Card className={classes.card}>
        <Stack className={classes.countingCard} direction="row">
          <ListItem sx={{ width: "50px" }}>
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
            <Typography variant="h6">Create New Property</Typography>
          </ListItem>
        </Stack>
      </Card>
      <Box p={2}>
        <Grid spacing={2} container mt={2}>
          <Grid item xs={12} md={2} lg={2}>
            <Card className={classes.propertyCard}>
              <Typography
                variant="h6"
                sx={{ fontSize: "14px", color: "#4E5A6B" }}
                align="center"
              >
                PROPERTY IMAGE
              </Typography>
              <Card className={classes.propertyImg}>
                <img src={require("../../assets/images/propertyimg.png")}
                  className={classes.propImg}
                  alt="property"
                />
              </Card>
                <Button className={classes.uploadBtn} size="small" >Upload Image</Button>
            </Card>
          </Grid>
          <Grid item xs={12} md={10} lg={10}>
          <Card className={classes.propertyCard}>
            <Typography variant="h6" sx={{ fontSize: "14px", color: "#4E5A6B" }}>
            PROPERTY DETAILS
            </Typography>
            <CustomSelect/>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Companies;
