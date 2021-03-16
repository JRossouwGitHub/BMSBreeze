import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
          margin: '2%',
          width: '96%',
        },
      },
    container: {
        flexGrow: 1,
    },
    p: {
        display: 'block', 
        margin: '2% auto', 
        width: '75%',
        textAlign: 'left',
    },
    pMobile: {
        textAlign: 'left',
    },
}));

const About = () => {
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.container}>
            <div>
                <Typography variant={!isMobile ? "h2" : "h4"} color="primary" className="desc-body2">
                    <strong>About BMS Breeze</strong>
                    {!isMobile ? (<><br /><br /></>) : (<><br /><br /></>)}
                    <Typography variant="body1" style={{marginLeft: "4%", marginRight: "4%"}}>
                        BMS Breeze was started because we noticed that are some improvements that could be made, so we decided to make them!
                    </Typography>
                    {!isMobile ? (<><br /></>) : (<><br /></>)}
                </Typography>
                <Grid 
                container 
                spacing={0}
                className={classes.grid}
                >
                    <Grid item xs={12} md={6} className={`${classes.root}`}>
                        <Typography variant={!isMobile ? "h4" : "h5"} color="primary" className="desc-body2">
                            <strong>Our Mission:</strong>
                            {!isMobile ? <br /> : null}
                        </Typography>
                        <Typography color="primary" className={`desc-body2 ${!isMobile ? classes.p : classes.pMobile}`}>
                            BMS Breeze is focused on providing a business solution without all the headache. That means even if you aren't "tech savvy", BMS Breeze should still be, well, a breeze!
                        </Typography>
                        <Typography color="primary" className={`desc-body2 ${!isMobile ? classes.p : classes.pMobile}`}>
                            BMS Breeze is all about you, the customer. Whether you are the employer or the employee, BMS Breeze wants to meet and exceed all of your expectations.
                        </Typography>
                        {isMobile ? <br /> : null}
                    </Grid>
                    <Grid item xs={12} md={6} className={`${classes.root}`}>
                        <Typography variant={!isMobile ? "h4" : "h5"} color="primary" className="desc-body2">
                            <strong>Our Values:</strong>
                            {!isMobile ? <br /> : null}
                        </Typography>
                        <div className={`desc-body2 ${!isMobile ? classes.p : classes.pMobile}`}>
                            <Typography color="primary">
                                Above all else, BMS Breeze values the customers, after all they are the reason BMS Breeze exists! Every decision made on new features, where we put them and more, is centered around the customer. 
                                <br /><br />
                                Here at BMS Breeze we value the customer, but we also value:
                                {!isMobile ? (<><br /><br /></>) : null}
                            </Typography>
                            <strong>
                                <ul>
                                    <li>Integrity</li>
                                    <li>Trust</li>
                                    <li>Passion</li>
                                    <li>Hard Work</li>
                                    <li>Innovation</li>
                                    <li>Teamwork</li>
                                </ul>
                            </strong>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default About
