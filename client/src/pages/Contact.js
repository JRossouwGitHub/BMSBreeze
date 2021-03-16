import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '2%',
        width: '98%',
      },
    },
    container: {
        flexGrow: 1,
    },
    item: {
        '& > *': {
            display: 'block',
            margin: '2% auto',
            width: '85%',
          },
    },
    form: {
        '& > *': {
            display: 'block',
            margin: '0 auto',
            width: '50%',
          },
    },
    button: {
        marginLeft: '2%',
    }
}));

const Contact = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const submitForm = (event) => {
        event.preventDefault()

        setName('')
        setEmail('')
        setSubject('')
        setMessage('')
    }

    return (
        <div className={classes.container}>
            <div>
                <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                    Contact
                    {!isMobile ? (<><br /><br /></>) : null}
                </Typography>
                <Grid 
                container 
                spacing={0}
                className={classes.grid}
                >
                    {!isMobile ? (<>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item} ${classes.form}`}>
                            <form className={`${classes.root} desc-body2`} autoComplete="on" onSubmit={submitForm}>
                                {isMobile ? <br /> : null}
                                <TextField
                                    required
                                    id="outlined"
                                    label="Name"
                                    placeholder="Name..."
                                    variant="outlined"
                                    color="primary"
                                    value={name}
                                    onChange={() => setName(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined"
                                    label="Email"
                                    placeholder="Email..."
                                    variant="outlined"
                                    color="primary"
                                    value={email}
                                    onChange={() => setEmail(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined"
                                    label="Subject"
                                    placeholder="Subject..."
                                    variant="outlined"
                                    color="primary"
                                    value={subject}
                                    onChange={() => setSubject(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Message"
                                    placeholder="Message..."
                                    multiline
                                    variant="outlined"
                                    color="primary"
                                    value={message}
                                    onChange={() => setMessage(event.target.value)}
                                />
                                <br />
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Submit
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item}`}>
                            <Typography variant="body1" color="primary">
                                <strong>Phone:</strong><br></br> 022 306 2988
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Email:</strong><br></br> office@bmsbreeze.com
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Hours (Mon-Fri):</strong><br></br> 9am - 4:30pm NZT
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Address:</strong><br></br>
                                Hamilton, Waikato 3204, New Zealand
                            </Typography>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100912.71019300644!2d175.17835039526398!3d-37.77780027210194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d227487a63621%3A0x500ef6143a29903!2sHamilton!5e0!3m2!1sen!2snz!4v1614381505414!5m2!1sen!2snz" 
                                width="600" 
                                height="450"
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </Grid>
                    </>) : (<>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item}`}>
                            <Typography variant="body1" color="primary">
                                <strong>Phone:</strong><br></br> <a className="phone" href="tel:+64-022-306-2988">+64 022 306 2988</a>
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Email:</strong><br></br> office@bmsbreeze.com
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Hours (Mon-Fri):</strong><br></br> 9am - 4:30pm NZT
                            </Typography>
                            <Typography variant="body1" color="primary">
                                <strong>Address:</strong><br></br>
                                Hamilton, Waikato 3204, New Zealand
                            </Typography>
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100912.71019300644!2d175.17835039526398!3d-37.77780027210194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d6d227487a63621%3A0x500ef6143a29903!2sHamilton!5e0!3m2!1sen!2snz!4v1614381505414!5m2!1sen!2snz" 
                                width="350" 
                                height="200"
                                allowFullScreen="" 
                                loading="lazy">
                            </iframe>
                        </Grid>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item}`}>
                            <br /><br /><br /><br />
                            <hr />
                            <form className={`${classes.root} desc-body2`} autoComplete="on" onSubmit={submitForm}>
                                {isMobile ? <br /> : null}
                                <TextField
                                    required
                                    id="outlined"
                                    label="Name"
                                    placeholder="Name..."
                                    variant="outlined"
                                    color="primary"
                                    value={name}
                                    onChange={() => setName(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined"
                                    label="Email"
                                    placeholder="Email..."
                                    variant="outlined"
                                    color="primary"
                                    value={email}
                                    onChange={() => setEmail(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined"
                                    label="Subject"
                                    placeholder="Subject..."
                                    variant="outlined"
                                    color="primary"
                                    value={subject}
                                    onChange={() => setSubject(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Message"
                                    placeholder="Message..."
                                    multiline
                                    variant="outlined"
                                    color="primary"
                                    value={message}
                                    onChange={() => setMessage(event.target.value)}
                                />
                                <br />
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Submit
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                    </>)}
                    
                </Grid>
            </div>
        </div>
    );
}

export default Contact
