import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import XeroLogo from '../img/icons/XeroLogo.png'
import MyobLogo from '../img/icons/MyobLogo.png'
import QBLogo from '../img/icons/QBLogo.png'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        width: '100%',
        margin: 'auto',
        flexGrow: 1,
    },
    inline: {
        width: '33%',
        display: 'inline-block',
    }
  }));

const AccountingSoftware = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.inline}>
                <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                    <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                        <img src={XeroLogo} className="int-img" alt="XERO"></img><br />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Connect XERO
                    </Button>
                </div>
            </div>
            <div className={classes.inline}>
                <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                    <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                        <img src={MyobLogo} className="int-img" alt="MYOB"></img><br />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Connect MYOB
                    </Button>
                </div>
            </div>
            <div className={classes.inline}>
                <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                    <div style={{display:'block', width: 'max-content', margin: '0 auto'}}>
                        <img src={QBLogo} className="int-img" alt="QuickBooks"></img><br />
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                    >
                        Connect QuickBooks
                    </Button>
                </div>
            </div>
            <br /><br /><br />
        </div>
    )
}

export default AccountingSoftware
