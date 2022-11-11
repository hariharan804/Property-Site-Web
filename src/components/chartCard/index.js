import { Box, Card, Grid, ListItem, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Chart } from "react-google-charts";

// export const data = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];

// export const options = {
//   legend: "bottom",
// };

const useStyles = makeStyles((theme) => ({
  cards: {
    // height: "309px",
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0px 3px 30px #5C86CB2E",
    border: "0 !important",
  },
  cardImg: {
    width: "21px",
    height: "21px",
  },
}));

export const ChartCard = (props) => {
  const classes = useStyles(props);
  const { name, data, option, chartType } = props.details;
  return (
    <Box>
      <Card className={classes.cards} variant="outlined">
        <Grid container spacing={2}>
          <Grid item xs={10}>
            <ListItem sx={{ padding: "5px" }}>
              <Typography variant="h6" component="h6">
                {name}
              </Typography>
            </ListItem>
          </Grid>
          <Grid item xs={2}>
            <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
              <img
                className={classes.cardImg}
                src={require(`../../assets/images/doubleArrow.png`)}
                alt={"arrow"}
              />
            </ListItem>
          </Grid>
        </Grid>
        <Chart
          chartType={chartType}
          options={option}
          data={data}
          width={"100%"}
          height={"100%"}
        />
      </Card>
    </Box>
  );
};

export default ChartCard;
