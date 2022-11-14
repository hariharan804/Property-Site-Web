import makeStyles from "@mui/styles/makeStyles";
//hari
const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "0",
    boxShadow: "0px 3px 3px #5C86CB2E",
  },
  mainCard: {
    margin: "18px 15px",
    borderRadius: "10px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "12px",
    height: "75vh",
  },

  tableHeader: {
    "& th": {
      backgroundColor: "#F5F7FA",
      padding: "12px 10px",
      marginBottom: "10px",
      border: 0,
      color: "#4E5A6B",
      font: "normal normal 600 12px/16px NunitoSans-Regular",
    },
    "& th:first-child": {
      borderRadius: "10px 0 0 10px",
    },
    "& th:last-child": {
      borderRadius: "0 10px 10px 0",
    },
  },
  tableRow: {
    "& td, th": {
      padding: "14px",
      color: "#091B29",
      letterSpacing: "0.29px",
    },
    "& td p": {
      font: "normal normal 600 16px/16px NunitoSans-SemiBold",
    },
  },
  tableContainer2: {
    marginTop: "8px",
    height: "60vh !important",
    overflow: "auto !important",
  },
  menuItem: {
    "& .MuiPaper-root": {
      background: "#FFFFFF",
      boxShadow: "0px 2px 9px -3px #0717411F",
      borderRadius: "12px",
     padding:"2px 10px",
      color: "#071741",
      "& li":{
        font: "normal normal 600 14px/19px NunitoSans-Bold !important",
      borderRadius: "12px",
      padding:"5px 5px",
      }
    },
  },
}));

export { useStyles };
