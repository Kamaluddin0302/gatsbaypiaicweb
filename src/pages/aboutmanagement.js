
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ZiaKhan from "./../Images/download.jpg";
import Pana from "../images/panacloudLogo.9b5ef574.svg";
import Psx from "../images/psx2.c50b5ae4.png";
import Saylani from "../images/saylaniLogo.c2a52d0a.png";
// import Footer from "../components/footer.js";
import Navbar from './../components/navbar'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
    width:250,
    
  },
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <div>
      <Navbar />
<div style={{width:"60%",margin:"auto"}}>
  <div> <center><p style={{fontWeight:"600",fontSize:"30px",color:"#017969",marginBottom:"100px",marginTop:"50px",fontFamily:"sans-serif"}}>Management Committee</p></center>
    <center></center></div>
    <Grid container className={classes.root} spacing={2} style={{ width: '99%',textAlign:"center"}}  >
      <Grid item xs={2.5}>
        <Paper className={classes.control}>
        {/* <Paper className={classes.control} style={{width:'100%',marginBottom:"30px"}}> */}
         
          {/* </Paper> */}
        <center><img src={ZiaKhan} width="150" height="150" style={{marginTop:"20",padding:"5px",border:"2px solid #20c997",borderRadius:"100%"}}/></center>

          <p style={{fontWeight:"bold",fontFamily:"sans-serif"}}>

          Kazi Rahat Ali
          </p>
               <center><p style={{fontSize:"12px"}}>General Secretary PIAIC

</p></center>

        
        </Paper>
      </Grid>

      <Grid item xs={2.5}>
        <Paper className={classes.control}>
        {/* <Paper className={classes.control} style={{backgroundColor:"#e1006a",width:'100%',marginBottom:"30px"}}>
         
         </Paper> */}
    <center><img src={ZiaKhan} width="150" height="150" style={{marginTop:"20",padding:"5px",border:"2px solid #20c997",borderRadius:"100%"}}/></center>

        <p style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
        Zia Ullah Khan
        </p>
                <center><p style={{fontSize:"12px"}}> CEO - Panacloud Pvt. Ltd.</p></center>

        </Paper>
      </Grid>
      <Grid item xs={2.5}>
        <Paper className={classes.control}>
        {/* <Paper className={classes.control} style={{backgroundColor:"#fbc314",width:'100%',marginBottom:"30px"}}>
         
         </Paper> */}
  <center><img src={ZiaKhan} width="150" height="150" style={{marginTop:"20",padding:"5px",border:"2px solid #20c997",borderRadius:"100%"}}/></center>

        <p style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
        Yousuf Lakhani
        </p>
              <center><p style={{fontSize:"12px"}}> President - Saylani Welfare Trust</p></center>

        </Paper>
      </Grid>

      <Grid item xs={2.5}>
        <Paper className={classes.control}>
        {/* <Paper className={classes.control} style={{backgroundColor:"#1b8f8b",width:'100%',marginBottom:"30px"}}>
         
         </Paper> */}
     <center><img src={ZiaKhan} width="150" height="150" style={{marginTop:"20",padding:"5px",border:"2px solid #20c997",borderRadius:"100%"}}/></center>

        <p style={{fontWeight:"bold",fontFamily:"sans-serif"}}>
        Sulaiman Mehdi
        </p>
             <center><p style={{fontSize:"12px"}}> Chairman of The Board - Pakistan Stock Exchange</p></center>

        </Paper>
      </Grid>
    </Grid>
      <center><p style={{borderTop:'50px',fontFamily:"sans-serif", fontSize:"30px",color:"#017969",marginTop:"100px"}}>STRATEGIC PARTNERS</p></center>
 <br/><center>
 <img src={Pana} width="130" height="50"style={{margin:"20px",marginLeft:"50px"}}/>
 <img src={Psx} width="50" height="50"style={{margin:"20px",marginLeft:"40px"}}/>
 <img src={Saylani} width="180" height="50"style={{margin:"20px",marginLeft:"40px"}}/>
 </center>
</div>
 {/* <Footer style={{width:"100%"}} /> */}
    </div>
  );
}