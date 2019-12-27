import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';



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
    <Grid container className={classes.root} spacing={2} style={{ width: '99%',textAlign:"center"}}  >
      <Grid item xs={3}>
        <Paper className={classes.control}>
        <Paper className={classes.control} style={{backgroundColor:"#192a56",width:'100%',marginBottom:"30px"}}>
         
          </Paper>
          <p style={{color:"#192a56",fontWeight:"bold"}}>

        Artificial Intelligence 
          </p>
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.control}>
        <Paper className={classes.control} style={{backgroundColor:"#e1006a",width:'100%',marginBottom:"30px"}}>
         
         </Paper>
        <p style={{color:"#e1006a",fontWeight:"bold"}}>
        Cloud Native and Mobile App
        </p>
        </Paper>
      </Grid>
      <Grid item xs={3}>
        <Paper className={classes.control}>
        <Paper className={classes.control} style={{backgroundColor:"#fbc314",width:'100%',marginBottom:"30px"}}>
         
         </Paper>
        <p style={{color:"#fbc314",fontWeight:"bold"}}>
        Blockchain
        </p>
        </Paper>
      </Grid>

      <Grid item xs={3}>
        <Paper className={classes.control}>
        <Paper className={classes.control} style={{backgroundColor:"#1b8f8b",width:'100%',marginBottom:"30px"}}>
         
         </Paper>
        <p style={{color:"#1b8f8b",fontWeight:"bold"}}>
        Internet of Things and AI
        </p>
        </Paper>
      </Grid>
    </Grid>
  
    </div>
  );
}