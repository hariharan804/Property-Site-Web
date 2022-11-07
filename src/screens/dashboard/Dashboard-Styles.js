import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "0",
    padding: "30px 17px",
  },
  CountingPropertyGrp: {
    marginBottom: "10px",
  },
  ChartGrp: {
    padding: "13px 0px",
  },
  tables: {
    padding: "6px 0px",
  },
  cards: {
    padding: "10px",
    borderRadius: "4px",
    boxShadow: "0px 3px 30px #5C86CB2E",
    border: "0 !important",
  },
  countingCard: {
    backgroundColor: "#F5F7FA",
    padding: "6px",
    borderRadius: "12px",
  },
  tableContainer: {
    height: "200px",
    overflow: "auto !important",
  },
  tableContainer2: {
    marginTop:"8px",
    height: "414px",
    overflow: "auto !important",
  },
  tabs: {
    "& .Mui-selected": {
      color: theme.palette.primary.light + " !important",
      borderBottom: "2px solid " + theme.palette.primary.light,
    },
    "& .MuiTab-root": {
      color: theme.palette.background.gray,
      padding: "0 10px",
      font: "normal normal bold 14px/19px NunitoSans-Bold !important",
      textTransform: "capitalize !important",
      // border: "2px solid "+theme.palette.primary.light
    },
  },
  tableHeader:{
    "& th":{
      backgroundColor:"#F5F7FA",
      padding:"12px 10px",
      marginBottom:"10px",
     border:0,
     color:"#4E5A6B",
     font: 'normal normal 600 12px/16px NunitoSans-Regular',
      },"& th:first-child":{
        borderRadius:"10px 0 0 10px"
        },
        "& th:last-child":{
          borderRadius:"0 10px 10px 0"
          },
  },
  tableRow:{
    "& td, th": {
      padding: "14px",
      color: "#091B29",
      letterSpacing: '0.29px',
    },
    "& td p":{
      font: 'normal normal 600 16px/16px NunitoSans-SemiBold',
      // fontWeignt:"600"
      }
  }
}));

export { useStyles };
