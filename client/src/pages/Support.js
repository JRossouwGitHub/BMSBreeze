import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AttachFileRoundedIcon from '@material-ui/icons/AttachFileRounded';

const issuesList = [
    {
      value: 'Account',
      label: 'Account',
    },
    {
      value: 'Payment',
      label: 'Payment',
    },
    {
      value: 'Security',
      label: 'Security',
    },
    {
      value: 'Other',
      label: 'Other',
    },
  ];

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: '2%',
        width: '98%',
      },
    },
    container: {
        flexGrow: 1,
        color: '#0094FF'
    },
    item: {
        '& > *': {
            display: 'block',
            margin: '2% auto',
            width: '85%',
          },
          textAlign: 'left'
    },
    form: {
        '& > *': {
            display: 'block',
            margin: '0 auto',
            width: '450px',
          },
          textAlign: 'left'
    },
    formMobile: {
        '& > *': {
            display: 'block',
            margin: '0 auto',
            width: '300px',
          },
          textAlign: 'left',
          marginLeft: '-1%'
    },
    button: {
        marginLeft: '2%',
    }
}));

const Support = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [issue, setIssue] = useState('')
    const [description, setDescription] = useState('')
    const [files, setFiles] = useState(null)
    const [code, setCode] = useState('')
    const [number, setNumber] = useState('')
    const [caseNumber, setCaseNumber] = useState('')

    const handleChange = (event) => {
        setIssue(event.target.value);
    };

    const handleChangeCode = (event) => {
        setCode(event.target.value);
        console.log(event.target.value)
    };

    const submitForm = (event) => {
        event.preventDefault()

        setName('')
        setEmail('')
        setIssue('')
        setDescription('')
    }

    const submitRequestCall = (event) => {
        event.preventDefault()

        setCode('')
        setNumber('')
        setCaseNumber('')
    }

    const handleFiles = (event) => {
        const _files = event.target.files
        setFiles(Array.from(_files))
        console.log(files)
    }


    return (
        <div className={classes.container}>
            <div>
                <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                    Support
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
                                    type="text"
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
                                    type="email"
                                    value={email}
                                    onChange={() => setEmail(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    id="outlined-select"
                                    required
                                    select
                                    label="Issue"
                                    value={issue}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    {issuesList.map((option) => (
                                        <MenuItem style={{textAlign: 'left'}} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <br />
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Description"
                                    placeholder="Description..."
                                    multiline
                                    variant="outlined"
                                    color="primary"
                                    value={description}
                                    onChange={() => setDescription(event.target.value)}
                                />
                                <br />
                                <input
                                    accept="*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    style={{display: 'none'}}
                                    onChange={handleFiles}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="outlined" color="primary" component="span" style={{width: '98%'}}>
                                       <AttachFileRoundedIcon /> Attach Supporting Documents
                                    </Button>
                                </label>
                                {files ? files.map((file) => (
                                        <p style={{textAlign: 'left'}} key={file.name} value={file.name}>
                                            {file.name}
                                        </p>
                                )) : null}
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Submit
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item} ${classes.form}`}>
                            <Typography variant={!isMobile ? "h5" : "h6"} color="primary" className="desc-body2">
                                If your issue is Urgent or has not been resolved in a reasonable time, please request a Support Call below:
                                {!isMobile ? (<><br /><br /></>) : null}
                            </Typography>
                            <form className={`${classes.root} desc-body2`} autoComplete="on" onSubmit={submitRequestCall}>
                                {isMobile ? <br /> : null}
                                <TextField
                                    id="outlined-select"
                                    required
                                    label="Code"
                                    value={code}
                                    onChange={() => setCode(event.target.value)}
                                    variant="outlined"
                                    placeholder="+64"
                                    style={{float: 'left', width: '22%'}}
                                >
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Number"
                                    placeholder="+64 123 456 789"
                                    variant="outlined"
                                    color="primary"
                                    value={number}
                                    onChange={() => setNumber(event.target.value)}
                                    style={{float: 'right', width: '70%'}}
                                />
                                <br />
                                <TextField
                                    id="outlined-textarea"
                                    label="Case Number"
                                    placeholder="+64 123 456 789"
                                    variant="outlined"
                                    color="primary"
                                    value={caseNumber}
                                    onChange={() => setCaseNumber(event.target.value)}
                                    placeholder="#123456... (if applicable)"
                                />
                                <br />
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Request Call
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                    </>) : (<>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item} ${classes.formMobile}`}>
                            <form className={`${classes.root} desc-body2`} autoComplete="on" onSubmit={submitForm}>
                                {isMobile ? <br /> : null}
                                <TextField
                                    required
                                    id="outlined"
                                    label="Name"
                                    type="text"
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
                                    type="email"
                                    value={email}
                                    onChange={() => setEmail(event.target.value)}
                                    size="small"
                                />
                                <br />
                                <TextField
                                    id="outlined-select"
                                    required
                                    select
                                    label="Issue"
                                    value={issue}
                                    onChange={handleChange}
                                    variant="outlined"
                                >
                                    {issuesList.map((option) => (
                                        <MenuItem style={{textAlign: 'left'}} key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))}
                                </TextField>
                                <br />
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Description"
                                    placeholder="Description..."
                                    multiline
                                    variant="outlined"
                                    color="primary"
                                    value={description}
                                    onChange={() => setDescription(event.target.value)}
                                />
                                <br />
                                <input
                                    accept="*"
                                    id="contained-button-file"
                                    multiple
                                    type="file"
                                    style={{display: 'none'}}
                                    onChange={handleFiles}
                                />
                                <label htmlFor="contained-button-file">
                                    <Button variant="outlined" color="primary" component="span" style={{width: '98%'}}>
                                       <AttachFileRoundedIcon /> Attach Supporting Documents
                                    </Button>
                                </label>
                                {files ? files.map((file) => (
                                        <p style={{textAlign: 'left'}} key={file.name} value={file.name}>
                                            {file.name}
                                        </p>
                                )) : null}
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Submit
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                        <Grid item xs={12} md={6} className={`${classes.root} ${classes.item} ${classes.formMobile}`}>
                            <Typography variant={!isMobile ? "h5" : "h6"} color="primary" className="desc-body2">
                                <strong>If your issue is <u>Urgent</u> or has not been resolved in a reasonable time, please request a Support Call below:</strong>
                                {!isMobile ? (<><br /><br /></>) : null}
                            </Typography>
                            <form className={`${classes.root} desc-body2`} autoComplete="on" onSubmit={submitRequestCall}>
                                {isMobile ? <br /> : null}
                                <TextField
                                    id="outlined-select"
                                    required
                                    label="Code"
                                    value={code}
                                    onChange={() => setCode(event.target.value)}
                                    variant="outlined"
                                    placeholder="+64"
                                    style={{float: 'left', width: '22%'}}
                                >
                                </TextField>
                                <TextField
                                    required
                                    id="outlined-textarea"
                                    label="Number"
                                    placeholder="+64 123 456 789"
                                    variant="outlined"
                                    color="primary"
                                    value={number}
                                    onChange={() => setNumber(event.target.value)}
                                    style={{float: 'right', width: '70%'}}
                                />
                                <br />
                                <TextField
                                    id="outlined-textarea"
                                    label="Case Number"
                                    placeholder="+64 123 456 789"
                                    variant="outlined"
                                    color="primary"
                                    value={caseNumber}
                                    onChange={() => setCaseNumber(event.target.value)}
                                    placeholder="#123456... (if applicable)"
                                />
                                <br />
                                <Button variant="contained" color="primary" type="submit" className={classes.button}>
                                    Request Call
                                </Button>
                                <br /><br />
                            </form>
                        </Grid>
                    </>)}
                </Grid>
            </div>
        </div>
    )
}

export default Support
