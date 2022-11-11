import { Box, Card, ListItem, Stack, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  cards: {
    [theme.breakpoints.up("lg")]: {
      width: "8.9vw",
    },
    width: "auto",
    height: "99px",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0px 3px 30px #5C86CB2E",
    border: "0 !important",
  },
  cardImg: {
    width: "32px",
    height: "32px",
  },
}));

export const CountingProperty = (props) => {
  const classes = useStyles(props);
  const { propertyName, image, counting } = props.details;
  return (
    <Box>
      <Card className={classes.cards} variant="outlined">
        <Stack direction="row" spacing={1}>
          <ListItem sx={{ padding: "5px" }}>
            <Typography variant="h4" component="h4">
              {counting}
            </Typography>
          </ListItem>
          <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
            <img
              className={classes.cardImg}
              src={require(`../../assets/images/card/${image}.png`)}
              alt={propertyName}
            />
          </ListItem>
        </Stack>
        <Typography
          sx={{
            font: "normal normal 600 14px/19px NunitoSans-Bold",
            width: "70px",
            lineHeight: "1.1rem",
            marginTop: "12px",
          }}
          variant="subtitle1"
          component="p"
        >
          {propertyName}
        </Typography>
      </Card>
    </Box>
  );
};

export default CountingProperty;
