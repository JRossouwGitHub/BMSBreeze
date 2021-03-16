import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NestedList from '../components/NestedList'
import { Typography } from '@material-ui/core';

const FAQS = {
    items: [
        {
            id: 1,
            title: "Question 1",
            desc: "Answer 1",
            open: false
        },
        {
            id: 2,
            title: "Question 2",
            desc: "Answer 2",
            open: false
        },
        {
            id: 3,
            title: "Question 3",
            desc: "Answer 3",
            open: false
        },
        {
            id: 4,
            title: "Question 4",
            desc: "Answer 4",
            open: false
        },
        {
            id: 5,
            title: "Question 5",
            desc: "Answer 5",
            open: false
        },
        {
            id: 6,
            title: "Question 6",
            desc: "Answer 6",
            open: false
        },
        {
            id: 7,
            title: "Question 7",
            desc: "Answer 7",
            open: false
        },
        {
            id: 8,
            title: "Question 8",
            desc: "Answer 8",
            open: false
        },
        {
            id: 9,
            title: "Question 9",
            desc: "Answer 9",
            open: false
        }
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

const Faq = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.container} ${isMobile ? classes.containerMobile : null}`}>
            <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                F.A.Q
                {!isMobile ? (<><br /></>) : null}
            </Typography>
            <NestedList content={FAQS} type="faq" />
        </div>
    )
}

export default Faq
