import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    container: {
        flexGrow: 1,
        color: '#0094FF'
    },
    button: {
        fontSize: '24px',
        marginTop: '3%',
        width: '100%',
    },
    bGroup: {
        display: 'block',
        margin: '0 auto',
        width: '400px'
    },
    bGroupMobile: {
        display: 'block',
        margin: '0 auto',
        width: '95%'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    },
}));

const LoginSignup = () => {
    const classes = useStyles()
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={classes.container}>
            <div>
                <Typography variant={!isMobile ? "h2" : "h4"} color="primary" className="desc-body2">
                    <strong>Login or Signup</strong>
                    {!isMobile ? (<><br /><br /></>) : (<><br /><br /></>)}
                </Typography>
                <div className={!isMobile ? classes.bGroup : classes.bGroupMobile}>
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Office
                    </Button>
                    <br />
                    <Button variant="outlined" color="primary" className={classes.button}>
                        Field
                    </Button>
                    {!isMobile ? (<>
                        <div>
                            <Link className={classes.link} to='/make-new-account'>Make a new account</Link>
                            <div style={{float: 'right'}}>
                                <Link className={classes.link} to='/'>Forgot password?</Link>
                            </div>
                        </div>
                        <br />
                        <i>If you are having any account related issues, please feel free to <Link className={classes.link} to='/support'><u>Contact our Support</u></Link> team.</i>
                    </>) : null}
                </div>
                {isMobile ? (<>
                    <br />
                    <div style={{display: 'block', margin: 'auto', width: '98%', textAlign: 'center'}}>
                        <div className="separator">
                            OR
                        </div>
                        <div className={classes.bGroupMobile} style={{fontSize: '18px'}}>
                            <Button variant="outlined" color="primary" className={classes.button}>
                                <Link className={classes.link} to='/'>Forgot Password</Link>
                            </Button>
                            <br /><br />
                            <Button variant="outlined" color="primary" className={classes.button}>
                                <Link className={classes.link} to='/make-new-account'>Make Account</Link>
                            </Button>
                        </div>
                        <br /><br />
                        <i>If you are having any account related issues, please feel free to <Link className={classes.link} to='/support'><u>Contact our Support</u></Link> team.</i>
                    </div>
                    
                </>) : null}
            </div>
        </div>
    )
}

export default LoginSignup
