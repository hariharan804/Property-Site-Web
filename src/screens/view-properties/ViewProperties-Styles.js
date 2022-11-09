import makeStyles from "@mui/styles/makeStyles";

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
    minHeight: "196px",
  },
  secCard: {
    margin: "18px 15px",
    borderRadius: "10px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "14px",
  },
  thirdCard: {
    margin: "18px 15px",
    borderRadius: "10px",
    boxShadow: "0px 3px 3px #5C86CB2E",
    padding: "10px",
    minHeight: "225px",
  },
  tableContainer2: {
    marginTop: "8px",
    overflow: "auto !important",
  },
  positionRelative: {
    position: "relative",
  },
  id: {
    backgroundColor: "#071741",
    width: "120px",
    textAlign: "center",
    padding: "1px 5px",
    borderRadius: "5px",
    position: "absolute",
    bottom: "-10px",
  },
  label: {
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    color: theme.palette.background.gray + " !important",
    marginBottom: "7px",
    marginTop: "8px",
  },
  viewProperties: {
    width: "163px",
  },
  borderCard: {
    boxShadow: "0px 3px 3px #fff",
    border: "1px solid #E4E8EE",
    margin: "18px 15px",
    borderRadius: "8px",
    padding: "14px",
  },
  lableText:{
    font: "normal normal 600 14px/16px NunitoSans-Regular !important",
    letterSpacing: "0.05rem",
    marginTop: "15px !important",
    "& span":{
    font: "normal normal 600 11px/16px NunitoSans-Regular !important",
    color: theme.palette.background.gray + " !important",
    },
    smName:{
      font: "normal normal 500 11px/16px NunitoSans-Regular !important",
      color: theme.palette.background.gray + " !important",
    }
  }
}));

export { useStyles };
