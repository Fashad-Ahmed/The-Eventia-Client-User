import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { NavLink } from "react-router-dom"
import firebase from '../config/firebase';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authenticate } from '../redux/actions';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        The Eventia
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
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
    marginTop: theme.spacing(2),
    color: '#F14E95'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#F14E95',
    padding: "5px",
    fontSize: "14px",
    borderRadius: "15px"
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export default function SignIn() {
  let key = `62b3249a6c74de4270f2579d`;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [email, setemail] = useState(null);
  const [isEmailValidate, setIsEmailValidate] = useState(false);
  const [isPasswordValidate, setIsPasswordValidate] = useState(false);
  const [showError, setShowError] = useState(false);
  const [password, setpassword] = useState('');
  const history = useHistory();


  const signIn = e => {
    e.preventDefault();
    console.log(`Email and Passwords are ==> ${email} & ${password}`)
    if (isEmailValidate && isPasswordValidate) {
      if (email == "fashad_ahmed@gmail.com" && password == "christopherNolan112233") {
        localStorage.setItem('admin', email);
        localStorage.setItem('key', key);
        dispatch(authenticate('', email));
        history.push("/wedding")
        localStorage.removeItem('user')
      }
      else {
        setOpen(!open);
        firebase.auth().signInWithEmailAndPassword(
          email,
          password
        ).then(data => {
          // sessionStorage.setItem("email", data.user.email)
          const user = firebase.auth().currentUser;
          const emailVerified = user.emailVerified;
          if (!emailVerified) {
            alert('First confirm your email address!')
            setOpen(false);
            return;
          }

          setOpen(false);
          dispatch(authenticate(data.user.uid, data.user.email));
          localStorage.setItem('user', data.user.email.toLowerCase());
          history.push("/packages")
          localStorage.removeItem('admin')
          console.log('user has set', localStorage.getItem('user'))
          //-------------------------------------------------------------TODO-
          // data?.user.email === "admin@gmail.com" ? history.push("/Packages") : history.push("/user")
        }).catch(err => {
          console.log(err)
          alert("Incorrect Credentials")
          setOpen(false);

        })
      }
    } else {
      setShowError(true)
      setOpen(false);
    }
  }

  const forgotPassword = (Email) => {
    firebase.auth().sendPasswordResetEmail(Email)
      .then(function () {
        alert('Please check your email...')
      }).catch(function (e) {
        console.log(e)
      })
  }

  const onChangeInput = (type, e) => {
    if (type == 'email') {
      setemail(e.target.value)
      setIsEmailValidate(validateEmail(e.target.value));
      return
    }
    setpassword(e.target.value)
    if (e.target.value.length >= 6) {
      setIsPasswordValidate(true);
    } else {
      setIsPasswordValidate(false);
    }

  }
  return (
    <Container component="main" maxWidth="xs" className="login-comp">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          <div className="fh5co-heading both animate-box">
            <h2>Login</h2>
          </div>
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required={true}
            isRequired={true}
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            value={email}
            onChange={onChangeInput.bind(null, "email")}
            autoComplete="email"
            autoFocus
          />
          {showError && (!isEmailValidate && (
            <div>This is a wrong email</div>
          ))}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            value={password}
            onChange={onChangeInput.bind(null, "password")}
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {showError && (!isPasswordValidate && (
            <div>Password length must be at least 6 characters</div>
          ))}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={signIn}
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Backdrop className={classes.backdrop} open={open} onClick={handleClose}>
            <CircularProgress color="inherit" />
          </Backdrop>
          <Grid container>
            <Grid item xs>
              <button style={{ border: "none", fontSize: "14px", backgroundColor: "white" }} onClick={(e) => {
                e.preventDefault();
                forgotPassword(email);
              }}>
                Forgot password?
                </button>
              <Link href="#" variant="body2">
              </Link>
            </Grid>
            <Grid item>
              <NavLink to="/signup" variant="body2">
                No account? Sign Up
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container >
  );
}




