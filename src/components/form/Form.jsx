import { useState } from 'react';
import styles from './Form.module.css'
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Paper
} from '@mui/material';
import Dashboard from '../dashboard/Dashboard';
import ErrorPortal from '../errorPortal/ErrorPortal';
import { useEffect } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errorDetails, setErrorDetails] = useState({
    error: false,
    errorMessage: ''
  })

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
  const userStatus = JSON.parse(localStorage.getItem("userInfo")) ?? {};
  return userStatus.isLoggedIn === true;
})


// runs once after component in rendered then for each state change
 useEffect(() => {
    console.log("Variation 1: no dependency parameter");
  });


// runs only when the name state has changed
  useEffect(() => {
    console.log("Variation 3: with dependency array parameter [...] - form name changed");
  }, [formData.name]);



// runs only once - when component is loaded
  useEffect(() => {
    console.log("Variation 2: Empty dependency array [] ");
    const userStatus = JSON.parse(localStorage.getItem("userInfo")) ?? {};
    if (userStatus.isLoggedIn === true) {
        setIsLoggedIn(true);
        setFormData({
          ...formData,
          name: userStatus.name
        })
    }
}, []);


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };



  const handleSubmit = (e) => {
    e.preventDefault();

    if(formData.name.includes("@") || formData.name.includes(".") || !formData.email.includes("@") || !formData.password.length > 6 ){
        setErrorDetails((errorDetails)=>({
            ...errorDetails,
            error:true,
            errorMessage: "Please enter valid name, email and password(not empty)"
        }))
        return
        // console.log(errorDetails);
    }

    setIsLoggedIn(true)

    const userInfo = {
      name: formData.name,
      isLoggedIn:true
    }

    localStorage.setItem("userInfo", JSON.stringify(userInfo))
    // console.log(localStorage.getItem("userInfo"));

  };


  const handleLogoutClick = ()=>{
    localStorage.removeItem("userInfo")
    setIsLoggedIn(false)
    setFormData({
    name: '',
    email: '',
    password: ''
  });
  }

  const handleDismissPortal = ()=>{
    setErrorDetails({
      ...errorDetails,
      error:false,
      errorMessage: ''
    })
  }

  return (
    <>

    {errorDetails.error && <ErrorPortal message={errorDetails.errorMessage} closePortal={handleDismissPortal} />}
    {isLoggedIn? <Dashboard name={formData.name} loginStatus={handleLogoutClick} /> :
    <>
    <h2>Login using useEffect and React Portal</h2>
    <Grid container component="main" sx={{ height: '100vh', marginTop: '200px'}} justifyContent="center">
      <Grid sx={{ width: { xs: '100%', sm: '66.66%', md: '33.33%' } }}>
        <Paper elevation={15} sx={{ padding: 4 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component="h1" variant="h5">
              Login Form
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleInputChange}
              />
              <Button
                className={styles.loginButton}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2}}
              >
                Log In
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Grid>
    </>}
    </>
  );
};

export default Form;
