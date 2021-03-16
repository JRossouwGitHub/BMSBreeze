import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import HelpRoundedIcon from '@material-ui/icons/HelpRounded';
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';
import EmojiObjectsRoundedIcon from '@material-ui/icons/EmojiObjectsRounded';
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import CachedRoundedIcon from '@material-ui/icons/CachedRounded';
import BugReportRoundedIcon from '@material-ui/icons/BugReportRounded';
import YouTubeIcon from '@material-ui/icons/YouTube';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #0094FF'
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  block: {
    display: "block"
  },
}));

export default function NestedList({content, type}) {
  const classes = useStyles();
  const [state, setState] = React.useState(content);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (id) => {
      setState(state => ({...state, items: state.items.map((item) => item.id === id ? {...item, open: !item.open} : item)}))
  };

  return (
    <div>
        {state.items.map((item) => 
            <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.root}
            key={item.id}
          >
            <ListItem button onClick={() => handleClick(item.id)}>
              <ListItemIcon>
                {type == "faq" ? <HelpRoundedIcon color="primary" /> : null}
                {type == "tutorials" ? <EmojiObjectsRoundedIcon color="primary" /> : null}
                {type == "updates" ? <CreateRoundedIcon color="primary" /> : null}
              </ListItemIcon>
                {isMobile ? (<><ListItemText primary={<strong><u>{item.title}</u></strong>} /></>) : (<><ListItemText primary={<strong><u>{item.title}</u></strong>} /></>)}
              {item.open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={item.open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem className={classes.nested} className={type == "updates" || (isMobile && type != "tutorials") ? classes.block : null}>
                  <ListItemIcon>
                    {type == "faq" && !isMobile ? <DoneRoundedIcon color="primary" /> : null}
                    {type == "updates" ? <AddRoundedIcon color="primary" /> : null}
                  </ListItemIcon>
                  {type == "tutorials" ? (<>
                    
                    {!isMobile ? (<>
                      <ListItemIcon>
                        <YouTubeIcon color="primary" />
                        </ListItemIcon>
                        <div dangerouslySetInnerHTML={{__html: item.desc}} style={{display: 'block', paddingLeft: '0', margin:'0 auto'}} />
                      </>) : 
                      <div dangerouslySetInnerHTML={{__html: item.descMobile}} style={{display: 'block', margin:'0 auto', marginLeft: '-62.5px'}} /> 
                      }
                  </>) : (<>
                    {item.desc.split(' * ').map((text) => <ListItemText primary={text} />)}
                  </>)}
                </ListItem>
                {type == "updates" ? (<>
                    <ListItem className={classes.nested} className={classes.block}>
                        <ListItemIcon>
                            <CachedRoundedIcon color="primary" />
                        </ListItemIcon>
                        {item.changed.split(' * ').map((text) => <ListItemText primary={text} />)}
                    </ListItem>
                    <ListItem className={classes.nested} className={classes.block}>
                        <ListItemIcon>
                            <BugReportRoundedIcon color="primary" />
                        </ListItemIcon>
                        {item.bugs.split(' * ').map((text) => <ListItemText primary={text} />)}
                    </ListItem>
                </>) : null}
              </List>
            </Collapse>
          </List>
        )}
        <br></br>
    </div>
  );
}