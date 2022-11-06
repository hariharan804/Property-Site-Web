
import { 
  Card,
  Divider,
  Grid,
  ListItem,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Tabs,
  Typography,
} from "@mui/material";
import ChartCard from "../../components/chartCard/ChartCard";
import pencil from "../../assets/images/pencil.svg";
import eye from "../../assets/images/eye.svg";
import CountingProperty from "../../components/countingProperty/CountingProperty";
import { Stack } from "@mui/system";
import { useState } from "react";
import TabPanel from "../../components/tabPanel/TabPanel";
import { useStyles } from "./Dashboard-Styles";

export const chartDetails = [
  {
    name: "Property Types",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#58D0E0", "#FF9340", "#5AC782", "#F3E137"],
    },
  },
  {
    name: "Unit Category",
    chartType: "Bar",
    data: [
      ["Task", " "],
      ["Vacant", 25],
      ["Occupied", 25],
      ["Reserved", 50],
      ["Listed", 25],
    ],
    option: {
      colors: ["#5AC782"],
      legend: "bottom",
    },
  },
  {
    name: "Vacant Unit By Property",
    chartType: "BarChart",
    data: [
      ["Task", "No of Vacants"],
      ["Rubix", 10],
      ["Eat", 22],
      ["Commute", 32],
      ["Watch TV", 21],
      ["Sleep", 7],
    ],
    option: {
      colors: ["#58D0E0"],
      legend: "bottom",
    },
  },
  {
    name: "Total Area",
    chartType: "PieChart",
    data: [
      ["Task", "Hours per Day"],
      ["Commerical", 20],
      ["Residential", 25],
    ],
    option: {
      legend: "bottom",
      colors: ["#5AC782", "#F3E137"],

      pieHole: 0.4,
      is3D: false,
    },
  },
];

function createData(name, type, date, id) {
  return { name, type, date, id };
}

const rows = [
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
  createData("Water Leakage Repair", "Maintenance", "22 jan 22", "K-F01-U277"),
  createData(
    "Electricity Voltage Drop",
    "Maintenance",
    "22 jan 22",
    "K-F01-U277"
  ),
];

export const Dashboard = (props) => {
  const classes = useStyles(props);

  const propertyDetails = [
    {
      propertyName: "Active Properties",
      counting: "14",
      image: "activeProperty",
    },
    {
      propertyName: "Blocks",
      counting: "06",
      image: "block",
    },
    {
      propertyName: "Floors",
      counting: "12",
      image: "floors",
    },
    {
      propertyName: "Residents",
      counting: "14",
      image: "residents",
    },
    {
      propertyName: "Active Unit",
      counting: "10",
      image: "actiiveUnit",
    },
    {
      propertyName: "Vacant",
      counting: "03",
      image: "vacant",
    },
    {
      propertyName: "Reserved",
      counting: "17",
      image: "reserved",
    },
    {
      propertyName: "Occupeid",
      counting: "45",
      image: "occupied",
    },
  ];

 
  const [toggleValue, setToggleValue] = useState(0);
  const handleChange = (event, newValue) => {
    setToggleValue(newValue);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.CountingPropertyGrp}>
          <Grid container spacing={2} justifyContent="space-between">
            {propertyDetails.map((card) => (
              <Grid key={card.propertyName} item xs={10} md={6} lg={"auto"}>
                <CountingProperty details={card} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.ChartGrp}>
          <Grid container spacing={2}>
            {chartDetails.map((chart) => (
              <Grid key={chart.name} item xs={10} md={6} lg={3}>
                <ChartCard details={chart} />
              </Grid>
            ))}
          </Grid>
        </div>
        <div className={classes.tables}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={12} lg={6}>
              <Card className={classes.cards} variant="outlined">
                <Stack
                  className={classes.countingCard}
                  direction="row"
                  divider={
                    <Divider
                      orientation="vertical"
                      flexItem
                      sx={{ margin: "14px 0" }}
                    />
                  }
                  sx={{ width: { sm: "80%", md: "60%", lg: "60%" } }}
                >
                  <ListItem sx={{ display: "block" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        font: "normal normal 600 14px/19px NunitoSans-SemiBold",
                      }}
                    >
                      General Requests
                    </Typography>
                    <Typography variant="h6" sx={{ display: "block" }}>
                      12
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: "block" }}>
                    <Typography
                      variant="h6"
                      sx={{
                        font: "normal normal 600 14px/19px NunitoSans-SemiBold",
                      }}
                    >
                      Maintenance
                    </Typography>
                    <Typography variant="h6" sx={{ display: "block" }}>
                      15
                    </Typography>
                  </ListItem>
                </Stack>
                <Tabs
                  onChange={handleChange}
                  value={toggleValue}
                  aria-label="Tabs"
                  className={classes.tabs}
                >
                  <Tab label="General Requests" />
                  <Tab label="Maintenance" />
                </Tabs>
                <Divider/>
                <Grid sx={{marginTop:"0px"}} container spacing={2}>
          <Grid item xs={10}>
            <ListItem sx={{ padding: "5px" }}>
              <Typography variant="h6">{toggleValue === 0 ? "General Requests (12)" : "Maintenance (15)"}</Typography>
            </ListItem>
          </Grid>
          <Grid item xs={2}>
            <ListItem sx={{ padding: "5px", justifyContent: "flex-end" }}>
              <Typography variant="subTitel1"  color="primary.light">View All</Typography>
            </ListItem>
          </Grid>
        </Grid>
                <TabPanel sx={{padding:"10px 5px"}} value={toggleValue} index={0}>
                <TableContainer className={classes.tableContainer}>
                  <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            " td, th": { border: 0, padding:"8px" },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Typography variant="h6" color="#091B29">
                              {row.name}
                            </Typography>
                            <Typography color="#98A0AC">
                            General Requests &#8226; {row.date} &#8226; {row.id}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ width: "40px" }} align="right">
                            <img src={pencil} alt="pencil" />
                          </TableCell>
                          <TableCell sx={{ width: "40px" }} align="right">
                            <img src={eye} alt="pencil" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </TabPanel>
                <TabPanel value={toggleValue} index={1}>
                <TableContainer className={classes.tableContainer}>
                  <Table sx={{ minWidth: 350 }} aria-label="simple table">
                    {/* <TableHead>
                      <TableRow>
                        <TableCell>Dessert (100g serving)</TableCell>
                        <TableCell align="right">Calories</TableCell>
                        <TableCell align="right">Fat&nbsp;(g)</TableCell>
                        <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                        <TableCell align="right">Protein&nbsp;(g)</TableCell>
                      </TableRow>
                    </TableHead> */}
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{
                            " td, th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            <Typography variant="h6" color="#091B29">
                              {row.name}
                            </Typography>
                            <Typography color="#98A0AC">
                              {row.type} &#8226; {row.date} &#8226; {row.id}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ width: "40px" }} align="right">
                            <img src={pencil} alt="pencil" />
                          </TableCell>
                          <TableCell sx={{ width: "40px" }} align="right">
                            <img src={eye} alt="pencil" />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                </TabPanel>

                
              </Card>
            </Grid>
            <Grid item xs={12} md={12} lg={6}>
              s
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default Dashboard;