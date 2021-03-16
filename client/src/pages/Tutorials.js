import React, {useState} from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NestedList from '../components/NestedList'
import { Typography } from '@material-ui/core';

const TutorialsList = {
    items: [
        {
            id: 1,
            title: "Tutorial 1",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 2,
            title: "Tutorial 2",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 3,
            title: "Tutorial 3",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 4,
            title: "Tutorial 4",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 5,
            title: "Tutorial 5",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 6,
            title: "Tutorial 6",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 7,
            title: "Tutorial 7",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 8,
            title: "Tutorial 8",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
            open: false
        },
        {
            id: 9,
            title: "Tutorial 9",
            desc: `<iframe src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                width="900"
                                height="400"
                                frameBorder="0"
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                title="BMS Breeze Demo"
                            />`,
            descMobile: `<iframe src='https://www.youtube.com/embed/dQw4w9WgXcQ'
                                width='300'
                                height='250'
                                frameBorder='0'
                                allow='autoplay; encrypted-media'
                                allowFullScreen
                                title='BMS Breeze Demo'
                            />`,
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

const Tutorials = () => {
    const classes = useStyles();

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div className={`${classes.container} ${isMobile ? classes.containerMobile : null}`}>
            <Typography variant={!isMobile ? "h2" : "h3"} color="primary" className="desc-body2">
                BMS Breeze Tutorials
                {!isMobile ? (<><br /></>) : null}
            </Typography>
            <NestedList content={TutorialsList} type="tutorials" />
        </div>
    )
}

export default Tutorials
