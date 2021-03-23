import React, {useState} from 'react'
import MobilePricingBtn from './MobilePricingBtn'
import CheckRoundedIcon from '@material-ui/icons/CheckRounded';
import ClearRoundedIcon from '@material-ui/icons/ClearRounded';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'
import {Typography} from '@material-ui/core';

const MobilePricing = () => {
    const [active, setActive] = useState([
        {
            id: "Basic",
            active: true
        },
        {
            id: "Standard",
            active: false
        },
        {
            id: "Premium",
            active: false
        }
    ])

    const onClick = (id) => {
        setActive(active.map((active) => active.id == id ? ({...active, active: true}) : ({...active, active: false})))
    }

    const isActive = (id) => {
        let res
        active.map((active) => active.id == id ? res = active.active : active)
        return res
    }

    return (
        <div style={{display: 'block', width: '90%', margin: 'auto', marginTop: '3%'}}>
            <MobilePricingBtn plan={true} text="Basic" onClick={onClick} active={isActive("Basic")}></MobilePricingBtn><MobilePricingBtn plan={true} text="Standard" onClick={onClick} active={isActive("Standard")}></MobilePricingBtn><MobilePricingBtn plan={true} text="Premium" onClick={onClick} active={isActive("Premium")}></MobilePricingBtn>
            <div className={`basic ${isActive("Basic") ? "show" : "hide"}`}>
                <div>
                    <h2>AU$75.00 p/m</h2>
                    <h3>BMS Breeze Basic Plan</h3>
                </div>
                <div>
                    <p>3 Users (max)</p>
                    <p><ClearRoundedIcon fontSize="small" color="primary" /> Unlimited Document Storage</p>
                    <p><ClearRoundedIcon /> Traning</p>
                    <p><ClearRoundedIcon /> Intergration</p>
                </div>
                <Button variant="contained" color="primary">
                    <Link to='/buy-basic' className="nostyle">Buy BASIC</Link>
                </Button>
            </div>
            <div className={`standard ${isActive("Standard") ? "show" : "hide"}`}>
                <div>
                    <h2>AU$150.00 p/m</h2>
                    <h3>BMS Breeze Standard Plan</h3>
                </div>
                <div>
                    <p>10 Users (max)</p>
                    <p><CheckRoundedIcon /> Unlimited Document Storage</p>
                    <p><CheckRoundedIcon /> 5 Hours of Traning included</p>
                    <p><CheckRoundedIcon /> Intergration on set up</p>
                </div>
                <Button variant="contained" color="primary">
                    <Link to='/buy-standard' className="nostyle">Buy STANDARD</Link>
                </Button>
            </div>
            <div className={`premium ${isActive("Premium") ? "show" : "hide"}`}>
                <div>
                    <h2>AU$400.00 p/m</h2>
                    <h3>BMS Breeze Premium Plan</h3>
                </div>
                <div>
                    <p>25 Users (max)</p>
                    <p><CheckRoundedIcon /> Unlimited Document Storage</p>
                    <p><CheckRoundedIcon /> 10 Hours of Traning included</p>
                    <p><CheckRoundedIcon /> Intergration on set up</p>
                </div>
                <Button variant="contained" color="primary">
                    <Link to='/buy-premium' className="nostyle">Buy PREMIUM</Link>
                </Button>
            </div>
            <Typography color="primary" className="desc-body2">
                    <br />
                    <i>*The 14 Day free trial gives the user full use of the BASIC plan for the entire 14 Days.</i>
                    <br /><br /><br />
            </Typography>
            <Typography variant="h3" color="primary" className="desc-body2">
                    Additional Prices
                    <br /><br />
            </Typography>
            <div className={`basic`}>
                <div>
                    <h2>Additional Training</h2>
                    <h3>AU$75.00 per hour</h3>
                </div>
                <div>
                    <p><i>Hourly rate for extra training</i></p>
                </div>
            </div>
            <div className={`standard`}>
                <div>
                    <h2>Consulting Fee</h2>
                    <h3>AU$100.00 per hour</h3>
                </div>
                <div>
                    <p><i>Hourly rate for requested work</i></p>
                </div>
            </div>
            <div className={`premium`}>
                <div>
                    <h2>Intergration</h2>
                    <h3>AU$120.00 each</h3>
                </div>
                <div>
                    <p><i>Cost of intergration from previous platform or new data</i></p>
                </div>
            </div>
            <Typography variant="h6" color="primary" className="desc-body2">
                    <br />
                    If you would like any of these additional services, please <Link className="navlink-mobile2" to='/contact'><strong><u>Contact Us</u></strong></Link>.
            </Typography>
            <Typography color="primary" className="desc-body2">
                    <br />
                    <i>*All prices are valid until xx/xx/xxxx and are represented in AUD.</i>
                    <br /><br /><br />
            </Typography>
        </div>
    )
}

export default MobilePricing
