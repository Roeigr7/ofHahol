import { makeStyles, useTheme, MenuItem } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import React, { useState } from 'react';
import { Tabs, Tab, useMediaQuery } from '@material-ui/core';
import DrawerMenu from './DrawerMenu';
const useStyles = makeStyles((theme) => ({
  root: {
    background: 'rgba(97, 75, 14)',
    padding: 0,
    margin: 0,
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      alignItems: 'flex-start',
      backgroundColor: 'theme.palette.navColor.main',
    },
  },
  toolbar: {
    padding: 0,
    margin: 0,
    minHeight: '0',
    [theme.breakpoints.down('xs')]: {
      minHeight: '40px',
      height: '40px',
    },
  },
}));
const Navbar = ({ refProp }) => {
  const scrollToRef = (ref) =>
    ref.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToPane = (num) => scrollToRef(refProp[num]);

  console.log('s', refProp);
  const [value, setValue] = useState(0);

  const handleClickTab = (e, newValue) => {
    setValue(newValue);
  };

  //Breakpoints
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('xs'));
  const classes = useStyles();
  console.log(isMatch);
  return (
    <AppBar className={classes.root} color='transparent' position='fixed'>
      <Toolbar className={classes.toolbar}>
        {isMatch ? (
          <DrawerMenu
            scrollToRef={scrollToRef}
            scrollToPane={scrollToPane}
            refProp={refProp}
          />
        ) : (
          <Tabs onChange={handleClickTab} value={value} centered>
            <Tab onClick={() => scrollToPane(0)} disableRipple label='ראשי' />
            <Tab onClick={() => scrollToPane(1)} disableRipple label='אודות' />
            <Tab
              onClick={() => scrollToPane(2)}
              disableRipple
              label='צור קשר'
            />
          </Tabs>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
