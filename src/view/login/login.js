import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {AUTH_ACTION} from '../../store/actions/actions'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const validationSchema = Yup.object().shape({
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string().required('Password is required')
  .min(6, 'Password should be more than 6 charachters')
});

const useStyles = (theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

class SignIn extends React.Component {
    render() {
     console.log('render')
     const checkAuth = ()=> {
        if(this.props.data === 'SUCSSES') {
            console.log("Redirect")
            this.props.history.push('/users')
        }
        else if (this.props.data !== 'SUCSSES') {
          console.log('props1',this.props.data)
          console.log('FAILED Login')
        }
    }
    checkAuth()
        const {classes} = this.props;
        return (
          <div>
            <Formik
            initialValues={{
              email: '',
              password: ''
            }}
            onSubmit={(values)=> {
              console.log('values',values.email, values.password)
                        this.props.auth(values.email, values.password)
                          checkAuth()
                      }}
                      render={
                        (props)=> {
                          return <div  className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                  </Avatar>
                                  <Typography component="h1" variant="h5">
                                    Sign in
                                  </Typography>
                          <form className={classes.form} onSubmit={props.handleSubmit}>
                                  <Container component="main" maxWidth="xs">
                                  <CssBaseline />
                                  <TextField
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   label="Email Address"
                                   name="email"
                                    helperText={(props.errors.email && props.touched.email) && props.errors.email}
                                    onChange={props.handleChange}
                                  />
                                   <TextField
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   label="Password"
                                   name="password"
                                   helperText={(props.errors.password && props.touched.password) && props.errors.password}
                                   onChange={props.handleChange}
                                  />
                                  <Button
                                    color="primary"
                                    style={{marginTop: 30}}
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    className={classes.submit}
                                  >
                                    Sign In
                                  </Button>
                                <Grid container>
                                  <Grid item xs>
                                    <Link href="#" variant="body2">
                                      ?Forgot password 
                                    </Link>
                                  </Grid>
                                  <Grid item>
                                    <Link href="#" variant="body2">
                                      {"Don't have an account? Sign Up"}
                                    </Link>
                                  </Grid>
                               </Grid>
                                  </Container>
                          </form>
                          <Box mt={8}>
                           <Copyright />
                          </Box>
                          </div>
                        }
                      }
                      validationSchema={validationSchema}
            />
          </div>
          );
    }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}
function mapDispachToProps(dispatch) {
  return {
    auth: (name, password)=> dispatch(AUTH_ACTION(name, password))
  }
}
export default compose(
  withStyles(useStyles),
  connect(mapStateToProps, mapDispachToProps),
)(SignIn);
