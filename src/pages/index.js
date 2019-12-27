import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import PreImg from './../images/president.png'
import AvailablePrograms from './../components/availableprogram/availableprogram'
import Videos from './../components/videos/videos'
import Imageshome from './../components/imageshome/imageshome'
import './main.css'
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
      <Grid container className={classes.root} className="hhfkjdhfkjh" style={{ width: '99.9%', margin: "2px" }} >
        <Grid item xs={6}>
          {/* <Paper className={classes.control}> */}
          <img src={PreImg} alt="President Picture"     width = '60%' style ={{marginLeft : "5%", marginTop:'5vh'}} />
          {/* </Paper> */}
        </Grid>
        <Grid item xs={6}>
          {/* <Paper className={classes.control}> */}
          <h1 style={{ marginTop: "20vh", fontSize: "50px" }}>Presidential Initiative</h1>
          <p style={{ fontSize: "25px" }}>for Artificial Intelligence & Computing (PIAIC)</p>
          <p>The mission of PIAIC is to reshape Pakistan by revolutionizing education, research, and business by adopting latest, cutting-edge technologies. Experts are calling this the 4th industrial revolution. We want Pakistan to become a global hub for AI, data science, cloud native computing, edge computing, blockchain, augmented reality, and internet of things.</p>

          <p style={{ float: "right", margintRight: "10%" }}>
            <span style={{ fontSize: "50px" }}>

              65K+
          </span><br />
            <span style={{ fontSize: "15px" }}>
              Applications Received
   </span>
          </p>

          {/* </Paper> */}
        </Grid>
      </Grid>
      <AvailablePrograms />
      <br />
      <br />
      <div style={{ backgroundColor: "#2b2929", paddingTop: "58px", paddingLeft: "50px", paddingRight: "50px", paddingBottom: "50px" }}>
        <h1 style={{ color: "white" }}>Videos</h1>
        <Videos />
        <h4 style={{ color: "#8acdbc" }}>PIAIC Launch - President Arif Alvi Address</h4>
        <p style={{ color: "white" }}>Presidential address at the launch of the Presidential Initiative for Artificial Intelligence and<br />
          Computing on December 9, 2018.</p>

      </div>


      <div style={{ backgroundColor: "#00bf9a", paddingTop: "58px", paddingLeft: "50px", paddingRight: "50px", paddingBottom: "50px",padding:"30px" }}>
      <h1 style={{ color: "white" }}>Images</h1>
        <Imageshome />
        </div>
    </div>
  );
}