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
      <Grid container className={classes.root} spacing={2} style={{ width: "100%" }} >
        <Grid item xs={8}>
         
            <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc"
              width="100%" height="500" frameborder="0" allowfullscreen />
        
        </Grid>
        <Grid item xs={4}>
        


            <div style={{
         
              width: '100%',
              height: '500px',
              overflow: 'auto'
            }}>

              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />
              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />
              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />
              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />
              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />
              <iframe src="http://www.youtube.com/embed/xy6OtjfKtTc" width="100%" height="250" frameborder="0" allowfullscreen />

            </div>


     
        </Grid>
      </Grid>

    </div>
  );
}