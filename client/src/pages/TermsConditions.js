import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        color: '#0094FF',
        display: 'block',
        width: '75%',
        margin: 'auto'
    },
    containerMobile: {
        width: '95%',
    },
    heading: {
        marginLeft: '2%',
        display: 'block',
        fontSize: '2em',
        marginTop:'0.67em',
        marginBottom: '0.67em',
        fontWeight: 'bold',
    },
    subHeading: {
        marginLeft: '4%',
        display: 'block',
        fontSize: '1.5em',
        marginTop:'0.83em',
        marginBottom: '0.83em',
        fontWeight: 'bold',
    },
    contents: {
        marginLeft: '6%',
        fontSize: '20px'
    },
}));

const TermsConditions = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.container} ${isMobile ? classes.containerMobile : null}`}>
             <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                BMS Breeze Terms {'&'} Conditions
                {!isMobile ? (<><br /></>) : null}
            </Typography>
            <div>
                <Typography color="primary" className={classes.heading}>
                    1. Heading
                </Typography>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        1.1 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        1.2 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
            </div>
            <div>
                <Typography color="primary" className={classes.heading}>
                    2. Heading
                </Typography>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        2.1 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        2.2 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
            </div>
            <div>
                <Typography color="primary" className={classes.heading}>
                    3. Heading
                </Typography>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        3.1 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
                <div>
                    <Typography color="primary" className={classes.subHeading}>
                        3.2 Sub Heading
                    </Typography>
                    <Typography color="primary" className={classes.contents}>
                        Contents
                    </Typography>
                </div>
            </div>
            <br /><br />
        </div>
    )
}

export default TermsConditions
