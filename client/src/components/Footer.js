import React from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Footer = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <div>
            {!isMobile ? (
                <footer>
                    &copy; Copyright 2021, BMS Breeze. <br />
                    <br />
                        <a href="#" style={{marginLeft: '.5%', marginRight: '.5%'}} target="_blank"><FacebookIcon color="secondary" fontSize="large" /></a>
                        <a href="#" style={{marginLeft: '.5%', marginRight: '.5%'}} target="_blank"><TwitterIcon color="secondary" fontSize="large" /></a>
                        <a href="#" style={{marginLeft: '.5%', marginRight: '.5%'}} target="_blank"><YouTubeIcon color="secondary" fontSize="large" /></a>
                        <a href="#" style={{marginLeft: '.5%', marginRight: '.5%'}} target="_blank"><InstagramIcon color="secondary" fontSize="large" /></a>
                    <br />
                </footer>
            ) : null}
            
        </div>
    )
}

export default Footer
