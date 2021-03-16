import React from 'react'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const FeatureItem = ({icon, desc}) => {
    return (
        <div className="feature-item">
            <div className="icon">
                <span>{icon}</span>
            </div>
            <Typography variant="h6" color="secondary">{desc}</Typography>
            <br />
            <Button variant="contained" color="secondary">
                Learn More
            </Button>
            <br /><br />
        </div>
    )
}

export default FeatureItem
