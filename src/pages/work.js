import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import work from './../styles/work.module.scss'
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
    const classes = useStyles();


    return (
        <div className={work.maindiv}>
            <Grid container className={classes.root}>
                <Grid item xs={12} lg={12}>
                    <div className={work.workdiv}>
                        <span className={work.work}>How It work</span>
                    </div>
                </Grid>

                <div className={work.round1}>
                    <Grid container className={classes.root}>
                        <Grid item xs={12} lg={4} sm={4} >
                            <span className={work.round}>
                                1
                        </span>
                        </Grid>
                        <Grid item xs={12} lg={8} sm={8} >

                            <span className={work.round1text}>

                                PIAIC will launch classes in the following locations, one city at a time, in the following order
                        </span>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
            <Grid container className={classes.root}>
                <Grid item xs={12} lg={6} sm={4} >
                    <div>
                        <img src="https://www.piaic.org/static/media/pakMap.920e8f6a.png" height="250px" className={work.mapimage} />
                    </div>
                </Grid>
                <Grid item xs={12} lg={6} sm={4} >
                    <div className={work.citydiv}>
                        <span className={work.city}>City by City Roadmap</span><br /><br />
                       
                            <div className={work.singlesity}>
                                <span style={{ color: '#00d19c' }}>1</span>
                                <span className={work.roundcity}></span>
                                <span className={work.cityname}> Karachi</span>
                                <span className={work.classes1}>classes Started</span>
                            </div>


                     
                       
                      
                    </div>

                </Grid>
            </Grid>
        </div>

    );
}