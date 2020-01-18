import React from 'react';
import clsx from 'clsx';
import { 
    AppBar,
    Toolbar,
    IconButton,
    Typography, 
  } from '@material-ui/core';
import InputIcon from '@material-ui/icons/Input';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
 const AppHeader = (props)=> {
    const classes = useStyles();
     return (
        <AppBar
      style={{width: '100%'}}
        position="fixed"
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: open,
        // })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"            
            edge="start"
            // className={clsx(classes.menuButton, {
            //   [classes.hide]: open,
            // })}
          >
            <MenuIcon
            onClick={props.handleDrawerOpen}
            />
          </IconButton>

          <IconButton
            style={{margin: 10}}
            color="inherit"
            aria-label="open drawer"
            onClick={props.goRtl}
            edge="start"
            // className={clsx(classes.menuButton, {
            //   [classes.hide]: open,
            // })}
          >
            <InputIcon />
          </IconButton>
          <Typography stayle={{marginLeft: 10}} variant="h6" noWrap>
            Mini variant drawer
          </Typography>
        </Toolbar>
      </AppBar>
     );
 }
 export default AppHeader;