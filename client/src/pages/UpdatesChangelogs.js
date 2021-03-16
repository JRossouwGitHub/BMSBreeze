import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NestedList from '../components/NestedList'
import { Typography } from '@material-ui/core';

const Updates = {
    items: [
        {
            id: 5,
            title: "Update 0.0.5",
            desc: "- Remaining pages' content * - Responsive lists",
            changed: "None",
            bugs: "0 Found * 2 Fixed: * - Services Dropdown on Mobile now closes when item is clicked * - Loading a page from URL now serves the pages",
            open: false
        },
        {
            id: 4,
            title: "Update 0.0.4",
            desc: "- Home/About/Contact/Support page contents * - Heroku Deployment * - Scroll to top button * - Links in Footer",
            changed: "None",
            bugs: "2 Found: * - Services Dropdown on Mobile doesn't close when item is clicked * - Loading a page from URL doesn't serve the pages * 0 Fixed",
            open: false
        },
        {
            id: 3,
            title: "Update 0.0.3",
            desc: "- React * - Client * - Components/CSS/Layout/Pages * - Responsive Navigation",
            changed: "- Changed Server port",
            bugs: "0 Found * 0 Fixed",
            open: false
        },
        {
            id: 2,
            title: "Update 0.0.2",
            desc: "- XERO",
            changed: "- XERO entry point has been moved on server",
            bugs: "0 Found * 0 Fixed",
            open: false
        },
        {
            id: 1,
            title: "Update 0.0.1",
            desc: "- NodeJS * - Entry point on server",
            changed: "None",
            bugs: "0 Found * 0 Fixed",
            open: false
        },
        // {
        //     id: 6,
        //     title: "Update 6",
        //     desc: "Added 6",
        //     changed: "Changed 6",
        //     bugs: "Bugs 6",
        //     open: false
        // },
        // {
        //     id: 7,
        //     title: "Update 7",
        //     desc: "Added 7",
        //     changed: "Changed 7",
        //     bugs: "Bugs 7",
        //     open: false
        // },
        // {
        //     id: 8,
        //     title: "Update 8",
        //     desc: "Added 8",
        //     changed: "Changed 8",
        //     bugs: "Bugs 8",
        //     open: false
        // },
        // {
        //     id: 9,
        //     title: "Update 9",
        //     desc: "Added 9",
        //     changed: "Changed 9",
        //     bugs: "Bugs 9",
        //     open: false
        // }
    ]
} 

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
}));

const UpdatesChangelogs = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.container} ${isMobile ? classes.containerMobile : null}`}>
            <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                Updates {'&'} Change Logs
                {!isMobile ? (<><br /></>) : null}
            </Typography>
            <NestedList content={Updates} type="updates" />
        </div>
    )
}

export default UpdatesChangelogs
