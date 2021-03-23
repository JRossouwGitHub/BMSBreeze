import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const VerifyAccount = () => {
    const [code, setCode] = useState('')
    return (
        <div>
            <Typography variant="h4" color="primary" className="desc-body2">
                A verification code was sent to your email, please enter your code below:
            </Typography>
            <br />
            <form style={{display: 'block', width: 'max-content', margin: 'auto'}}>
                <TextField
                        required
                        id="outlined"
                        label="Verification Code"
                        placeholder="Verification Code"
                        variant="outlined"
                        color="primary"
                        value={code}
                        onChange={() => setCode(event.target.value)}
                        size="small"
                    />
                    <br /><br />
                    <div style={{display: 'block', width: 'max-content', margin: 'auto'}}>
                        {!code ? 
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Resend Code
                            </Button> : 
                            <Button
                            variant="contained"
                            color="primary"
                            >
                                Verify Account
                            </Button>
                        }
                    </div>
            </form>
            <br /><br />
        </div>
    )
}

export default VerifyAccount
