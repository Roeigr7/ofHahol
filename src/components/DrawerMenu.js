import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronRight';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const drawerWidth = 180;

const useStyles = makeStyles((theme) => ({
  listItemText: {
    fontWeight: 'bold',
    color: theme.palette.primary.main,
    fontFamily: 'heebo,sans-serif',
  },
  list: {
    '&$selected': {
      backgroundColor: 'transparent',

      '&:hover': {
        backgroundColor: 'rgba(0,0,0,0.05)',
      },
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.main,
  },
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(-1),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  title: {
    color: 'white',
    fontSize: '1.2rem',

    fontFamily: 'heebo',
    fontWeight: '400',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,

    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),

    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

const DrawerMenu = ({ refProp, scrollToRef, scrollToPane }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position='fixed'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            padding: '0 20px',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color='#adadad'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            style={{ padding: '0px' }}
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            align='center'
            display='inline'
            className={classes.title}
            noWrap
          >
            עוף החול
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='persistent'
        anchor='left'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon color='primary' />
            ) : (
              <ChevronRightIcon color='primary' />
            )}
          </IconButton>
        </div>
        <Divider />

        <Divider />
        <List>
          {['ראשי', 'אודות', 'צור קשר'].map((text, index) => (
            <ListItem
              selected={true}
              classes={{ root: classes.list, selected: classes.selected }}
              onClick={() => scrollToPane(index)}
              button
              key={text}
            >
              <ListItemIcon>
                {index === 0 ? (
                  <HomeIcon />
                ) : index === 1 ? (
                  <ReceiptIcon />
                ) : (
                  <WhatsAppIcon />
                )}
              </ListItemIcon>
              <ListItemText
                disableTypography
                className={classes.listItemText}
                primary={text}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
