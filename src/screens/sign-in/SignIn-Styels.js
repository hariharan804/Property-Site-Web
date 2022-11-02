  import makeStyles from "@mui/styles/makeStyles";

  const useStyles = makeStyles((theme) => ({
    container: {
      backgroundColor: theme.palette.primary.light,
      height: "100vh",
    },
    imageSection: {
      backgroundColor: theme.palette.background.white,
      height: "100vh",
      overflow:'hidden'
    },
    circleImgGroup: {
      height: "100vh",
      position: "relative",
    },
    circleImgTop: {
      position: "absolute",
      top: "-120px",
      right: "20px",
      width: "186px",
      height: "186px",
    },
    circleImgCenter: {
      position: "absolute",
      top: "85px",
      left: "40px",
      width: "465px",
      height: "465px",
      "& #Subtraction_2":{
      fill:'#000'
      }
    },
    circleImgbottom: {
      position: "absolute",
      bottom: "-19px",
      left: "-110px",
      width: "223px",
      height: "223px",
      
    },
    buldingImgbottom:{
      position: "absolute",
      bottom: '0px',
      left: '116px',
      width: '601px',
      height: '453px',
      // zIndex:'999',
    },
    formSection: {
      color: theme.palette.secondary.dark,
    },
    signInForm:{
      height:'100vh',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      overflow:'hidden'
    },
    signInCard: {
      [theme.breakpoints.up('md')]: {
          padding:  '32px 36px',
      },
      padding:  '12px 16px',
      background:theme.palette.background.white,
      width:'356px',
      height:'368px',
      borderRadius:'16px',
      border:0,
      boxShadow:'0px 8px 24px #0000001F',
      margin:'0px 30px',
      zIndex:10
    },
    signTitle:{
      font: 'normal normal 800 24px/32px NunitoSans-ExtraBold',
      letterSpacing: '0.14px',
      color: theme.palette.primary.dark,
      margin:0  
    },
    dotedImgTop:{
      position: "absolute",
      top: "38px",
      left: "-25px",
      width: "165px",
      height: "165px",
      zIndex:0
    },
    dotedImgBottom:{
      position: "absolute",
      bottom: "-66px",
      [theme.breakpoints.up('md')]: {
        right: "-60px",

    },
      right: "40px",
      width: "165px",
      height: "165px",
      zIndex:1
    }
  }));

  export { useStyles };
