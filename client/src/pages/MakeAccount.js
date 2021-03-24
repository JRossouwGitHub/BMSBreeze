import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AccountDetials from '../components/AccountDetials'
import AccountingSoftware from '../components/AccountingSoftware'
import VerifyAccount from '../components/VerifyAccount'
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'block',
      width: '75%',
      margin: 'auto',
      flexGrow: 1,
    },
    rootMobile: {
        display: 'block',
        width: '100%',
        margin: 'auto',
        flexGrow: 1,
      },
    button: {
      marginRight: '0',
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
  
  function getSteps() {
    return ['Account Details', 'Accounting Software (optional)', 'Verify Account'];
  }
  
  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AccountDetials />;
      case 1:
        return <AccountingSoftware />;
      case 2:
        return <VerifyAccount />;
      default:
        return 'Done';
    }
}

const MakeAccount = () => {
    const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const freeTrialEndDate = () => {
    const trialDate = new Date(Date.now() + 12096e5)
    const month = trialDate.getMonth()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const day = trialDate.getDate()
    const year = trialDate.getFullYear()

    if(day < 10) {
        return ("0" + day + "/" + months[month] + "/" + year)
    } else {
        return (day + "/" + months[month] + "/" + year)
    }
  }

  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        
        <div className={!isMobile ? classes.root : classes.rootMobile}>
            <Typography variant={!isMobile ? "h2" : "h4"} color="primary" className="desc-body2">
                Create a BMS Breeze account
                {!isMobile ? (<><br /></>) : null}
            </Typography>
            <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
                const stepProps = {};
                const labelProps = {};
                if (isStepOptional(index)) {
                labelProps.optional = <Typography variant="caption"></Typography>;
                }
                if (isStepSkipped(index)) {
                stepProps.completed = false;
                }
                return (
                <Step key={label} {...stepProps}>
                    <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
                );
            })}
            </Stepper>
            <div>
            {activeStep === steps.length ? (
                <div style={{marginLeft: '3%', marginRight: '3%'}}>
                    <Typography variant={isMobile ? "h4" : "h2"} color="primary" className="desc-body2">
                        DONE!
                    </Typography>
                    <br /><br /><br />
                    <Typography color="primary" className="desc-body2">
                        Your 14 Day Free Trial (<Link className="navlink-mobile2" to='/' target="_blank"><strong>read more</strong></Link>) has started and will end on <strong>{freeTrialEndDate()}</strong>.
                    </Typography>
                    <br />
                    <Typography color="primary" className="desc-body2">
                        You can select a <Link className="navlink-mobile2" to='/pricing'><strong>Plan</strong></Link> now and be charged for the first time at the end of the Free Trial period or just wait until the Free Trial ends.
                    </Typography>
                    <br />
                    <Typography color="primary" className="desc-body2">
                        Thank you for signing up with BMS Breeze!
                    </Typography>
                    <br /><br /><br /><br />
                    <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            Continue to BMS Breeze
                        </Button>
                    </div>
                </div>
            ) : (
                <div>
                <div className={classes.instructions} style={!isMobile ? {display: 'block', width: '50%', margin: 'auto'} : {display: 'block', width: '80%', margin: 'auto'}}>{getStepContent(activeStep)}</div>
                <div style={!isMobile ? {display: 'block', width: '50%', margin: 'auto'} : {display: 'block', width: '80%', margin: 'auto'}}>
                    <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button} variant="contained" color="secondary">
                        Back
                    </Button>
                    {isStepOptional(activeStep) && (
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSkip}
                        className={classes.button}
                        style={{marginLeft: '3%'}}
                    >
                        Skip
                    </Button>
                    )}
    
                    <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                    style={!isMobile ? {float: 'right'} : {marginLeft: '3%'}}
                    >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                    </Button>
                </div>
                </div>
            )}
            </div>
            <br />
        </div>
    )
}

export default MakeAccount
