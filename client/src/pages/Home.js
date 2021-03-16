import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TakeControl from '../img/TakeControl.jpg'
import Team from '../img/Team.jpg'
import XeroLogo from '../img/icons/XeroLogo.png'
import MyobLogo from '../img/icons/MyobLogo.png'
import QBLogo from '../img/icons/QBLogo.png'
import FeatureItem from '../components/FeatureItem'
import WorkOutlineRoundedIcon from '@material-ui/icons/WorkOutlineRounded';
import EventAvailableRoundedIcon from '@material-ui/icons/EventAvailableRounded';
import ListAltRoundedIcon from '@material-ui/icons/ListAltRounded';
import PhonelinkSetupRoundedIcon from '@material-ui/icons/PhonelinkSetupRounded';
import AttachMoneyRoundedIcon from '@material-ui/icons/AttachMoneyRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import PaymentRoundedIcon from '@material-ui/icons/PaymentRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    grid: {
        padding: '3%',
        fontSize: '24px',
    },
    p: {
        fontSize: '24px',
    },
    mobile: {
        fontSize: '18px',
        textAlign: 'center',
    },
}));

const Home = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.root}>
            <div>
                <Grid 
                container 
                spacing={0}
                justify="center"
                alignItems="center"
                className={classes.grid}
                style={{color: "#0094FF"}}
                >
                    {!isMobile ? (<>
                        <Grid item xs={12} md={8}>
                            <div className="desc-body">
                                <Typography color="primary" className={classes.p}>
                                    Take control of your business with BMS Breeze, the business management tool that does it all!
                                </Typography>
                                <Button variant="contained" color="primary">
                                    <Link to='/login-signup' className="nostyle">Get Started</Link>
                                </Button>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <img src={TakeControl} className="desc-img" alt="Take Control"></img>
                        </Grid>
                    </>) : (<>
                        <Grid item xs={12} md={4}>
                            <img src={TakeControl} className="desc-img" alt="Take Control"></img>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <div className={classes.mobile}>
                                <br />
                                <Typography color="primary" className={classes.mobile}>
                                    Take control of your business with BMS Breeze, the business management tool that does it all!
                                </Typography>
                                <br />
                                <Button variant="contained" color="primary">
                                    <Link to='/login-signup' className="nostyle">Get Started</Link>
                                </Button>
                            </div>
                        </Grid>
                    </>)}
                </Grid>
            </div>
            <div>
                <Grid 
                container 
                spacing={0}
                justify="center"
                alignItems="center"
                className={classes.grid}
                style={{backgroundColor: "#0094FF", color: "white"}}
                >
                    <Grid item xs={12} md={4}>
                        <img src={Team} className="desc-img" alt="Team"></img>
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <div className={!isMobile ? "desc-body" : classes.mobile}>
                            {isMobile ? <br /> : null}
                            <Typography color="secondary" className={!isMobile ? classes.p : classes.mobile}>
                                A Business Management System for all businesses, no matter how small or large!
                            </Typography>
                            {isMobile ? <br /> : null}
                            <Button variant="contained" color="secondary" onClick={() => document.getElementById('featuresDiv').scrollIntoView()}>
                                Learn More
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid 
                container 
                spacing={0}
                justify="center"
                alignItems="center"
                className={classes.grid}
                style={{color: "#0094FF"}}
                >
                    <Grid item xs={12}>
                        <div className="desc-body2">
                            <Typography variant={!isMobile ? "h2" : "h4"} color="primary">
                                Why BMS Breeze?
                            </Typography>
                            <br /><br />
                            <Typography variant={!isMobile ? "h4" : "h6"} color="primary">
                                BMS Breeze is a fully functioning business management tool. That means you can take care of and track everything from before, during and after a job.
                            </Typography>
                            <br /><br />
                            <Typography variant={!isMobile ? "h4" : "h6"} color="primary">
                                BMS Breeze is also fully integrated with XERO, MYOB and QuickBooks.
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="int-img-container">
                            <img src={XeroLogo} className="int-img" alt="XERO"></img>
                            <img src={MyobLogo} className="int-img" alt="MYOB"></img>
                            <img src={QBLogo} className="int-img" alt="QuickBooks"></img>
                        </div>
                    </Grid>
                </Grid>
                <br />
            </div>
            <div id="featuresDiv">
                <Grid 
                container 
                spacing={0}
                className={classes.grid}
                style={{backgroundColor: "#0094FF", color: "white"}}
                >
                    <Grid
                    container 
                    spacing={8}
                    style={{width: "100%", margin: "0"}}
                    >
                        <div className="desc-body2">
                            <Typography variant={!isMobile ? "h2" : "h5"} color="secondary">
                                What BMS Breeze can do:
                                <br /><br />
                            </Typography>
                        </div>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<WorkOutlineRoundedIcon color="secondary" fontSize="large" />} desc="Stay on top of every job from first contact to final invoice, and everything in between." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<EventAvailableRoundedIcon color="secondary" fontSize="large" />} desc="Allocate and notify the right person for the right job, with a simple drag and drop." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<ListAltRoundedIcon color="secondary" fontSize="large" />} desc="Quickly and precisely log time spent on jobs, without any manual paperwork." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<PhonelinkSetupRoundedIcon color="secondary" fontSize="large" />} desc="The freedom to run your business from any location, on any device." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<AttachMoneyRoundedIcon color="secondary" fontSize="large" />} desc="Track every job cost – labour, materials, expenses, supplier orders – all in real-time." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<DescriptionRoundedIcon color="secondary" fontSize="large" />} desc="Send invoices instantly ensuring prompt payment and positive cash flow." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<LocationOnRoundedIcon color="secondary" fontSize="large" />} desc="Know who, what, when and where with AroFlo’s location-based capabilities." />
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <FeatureItem icon={<PaymentRoundedIcon color="secondary" fontSize="large" />} desc="Get paid on-the-spot with secure credit card payments from your smartphone." />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <br /><br />
                        <Button variant="contained" color="secondary" style={{display: "block", margin: "0 auto"}}>
                            All Features
                        </Button>
                        <br />
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid 
                container 
                spacing={0}
                justify="center"
                alignItems="center"
                className={classes.grid}
                style={{color: "#0094FF"}}
                >
                    <Grid item xs={12}>
                        <div className="desc-body2">
                            <Typography variant={!isMobile ? "h2" : "h4"} color="primary">
                                Watch a demo of BMS Breeze in action!
                            </Typography>
                            <br /><br />
                            {!isMobile ? <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='900'
                                height='400'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            /> : 
                            <iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />}
                            <br /><br /><br /><br />
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="desc-body2">
                            <Typography variant={!isMobile ? "h2" : "h4"} color="primary">
                                So what are you waiting for?
                            </Typography>
                            <br />
                            <Typography variant={!isMobile ? "h2" : "h4"} color="primary">
                                Take control of your business today with <strong>BMS Breeze!</strong>
                            </Typography>
                            <br /><br />
                            <Button variant="contained" color="primary" style={{display: "block", margin: "0 auto"}}>
                                <Link to='/contact' className="nostyle">Contact Us</Link>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <br />
            </div>
        </div>
    )
}

export default Home
