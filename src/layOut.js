import React, {useState} from 'react';
import {connect} from 'react-redux';
import clsx from 'clsx';
import SideBar from './sideBar';
import AppHeader from './AppHeader';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { 
        CssBaseline,
        Typography,
      } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

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

 function LayOut(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    if(open)  {setOpen(false);}
    else {setOpen(true);}
  };
  const [rtl, setRtl] = useState({
   direction: 'ltr'
  });
  const goRtl = () => {
    let newRtl = rtl.direction === "ltr" ? "rtl" : "ltr";
    setRtl({
      direction: newRtl
    });
    let newTheme = theme1.direction === "ltr" ? "rtl" : "ltr";
    setTheme({
      direction: newTheme
    });
  };

  const [theme1, setTheme] = useState({
    direction: 'ltr',
  });
  const themee1 = createMuiTheme(theme1)
  return (
    <div dir={rtl.direction}>
    <ThemeProvider theme={themee1}>
        <div className={classes.root}>
      <CssBaseline />
      <SideBar open={open}/>
      <AppHeader goRtl={goRtl} handleDrawerOpen={handleDrawerOpen}/>
      
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography paragraph>
          {props.children}
        </Typography>
      </main>
    </div>
    </ThemeProvider>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps)(LayOut);
















