   
import React,{useState} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LockOutlined } from '@mui/icons-material';
import axios from 'axios'
import { useNavigate } from "react-router-dom"
import {connect} from 'react-redux'
import { setUserData } from '../../redux/user/userActions';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

function SignInSide({setJump,setUserData}) {
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate();
  const handleSubmit = async() => {
      var mailformat =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if(mailformat.test(email) === true && password.length>0){
          const data = {
              email : email,
              password: password
          }
          try{
            const response = await axios.post('http://127.0.0.1:8000/user/login/', JSON.stringify(data), {
                  headers:{
                      'Content-Type': 'application/json',
                      'accept': 'application/json'
                  }
              })
            const res = await response.data;
            console.log(res.success)
            if(res.success){
                localStorage.setItem("token",res.token);
                setUserData(res.data)
                alert("Login successful");
                setEmail("");
                setPassword("");
                navigate('/homepage')
            }
          }
          catch(err){
            console.log(err);
            alert("Login Unsuccesfull! Please enter valid credentials");
            setEmail("");
            setPassword("");
          }
      }
      else{
          alert("Invalid Details")
      }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlined />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange = {(e) => setEmail(e.target.value)}
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
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
              />
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick = {() => handleSubmit()}
              >
                Sign In
              </Button>
              <Grid container justifyContent="flex-end">
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <div onClick={()=>{setJump(2)}} style={{color:'blue',textDecoration:'underline'}}>
                   Sign Up
                  </div>
                </Grid>
              </Grid>
              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setUserData : (data) => dispatch(setUserData(data))
})
export default connect(null, mapDispatchToProps)(SignInSide)