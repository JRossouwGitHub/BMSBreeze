import React, {useState, useRef, useEffect} from 'react'
import {Link} from 'react-router-dom'
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import VerticalSplitRoundedIcon from '@material-ui/icons/VerticalSplitRounded';
import Collapse from '@material-ui/core/Collapse';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import PermPhoneMsgRoundedIcon from '@material-ui/icons/PermPhoneMsgRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import AppDetails from '../../package.json';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import HeadsetMicRoundedIcon from '@material-ui/icons/HeadsetMicRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import GavelRoundedIcon from '@material-ui/icons/GavelRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: '0 auto',
      backgroundColor: 'primary',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
    dropdown: {
        '&:hover': {
            backgroundColor: "#0094FF",
            color: "white"
        },
        paddingTop: '0',
        paddingBottom: '0',
        paddingLeft: '0',
        border: '1px solid #0094FF',
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Navigation = () => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [state, setState] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [openNest, setOpenNest] = React.useState(false);

    const handleClick = () => {
        setOpenNest(!openNest);
    };

    const toggleDrawer = (anchor, _open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }

        setState({ ...state, [anchor]: _open});
    };

    const list = (anchor) => (
        <div
          className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
          })}
          role="presentation"
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <Link className="navlink-mobile" to="/">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemIcon><HomeRoundedIcon color="primary" /></ListItemIcon>
                    <ListItemText>
                        Home
                    </ListItemText>
                </ListItem>
            </Link>
            <Link className="navlink-mobile" to="/about">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemIcon><InfoRoundedIcon color="primary" /></ListItemIcon>
                    <ListItemText>
                        About
                    </ListItemText>
                </ListItem>
            </Link>
            <ListItem button onClick={handleClick}>
                <ListItemIcon>
                    <VerticalSplitRoundedIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary="Services" />
                {openNest ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openNest} timeout="auto" unmountOnExit>
                <List component="div" disablePadding onClick={handleClick}>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon><HelpRoundedIcon color="primary" /></ListItemIcon>
                        <Link className="navlink-mobile2" to='/faq' onClick={toggleDrawer(anchor, false)}>FAQ</Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon><HeadsetMicRoundedIcon color="primary" /></ListItemIcon>
                        <Link className="navlink-mobile2" to='/support' onClick={toggleDrawer(anchor, false)}>Support</Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon><EmojiObjectsRoundedIcon color="primary" /></ListItemIcon>
                        <Link className="navlink-mobile2" to='/tutorials' onClick={toggleDrawer(anchor, false)}>Tutorials</Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon><CreateRoundedIcon color="primary" /></ListItemIcon>
                        <Link className="navlink-mobile2" to='/updates-changelogs' onClick={toggleDrawer(anchor, false)}>Updates/Change Logs</Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemIcon><GavelRoundedIcon color="primary" /></ListItemIcon>
                        <Link className="navlink-mobile2" to='/terms-conditions' onClick={toggleDrawer(anchor, false)}>Terms {'&'} Conditions</Link>
                    </ListItem>
                </List>
            </Collapse>
            <Link className="navlink-mobile" to="/pricing">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemIcon><MonetizationOnRoundedIcon color="primary" /></ListItemIcon>
                    <ListItemText>
                        Pricing
                    </ListItemText>
                </ListItem>
            </Link>
            <Link className="navlink-mobile" to="/contact">
                <ListItem button onClick={toggleDrawer(anchor, false)}>
                    <ListItemIcon><PermPhoneMsgRoundedIcon color="primary" /></ListItemIcon>
                    <ListItemText>
                        Contact
                    </ListItemText>
                </ListItem>
            </Link>
          </List>
          <Divider />
        <List>
            {['Login/Signup'].map((text, index) => (
                <Link className="navlink-mobile" to="/login-signup" key={text}>
                    <ListItem button  onClick={toggleDrawer(anchor, false)}>
                        <ListItemIcon><AccountCircleRoundedIcon color="primary" /></ListItemIcon>
                        <ListItemText>
                            Login/Signup
                        </ListItemText>
                    </ListItem>
                </Link>
            ))}
        </List>
        <List>
            <ListItem>
                <ListItemText>
                    <small><i>&copy; Copyright 2021, BMS Breeze.</i></small>
                    <br /><br />
                    <small><i>BMS Breeze Version {AppDetails.version}</i></small>
                </ListItemText>
            </ListItem>
        </List>
        </div>
      );

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
    };

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    {isMobile ? (<>
                        <IconButton 
                            edge="start" 
                            className={classes.menuButton} 
                            color="secondary"
                            onClick={toggleDrawer('left', true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor={'left'} open={state['left']} onClose={toggleDrawer('left', false)}>
                            {list('left')}
                        </Drawer>
                    </>) : null}
                    <Typography variant="h4" className={classes.title}>
                    <Link className="headerlink" to="/">BMS Breeze</Link>
                    </Typography>
                    {!isMobile ? (<>
                        <Typography variant="h4" className={classes.title}>
                        <Button color="inherit"><Link className="navlink" to="/">Home</Link></Button>
                        <Button color="inherit"><Link className="navlink" to="/about">About</Link></Button>
                        <Button
                            className="navlink"
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            >
                            <span className="navlink">Services</span>
                        </Button>
                        <Popper className="popper" open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList style={{padding: '0'}} className="menu-list" autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem className={classes.dropdown} onClick={handleClose}><Link className="navlink-dropdown" to="/faq">FAQ</Link></MenuItem>
                                        <MenuItem className={classes.dropdown} onClick={handleClose}><Link className="navlink-dropdown" to="/support">Support</Link></MenuItem>
                                        <MenuItem className={classes.dropdown} onClick={handleClose}><Link className="navlink-dropdown" to="/tutorials">Tutorials</Link></MenuItem>
                                        <MenuItem className={classes.dropdown} onClick={handleClose}><Link className="navlink-dropdown" to="/updates-changelogs">Updates/Change Logs</Link></MenuItem>
                                        <MenuItem className={classes.dropdown} onClick={handleClose}><Link className="navlink-dropdown" to="/terms-conditions">Terms {'&'} Conditions</Link></MenuItem>
                                    </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                        </Popper>
                        <Button color="inherit"><Link className="navlink" to="/pricing">Pricing</Link></Button>
                        <Button color="inherit"><Link className="navlink" to="/contact">Contact</Link></Button>
                        </Typography>
                        <Button color="inherit"><Link className="navlink" to="/login-signup">Login/Signup</Link></Button>
                    </>) : null}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navigation
