import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    inputInline: {
        '& > *': {
            width: '100%',
            },
        display: 'inline-block',
        width: '50%',
        margin: 'auto',
        marginBottom: '1%',
        flexGrow: 1,
        zIndex: 0,
    },
    input: {
        '& > *': {
            width: '100%',
            },
        display: 'inline-block',
        width: '100%',
        margin: 'auto',
        marginBottom: '1%',
        flexGrow: 1,
        zIndex: 0,
    },
  }));

const AccountDetials = () => {
    const [state, setState] = React.useState({
        checkedA: false,
        checkedB: false,
        checkedF: false,
        checkedG: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };

    const [fName, setFName] = useState('')
    const [lName, setLName] = useState('')
    const [business, setBusiness] = useState('')
    const [website, setWebsite] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [cEmail, setCEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cPassword, setCPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [address1, setAddress1] = useState('')
    const [address2, setAddress2] = useState('')
    const [city, setCity] = useState('')
    const [town, setTown] = useState('')
    const [region, setRegion] = useState('')
    const [postcode, setPostcode] = useState('')
    const [country, setCountry] = useState('')

    const classes = useStyles();

    return (
        <div>
            <form>
                <TextField
                    required
                    id="outlined"
                    label="First Name"
                    placeholder="First Name"
                    variant="outlined"
                    color="primary"
                    value={fName}
                    onChange={() => setFName(event.target.value)}
                    size="small"
                    className={classes.inputInline}
                />
                <TextField
                    required
                    id="outlined"
                    label="Last Name"
                    placeholder="Last Name"
                    variant="outlined"
                    color="primary"
                    value={lName}
                    onChange={() => setLName(event.target.value)}
                    size="small"
                    className={classes.inputInline}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Business Name"
                    placeholder="Business Name"
                    variant="outlined"
                    color="primary"
                    value={business}
                    onChange={() => setBusiness(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    id="outlined"
                    label="Website"
                    placeholder="Website (optional)"
                    variant="outlined"
                    color="primary"
                    value={website}
                    onChange={() => setWebsite(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Username"
                    placeholder="Username"
                    variant="outlined"
                    color="primary"
                    value={username}
                    onChange={() => setUsername(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Email"
                    placeholder="Email"
                    variant="outlined"
                    color="primary"
                    value={email}
                    onChange={() => setEmail(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Confirm Email"
                    placeholder="Confirm Email"
                    variant="outlined"
                    color="primary"
                    value={cEmail}
                    onChange={() => setCEmail(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Password"
                    placeholder="Password"
                    variant="outlined"
                    color="primary"
                    type="password"
                    value={password}
                    onChange={() => setPassword(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Confirm Password"
                    placeholder="Confirm Password"
                    variant="outlined"
                    color="primary"
                    type="password"
                    value={cPassword}
                    onChange={() => setCPassword(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    id="outlined"
                    label="Mobile"
                    placeholder="Mobile (optional)"
                    variant="outlined"
                    color="primary"
                    value={mobile}
                    onChange={() => setMobile(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Address Line 1"
                    placeholder="Address Line 1"
                    variant="outlined"
                    color="primary"
                    value={address1}
                    onChange={() => setAddress1(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    id="outlined"
                    label="Address Line 2"
                    placeholder="Address Line 2 (optional)"
                    variant="outlined"
                    color="primary"
                    value={address2}
                    onChange={() => setAddress2(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="City"
                    placeholder="City"
                    variant="outlined"
                    color="primary"
                    value={city}
                    onChange={() => setCity(event.target.value)}
                    size="small"
                    className={classes.inputInline}
                />
                <TextField
                    required
                    id="outlined"
                    label="Town"
                    placeholder="Town"
                    variant="outlined"
                    color="primary"
                    value={town}
                    onChange={() => setTown(event.target.value)}
                    size="small"
                    
                    className={classes.inputInline}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Region"
                    placeholder="Region"
                    variant="outlined"
                    color="primary"
                    value={region}
                    onChange={() => setRegion(event.target.value)}
                    size="small"
                    className={classes.inputInline}
                />
                <TextField
                    required
                    id="outlined"
                    label="Postcode"
                    placeholder="Postcode"
                    variant="outlined"
                    color="primary"
                    value={postcode}
                    onChange={() => setPostcode(event.target.value)}
                    size="small"
                    className={classes.inputInline}
                />
                <br />
                <TextField
                    required
                    id="outlined"
                    label="Country"
                    placeholder="Country"
                    variant="outlined"
                    color="primary"
                    value={country}
                    onChange={() => setCountry(event.target.value)}
                    size="small"
                    className={classes.input}
                />
                <br /><br />
                <FormGroup row style={{color: '#0094FF'}}>
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedA}
                            onChange={handleChange}
                            name="checkedA"
                            color="primary"
                        />
                        }
                        label={<label>I am the owner of the business stated in the above form and assume all legal responisibility <Link className="navlink-mobile2" to='/' target="_blank"><strong>read more.</strong></Link></label>}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedB}
                            onChange={handleChange}
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label={<lable>I am of legal age and rights to proceed in doing business in my Country <Link className="navlink-mobile2" to='/' target="_blank"><strong>read more.</strong></Link></lable>}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedC}
                            onChange={handleChange}
                            name="checkedC"
                            color="primary"
                        />
                        }
                        label={<label>I understand that the account I am about to create is the Administration account and will be used as such <Link className="navlink-mobile2" to='/' target="_blank"><strong>read more.</strong></Link></label>}
                    />
                    <FormControlLabel
                        control={
                        <Checkbox
                            checked={state.checkedD}
                            onChange={handleChange}
                            name="checkedD"
                            color="primary"
                        />
                        }
                        label={<lable>I have read and accept the <Link className="navlink-mobile2" to='/terms-conditions' target="_blank"><strong>Terms {'&'} Conditions</strong></Link> for using BMS Breeze.</lable>}
                    />
                </FormGroup>
                <br />
            </form>
        </div>
    )
}

export default AccountDetials
