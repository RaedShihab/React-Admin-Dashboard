import React from 'react';
import axios from 'axios';
import LayOut from '../../../layOut'
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import { Alert } from '@material-ui/lab';
import {TextField,Button, Grid, Snackbar,Container, CircularProgress, Typography} from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = (theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 500,
    },
    marginTop: '150px',
  },
  btn: {
    margin: '80px 0px 0px 0px'
  }
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema = Yup.object().shape({
  name: Yup.string('Enter a name').required('Name is required')
  .min(2, 'Seems a bit short...')
  .max(10, 'We prefer insecure system, try a shorter password.'),
  email: Yup.string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  location: Yup.string('Enter your adress').required('The address is required'),
});

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openSnackSucc: false,
      showLoading: false,
      openSnackErr: false
    };
  }
  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({
      openSnackSucc: false,
      openSnackErr:false
    })
  };
  render() {
    const {classes} = this.props 
    return (
      <LayOut>
        <div>
      <Formik
        initialValues={{
          name:'',
          email:'',
          phone:'',
          location:''
        }}
        onSubmit={values => {
          this.setState({
            showLoading:true
          })
          axios.post('https://jsonplaceholder.typicode.com/users', values)
            .then(res=> {
              console.log(res)
              this.setState({
                showLoading: false,
                openSnackSucc: true,
              })
            })
            .catch(err => {
              console.log(err)
              this.setState({
                openSnackErr:true,
                showLoading: false,
              })
            })
        }
        }
        render={(props=> {
          return <form
            form
            onSubmit={props.handleSubmit}
                 >
            <React.Fragment>
              <Typography style={{marginBottom: 10}} variant='h5'>
                     Add User
              </Typography>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  item
                  sm={6}
                  xs={12}
                >
                  <TextField
                    autoComplete="fname"
                    fullWidth
                    helperText={(props.errors.name && props.touched.name) && props.errors.name}
                    id="Name"
                    label="User Name"
                    name="name"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                >
                  <TextField
                    autoComplete="fname"
                    fullWidth
                    helperText={(props.errors.email && props.touched.name) && props.errors.email}
                    id="Email"
                    label="Email"
                    name="email"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                >
                  <TextField
                    autoComplete="fname"
                    fullWidth
                    helperText={(props.errors.phone && props.touched.phone) && props.errors.phone}
                    id="firstName"
                    label="Phon Number"
                    name="phone"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  />
                </Grid>
                <Grid
                  item
                  sm={6}
                  xs={12}
                >
                  <TextField
                    autoComplete="fname"
                    fullWidth
                    helperText={(props.errors.location && props.touched.location) && props.errors.location}
                    id="firstName"
                    label="Location"
                    name="location"
                    onBlur={props.handleBlur}
                    onChange={props.handleChange}
                  />
                </Grid>
              </Grid>
              <Button 
                color="primary"
                style={{marginTop: 30}}
                type="submit"
                variant="contained"
              >
                {!this.state.showLoading&&'add'} 
                {this.state.showLoading&&<CircularProgress
                  color="inherit"
                  size={23}
                />}
              </Button>
              <div>
                <Snackbar
                  autoHideDuration={3000}
                  onClose={this.handleClose}
                  open={this.state.openSnackSucc}
                >
                  <Alert
                    onClose={this.handleClose}
                    severity="success"
                    style={{backgroundColor: 'green', color: 'white'}}
                  >
                    The User Has Added Successfuly
                  </Alert>
                </Snackbar>
                <Snackbar
                  autoHideDuration={3000}
                  onClose={this.handleClose}
                  open={this.state.openSnackErr}
                >
                  <Alert
                    onClose={this.handleClose}
                    severity="error"
                    style={{backgroundColor: 'red', color: 'white'}}
                  >
                    Please, Try Again.
                  </Alert>
                </Snackbar>
              </div>
            </React.Fragment>
          </form>
        })}
        validationSchema={validationSchema}
      />
    </div>
      </LayOut>
    );
  }
}
  export default withStyles(useStyles)(UserForm);